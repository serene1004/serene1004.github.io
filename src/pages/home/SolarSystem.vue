<script setup>
import { onMounted, onUnmounted, ref } from "vue"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from "gsap"
import { storeToRefs } from 'pinia'
import { useControlStore } from '@/store/controlStore'

import ControlDialog from './ControlDialog.vue'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const { isAnimationActive } = storeToRefs(useControlStore())

const MAX_DISTANCE = 128
const canvas = ref(null)

let controls, scene, clock, camera, textureLoader

onMounted(() => {
  scene = new THREE.Scene()
  clock = new THREE.Clock()
  textureLoader = new THREE.TextureLoader()

  // 텍스처 로드 함수
  const loadTexture = (path) => {
    const texture = textureLoader.load(path)
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    texture.mapping = THREE.EquirectangularReflectionMapping
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  }

  // 텍스처
  const textures = {
    sun: loadTexture('/textures/space/2k_sun.jpg'),
    mercury: loadTexture('/textures/space/2k_mercury.jpg'),
    venus: loadTexture('/textures/space/2k_venus_surface.jpg'),
    earth: loadTexture('/textures/space/2k_earth_daymap.jpg'),
    moon: loadTexture('/textures/space/2k_moon.jpg'),
    star: loadTexture('/textures/space/2k_eris_fictional.jpg'),
    mars: loadTexture('/textures/space/2k_mars.jpg'),
    jupiter: loadTexture('/textures/space/2k_jupiter.jpg'),
    saturn: loadTexture('/textures/space/2k_saturn.jpg'),
    saturnRing: loadTexture('/textures/space/2k_saturn_ring_alpha.png'),
    uranus: loadTexture('/textures/space/2k_uranus.jpg'),
    neptune: loadTexture('/textures/space/2k_neptune.jpg'),
  }

  // 렌더러
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)
  renderer.shadowMap.enabled = true

  // 카메라
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.set(MAX_DISTANCE/4, MAX_DISTANCE/4, MAX_DISTANCE/4)
  camera.lookAt(0, 0, 0)
  scene.add(camera)

  // 빛
  scene.add(new THREE.AmbientLight("white", 0.1))
  const sunLight = new THREE.PointLight("white", 2048, 2048)
  sunLight.position.set(0, 0, 0)
  sunLight.castShadow = true
  sunLight.shadow.mapSize.set(128, 128)
  sunLight.shadow.camera.near = 1
  sunLight.shadow.camera.far = 256
  scene.add(sunLight)

  // Sphere 생성 함수
  const createSphere = (size, texture, name) => {
    const matOpt = texture ? { map: texture } : {}
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(size, 32, 32),
      new THREE.MeshStandardMaterial(matOpt)
    )
    if (name) sphere.name = name
    return sphere
  }

  // 행성 생성
  const sun = createSphere(6, textures.sun, 'sun')
  sun.material.emissive = new THREE.Color("white")
  sun.material.emissiveMap = textures.sun
  sun.material.emissiveIntensity = 0.75

  const mercury = createSphere(0.4, textures.mercury, 'mercury')
  const venus   = createSphere(0.9,  textures.venus,   'venus')
  const earth   = createSphere(1.0,  textures.earth,   'earth')
  const moon    = createSphere(0.25, textures.moon,    'moon')
  const mars    = createSphere(0.55, textures.mars,    'mars')
  const jupiter = createSphere(2.5,  textures.jupiter, 'jupiter')
  const saturn  = createSphere(2.1,  textures.saturn,  'saturn')
  const uranus  = createSphere(0.9,  textures.uranus,  'uranus')
  const neptune = createSphere(0.9, textures.neptune, 'neptune')

  scene.add(sun)
  earth.add(moon)
  moon.position.set(1.5, 0, 0)
  earth.rotation.x = THREE.MathUtils.degToRad(23.5)
  saturn.rotation.x = THREE.MathUtils.degToRad(27)

  // 토성 고리
  const createSaturnRing = () => {
    const ringGeometry = new THREE.RingGeometry(3.5, 4.5, 32)
    const ringMaterial = new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      opacity: 0.75,
      transparent: true,
      emissive: new THREE.Color('white'),
      emissiveMap: textures.saturnRing,
      emissiveIntensity: 0.75,
    })
    const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.rotation.x = Math.PI / 2
    return ring
  }
  saturn.add(createSaturnRing())

  // 그룹
  const sunGroup = new THREE.Group()
  sunGroup.add(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune)
  scene.add(sunGroup)

  // 별
  const starsGroup = new THREE.Group()
  const stars = []
  for (let i = 0; i < 1024; i++) {
    const star = createSphere(Math.random() * 0.1 + 0.2, null)
    star.material.emissive = new THREE.Color("white")
    star.material.emissiveMap = textures.star
    star.material.emissiveIntensity = 0.75
    star.position.set(
      Math.random() * 384 - 192,
      Math.random() * 384 - 192,
      Math.random() * 384 - 192
    )
    starsGroup.add(star)
    stars.push(star)
  }
  scene.add(starsGroup)

  // 별 반짝임
  function twinkleStars(time) {
    const t = time * 0.025
    stars.forEach((star, idx) => {
      star.material.emissiveIntensity = (Math.sin(t + idx * 0.5) + 1) * 0.375
    })
    requestAnimationFrame(twinkleStars)
  }
  requestAnimationFrame(twinkleStars)



  // 회전 애니메이션
  const rotatingObjects = [
    { object: sun, speed: 16 },
    { object: earth, speed: 1 },
    { object: moon, speed: 0.25 },
    { object: mercury, speed: 1.5 },
    { object: venus, speed: 0.5 },
    { object: mars, speed: 1.2 },
    { object: jupiter, speed: 0.3 },
    { object: saturn, speed: 0.4 },
    { object: uranus, speed: 0.6 },
    { object: neptune, speed: 0.5 },
    { object: starsGroup, speed: 32 },
  ]

  // 행성 궤도 정보 (궤도 라인과 공전 모두에 사용)
  const planetOrbitData = [
    { name: 'mercury', object: mercury, speed: 0.32,  radius: 10, incDeg:  27, nodeDeg: 10, phaseDeg: 270 },
    { name: 'venus',   object: venus,   speed: 0.17,  radius: 11, incDeg: -18, nodeDeg: 75, phaseDeg: 225 },
    { name: 'earth',   object: earth,   speed: 0.12,  radius: 14, incDeg:   0, nodeDeg: 45, phaseDeg: 135 },
    { name: 'mars',    object: mars,    speed: 0.07,  radius: 16, incDeg: -36, nodeDeg: 25, phaseDeg: 270 },
    { name: 'jupiter', object: jupiter, speed: 0.048, radius: 20, incDeg:  18, nodeDeg: 55, phaseDeg:  90 },
    { name: 'saturn',  object: saturn,  speed: 0.027, radius: 25, incDeg: -27, nodeDeg: 90, phaseDeg: 225 },
    { name: 'uranus',  object: uranus,  speed: 0.022, radius: 30, incDeg:  36, nodeDeg: 75, phaseDeg: 180 },
    { name: 'neptune', object: neptune, speed: 0.012, radius: 36, incDeg: -18, nodeDeg: 15, phaseDeg: 135 },
  ]

  // 궤도 그룹 및 궤도 라인 생성
  const orbitGroup = new THREE.Group()
  planetOrbitData.forEach(({ name, radius, incDeg, nodeDeg }) => {
    const orbit = (() => {
      const positions = []
      for (let i = 0; i <= 256; i++) {
        const t = (i / 256) * Math.PI * 2
        positions.push(Math.cos(t) * radius, 0, Math.sin(t) * radius)
      }
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
      const material = new THREE.LineBasicMaterial({ color: 'white', transparent: true, opacity: 0.12 })
      const line = new THREE.LineLoop(geometry, material)
      line.renderOrder = 1
      return line
    })()
    orbit.name = `orbit-${name}`
    orbit.rotation.set(
      THREE.MathUtils.degToRad(incDeg),
      THREE.MathUtils.degToRad(nodeDeg),
      0
    )
    orbitGroup.add(orbit)
  })
  scene.add(orbitGroup)

  // 행성별 공전 각도
  const planetAngles = {}
  planetOrbitData.forEach(({ object, phaseDeg = 0 }) => {
    planetAngles[object.uuid] = THREE.MathUtils.degToRad(phaseDeg)
  })

  // 회전 및 공전 업데이트
  const updateRotation = (delta) => {
    rotatingObjects.forEach(({ object, speed }) => {
      object.rotation.y += delta / speed
    })
    planetOrbitData.forEach(({ object, speed, radius, incDeg, nodeDeg }) => {
      planetAngles[object.uuid] -= delta * speed
      const angle = planetAngles[object.uuid]
      const base = new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(
        THREE.MathUtils.degToRad(incDeg),
        THREE.MathUtils.degToRad(nodeDeg),
        0,
        'XYZ'
      ))
      base.applyQuaternion(q)
      object.position.copy(base)
    })
  }

  // 방위각 계산
  const azimuth = v => {
    let a = Math.atan2(v.z, v.x)
    return a < 0 ? a + Math.PI * 2 : a
  }

  const CAMERA_RING_RADIUS = MAX_DISTANCE / 3
  const CAMERA_ELEV_BASE = 0.33 // 기본 고도 비율
  const Y_FOLLOW_FACTOR = 0.4   // 타겟 Y 반영 비율(0~1)

  // targetVec3의 방위각과 일부 Y만 반영해 카메라 위치 계산
  const camPosFor = (targetVec3, dist = CAMERA_RING_RADIUS) => {
    const yaw = Math.atan2(targetVec3.z, targetVec3.x)
    const x = Math.cos(yaw) * dist
    const z = Math.sin(yaw) * dist
    const yBase = dist * CAMERA_ELEV_BASE
    const yFollow = targetVec3.y * Y_FOLLOW_FACTOR
    return new THREE.Vector3(x, yBase + yFollow, z)
  }

  // 궤도 파라미터로 월드 타겟 좌표 계산
  const calcOrbitTarget = ({ radius, incDeg, nodeDeg, phaseDeg = 0 }) => {
    const angle = THREE.MathUtils.degToRad(phaseDeg)
    const base = new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(
      THREE.MathUtils.degToRad(incDeg),
      THREE.MathUtils.degToRad(nodeDeg),
      0,
      'XYZ'
    ))
    return base.applyQuaternion(q)
  }

  const buildPlanetStops = () => {
    const raw = planetOrbitData.map(p => {
      const target = calcOrbitTarget(p)
      return { label: p.name, target, yaw: azimuth(target) }
    })

    const sorted = raw.sort((a, b) => a.yaw - b.yaw)
    const closed = [...sorted, { ...sorted[0], label: `${sorted[0].label}-loop` }]

    return closed.map(s => {
      const camPos = camPosFor(s.target)
      return { label: s.label, target: s.target, camPos }
    })
  }

  const createScrollTimeline = () => {
    const stops = buildPlanetStops()

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: document.querySelector('.canvas-warpper'),
        start: 'top top',
        end: '+=10000',
        scrub: 2.5,
        pin: true,
      }
    })

    stops.forEach(({ camPos, target }, idx) => {
      tl.to(camera.position, {
        x: camPos.x,
        y: camPos.y,
        z: camPos.z,
        duration: 1,
        onUpdate: () => camera.lookAt(target)
      }, idx)
    })
  }

  createScrollTimeline()

  // 애니메이션 루프
  const draw = () => {
    const delta = clock.getDelta()
    if (isAnimationActive.value) updateRotation(delta)
    camera.lookAt(0, 0, 0)
    renderer.render(scene, camera)
    renderer.setAnimationLoop(draw)
  }

  // Raycaster 설정
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()  // 마우스 좌표를 저장할 벡터

  // 클릭된 객체를 확인하는 함수
  const checkIntersections = (event) => {
    // 화면 좌표에서 -1 ~ 1로 변환
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1

    // 레이 설정 (카메라 위치와 마우스 위치 기준)
    raycaster.setFromCamera(mouse, camera)

    const planetMeshes = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]

    // 레이와 교차하는 행성 찾기
    const intersects = raycaster.intersectObjects(planetMeshes, false)

    if (intersects.length > 0) {
      const clickedPlanet = intersects[0].object

      console.log(clickedPlanet.name)
    }
  }

  // 마우스 클릭 이벤트 리스너
  renderer.domElement.addEventListener('click', checkIntersections)

  // hover 대상
  const hoverMeshes = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]

  const updateCursor = (event) => {
    const rect = renderer.domElement.getBoundingClientRect()
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

    raycaster.setFromCamera(mouse, camera)
    const hit = raycaster.intersectObjects(hoverMeshes, false)

    renderer.domElement.style.cursor = hit.length ? 'pointer' : 'default'
  }

  // renderer.domElement.addEventListener('mousemove', updateCursor)
  // renderer.domElement.addEventListener('mouseleave', () => {
  //   renderer.domElement.style.cursor = 'default'
  // })

  // 윈도우 크기 조절
  const setSize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener("resize", setSize)

  draw()

  onUnmounted(() => {
    window.removeEventListener("resize", setSize)
    renderer.setAnimationLoop(null)
  })
})
</script>

<template>
  <div class="canvas-warpper">
    <canvas id="canvas" ref="canvas" />
    <ControlDialog/>
  </div>
</template>

<style lang="scss" scoped>
.canvas-warpper {
  position: relative;
  width: 100dvw;
  height: 100dvh;
}

#canvas {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
}
</style>
