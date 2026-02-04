<template>
  <canvas id="canvas" ref="canvas" class="absolute z-1 w-full h-full bg-slate-900"/>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const canvas = ref<HTMLCanvasElement | null>(null)

let scene!: THREE.Scene
let camera!: THREE.PerspectiveCamera
let renderer!: THREE.WebGLRenderer
let controls: OrbitControls | null = null
let starsGroup: THREE.Group | null = null
const stars: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>[] = []

let planetMeshes: { mesh: THREE.Mesh; data: any }[] = []
let planetAngles: Record<string, number> = {}
let rafId = 0

const setSize = () => {
  if (!renderer || !camera) return
  const { innerWidth, innerHeight } = window
  camera.aspect = innerWidth / innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(innerWidth, innerHeight)
}

const cleanup = () => {
  window.removeEventListener('resize', setSize)
  cancelAnimationFrame(rafId)
  if (renderer) {
    renderer.setAnimationLoop(null)
    renderer.dispose()
    renderer = null as any
  }
  if (scene) {
    scene.traverse((child: THREE.Object3D) => {
      const mesh = child as THREE.Mesh
      if (mesh.isMesh) {
        mesh.geometry?.dispose()
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m: THREE.Material | undefined) => m && m.dispose && m.dispose())
        } else {
          mesh.material?.dispose()
        }
      }
    })
    scene = null as any
  }
  if (controls) {
    controls.dispose()
    controls = null
  }
  camera = null as any
  planetMeshes = []
  planetAngles = {}
}

const initThree = () => {
  scene = new THREE.Scene()

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value as HTMLCanvasElement,
    antialias: true,
    alpha: true
  })
  renderer.setClearColor(0x000000, 0)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)
  renderer.shadowMap.enabled = true

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(32, 32, 32)
  camera.lookAt(0, 0, 0)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false
  controls.enablePan = false
  controls.enableDamping = true
  controls.dampingFactor = 0.02

  const ambient = new THREE.AmbientLight(0xffffff, 0.1)
  scene.add(ambient)

  const sunLight = new THREE.PointLight(0xffffff, 2048, 2048)
  sunLight.position.set(0, 0, 0)
  sunLight.castShadow = true
  sunLight.shadow.mapSize.set(256, 256)
  sunLight.shadow.camera.near = 1
  sunLight.shadow.camera.far = 256
  scene.add(sunLight)

  const sunGlowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      glowColor: { value: new THREE.Color(0xffcc33) },
      viewVector: { value: new THREE.Vector3(0, 0, 1) }
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.8 - dot(vNormal, vec3(0.0, 0.0, 0.5)), 2.0);
        gl_FragColor = vec4(glowColor * intensity, intensity);
      }
    `,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true
  })
  const sunGlowMesh = new THREE.Mesh(new THREE.SphereGeometry(8, 64, 64), sunGlowMaterial)
  scene.add(sunGlowMesh)

  const planetOrbitData = [
    { speed: 0.32, radius: 11, incDeg: 27, nodeDeg: 10, phaseDeg: 270 },
    { speed: 0.17, radius: 12, incDeg: -18, nodeDeg: 75, phaseDeg: 225 },
    { speed: 0.12, radius: 14, incDeg: 0, nodeDeg: 45, phaseDeg: 135 },
    { speed: 0.07, radius: 16, incDeg: -36, nodeDeg: 25, phaseDeg: 270 },
    { speed: 0.048, radius: 19, incDeg: 18, nodeDeg: 55, phaseDeg: 90 },
    { speed: 0.027, radius: 21, incDeg: -27, nodeDeg: 90, phaseDeg: 225 },
    { speed: 0.022, radius: 23, incDeg: 36, nodeDeg: 75, phaseDeg: 180 },
    { speed: 0.012, radius: 25, incDeg: -18, nodeDeg: 15, phaseDeg: 135 }
  ]

  const orbitGroup = new THREE.Group()
  planetAngles = {}
  planetMeshes = []

  planetOrbitData.forEach((p, idx) => {
    const planetSizes = [0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 0.6, 0.7]
    const size = planetSizes[idx] ?? 0.7
    const geometry = new THREE.SphereGeometry(size, 16, 16)
    const material = new THREE.MeshStandardMaterial({ color: '#FFFFFF' })
    const mesh = new THREE.Mesh(geometry, material)

    planetAngles[mesh.uuid] = THREE.MathUtils.degToRad(p.phaseDeg ?? 0)

    scene.add(mesh)
    planetMeshes.push({ mesh, data: p })

    const positions: number[] = []
    for (let i = 0; i <= 256; i++) {
      const t = (i / 256) * Math.PI * 2
      positions.push(Math.cos(t) * p.radius, 0, Math.sin(t) * p.radius)
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    const mat = new THREE.LineBasicMaterial({ color: 'white', transparent: true, opacity: 0.08 })
    const line = new THREE.LineLoop(geo, mat)
    line.rotation.set(THREE.MathUtils.degToRad(p.incDeg), THREE.MathUtils.degToRad(p.nodeDeg), 0)
    orbitGroup.add(line)
  })

  scene.add(orbitGroup)

  const createSphere = (size: number) => {
    const geom = new THREE.SphereGeometry(size, 32, 32)
    const mat = new THREE.MeshStandardMaterial()
    return new THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>(geom, mat)
  }

  starsGroup = new THREE.Group()
  const numberOfStars = 1024
  for (let i = 0; i < numberOfStars; i++) {
    const randomSize = Math.random() * 0.1 + 0.1
    const star = createSphere(randomSize)
    const mat = star.material as THREE.MeshStandardMaterial
    mat.emissive = new THREE.Color(0xffffff)
    mat.emissiveIntensity = 0.75
    star.position.set(Math.random() * 256 - 128, Math.random() * 256 - 128, Math.random() * 256 - 128)
    starsGroup.add(star)
    stars.push(star)
  }
  scene.add(starsGroup)

  let lastTime = 0
  const animate = (time: number) => {
    if (!renderer || !scene || !camera) {
      rafId = requestAnimationFrame(animate)
      return
    }

    const delta = lastTime ? (time - lastTime) / 1000 : 0
    lastTime = time

    // twinkle stars + slow rotation
    const twinkle = time * 0.01
    stars.forEach((star, idx) => {
      star.material.emissiveIntensity = (Math.sin(twinkle + idx * 0.5) + 1) * 0.375
    })
    if (starsGroup) {
      const starRotationSpeed = 32
      starsGroup.rotation.y += delta / starRotationSpeed
    }

    // planet orbits
    planetMeshes.forEach(({ mesh, data }) => {
      const p = mesh.userData || data
      const speed: number = (p.speed ?? data.speed ?? 0.01) as number
      const radius: number = (p.radius ?? data.radius ?? 10) as number
      const incDeg: number = (p.incDeg ?? data.incDeg ?? 0) as number
      const nodeDeg: number = (p.nodeDeg ?? data.nodeDeg ?? 0) as number

      planetAngles[mesh.uuid] = (planetAngles[mesh.uuid] ?? 0) - delta * speed
      const angle = planetAngles[mesh.uuid] as number

      const base = new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(
        THREE.MathUtils.degToRad(incDeg),
        THREE.MathUtils.degToRad(nodeDeg),
        0,
        'XYZ'
      ))
      base.applyQuaternion(q)
      mesh.position.copy(base)

      mesh.rotation.y += delta * (1 / Math.max(0.1, speed))
    })

    if (controls) controls.update()

    renderer.render(scene, camera)
    rafId = requestAnimationFrame(animate)
  }
  rafId = requestAnimationFrame(animate)

  function setSize() {
    if (!renderer || !camera) return
    const { innerWidth, innerHeight } = window
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(innerWidth, innerHeight)
  }

  window.addEventListener('resize', setSize)
}

onMounted(() => {
  const kickoff = () => initThree()
  if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(() => kickoff(), { timeout: 300 })
  } else {
    setTimeout(() => kickoff(), 50)
  }
})

onUnmounted(() => {
  cleanup()
})
</script>
