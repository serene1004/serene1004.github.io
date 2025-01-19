<script setup>
import { onMounted, ref } from "vue"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

const canvas = ref(null)

onMounted(() => {
  // https://www.solarsystemscope.com/textures/
  const textureLoader = new THREE.TextureLoader()
  const sunTexture = textureLoader.load('/textures/space/2k_sun.jpg');
  const earthTexture = textureLoader.load('/textures/space/2k_earth_daymap.jpg');
  const moonTexture = textureLoader.load('/textures/space/2k_moon.jpg');
  const starsMilkywayTexture = textureLoader.load('/textures/space/2k_stars_milky_way.jpg');
  sunTexture.wrapS = THREE.RepeatWrapping
  sunTexture.wrapT = THREE.RepeatWrapping
  earthTexture.wrapS = THREE.RepeatWrapping
  earthTexture.wrapT = THREE.RepeatWrapping
  moonTexture.wrapS = THREE.RepeatWrapping
  moonTexture.wrapT = THREE.RepeatWrapping
  starsMilkywayTexture.wrapS = THREE.RepeatWrapping
  starsMilkywayTexture.wrapT = THREE.RepeatWrapping

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)
  renderer.shadowMap.enabled = true

  // Scene
  const scene = new THREE.Scene()
  // scene.background = starsMilkywayTexture

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(64, 32, -64)
  scene.add(camera)

  // Light
  const ambientLight = new THREE.AmbientLight("white", 0.05)
  scene.add(ambientLight)

  const sunLight = new THREE.PointLight("white", 1024, 1024)
  sunLight.position.set(0, 0, 0)
  sunLight.castShadow = true
  sunLight.shadow.mapSize.width = 256
  sunLight.shadow.mapSize.height = 256
  sunLight.shadow.camera.near = 1
  sunLight.shadow.camera.far = 128
  scene.add(sunLight)

  const lightHelper = new THREE.PointLightHelper(sunLight)
  // scene.add(lightHelper)

  // Geometry
  const sunGeometry = new THREE.SphereGeometry(16, 32, 32)
  const earthGeometry = new THREE.SphereGeometry(2, 32, 32)
  const moonGeometry = new THREE.SphereGeometry(0.5, 32, 32)

  // Material
  const sunMaterial = new THREE.MeshStandardMaterial({
    map: sunTexture,
  })
  const earthMaterial = new THREE.MeshStandardMaterial({
    map: earthTexture,
  })
  const moonMaterial = new THREE.MeshStandardMaterial({
    map: moonTexture,
  })

  // Mesh
  const sun = new THREE.Mesh(sunGeometry, sunMaterial)
  const earth = new THREE.Mesh(earthGeometry, earthMaterial)
  const moon = new THREE.Mesh(moonGeometry, moonMaterial)

  const sunGlowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      viewVector: { type: "v3", value: camera.position },
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.8 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(0.976, 0.451, 0.086, 1.0) * intensity; // #f97316의 RGB 변환
      }
    `,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
  })
  const sunGlow = new THREE.Mesh(new THREE.SphereGeometry(8, 32, 32), sunGlowMaterial)
  // sunGlow.scale.set(1.25, 1.25, 1.25); // 태양보다 조금 더 크게
  scene.add(sunGlow)

  // Group
  const sunGroup = new THREE.Group()
  const earthGroup = new THREE.Group()
  earthGroup.add(earth, moon)
  earthGroup.position.set(32, 0, 0)
  earthGroup.rotation.x = THREE.MathUtils.degToRad(23.5)
  moon.position.set(3, 0, 0)

  // sunGroup.add(sun, earthGroup)
  sunGroup.add(earthGroup)
  scene.add(sunGroup)

  const numberOfStars = 256
  const starGeometry = new THREE.SphereGeometry(0.5, 16, 16)
  const starsGroup = new THREE.Group()
  const starsArray = []
  for (let i = 0; i < numberOfStars; i++) {
    const starMaterial = new THREE.MeshStandardMaterial({
      color: "white",
    })
    const star = new THREE.Mesh(starGeometry, starMaterial)
    const min = -128
    const max = 128
    const posX = Math.random() * (max - min + 1) + min
    const posY = Math.random() * (max - min + 1) + min
    const posZ = Math.random() * (max - min + 1) + min
    star.position.set(posX, posY, posZ)
    starsGroup.add(star)
    starsArray.push(star)
  }
  scene.add(starsGroup)

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.maxDistance = 128
  controls.minDistance = 32

  const clock = new THREE.Clock()

  const draw = () => {
    const delta = clock.getDelta()

    // for (let i = 0; i < numberOfStars; i++) {
    //   const random = Math.random()
    //   starsArray[i].scale.set(random / 2, random / 2, random / 2)
    // }

    sunGroup.rotation.y += delta / 64
    earthGroup.rotation.y += delta / 2
    earth.rotation.y += delta / 4
    moon.rotation.y += delta / 2
    starsGroup.rotation.y += delta / 8 // 회전시간

    renderer.render(scene, camera)
    renderer.setAnimationLoop(draw)
  }

  const setSize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render(scene, camera)
  }
  window.addEventListener("resize", setSize)

  draw()
})
</script>

<template>
  <canvas id="canvas" ref="canvas" />
</template>

<style lang="scss" scoped>
#canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
