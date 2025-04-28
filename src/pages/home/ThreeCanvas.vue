<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from "gsap"
import { storeToRefs } from 'pinia'

import { useControlStore } from '@/store/controlStore'

import ControlDialog from './ControlDialog.vue'

const controlStore = useControlStore()
const {
  isAnimationActive,
  isZoomActive,
  isRotationActive,
  isPanActive
} = storeToRefs(controlStore)

const MAX_DISTANCE = 192
const MIN_DISTANCE = 8
const canvas = ref(null)

let controls = null
let scene = null
let clock = null
let camera = null
let textureLoader = null

/**
 * @todo
 * 애니메이션에 의해 행성들의 위치값이 변경되면 카메라의 포지션도 같이 업데이트되어야할듯
 * @param planetName
 */
// 행성으로 이동
const moveToPlanet = (planetName) => {
  const planet = scene.getObjectByName(planetName)
  if (!planet) return

  // 이동하는 동안 컨트롤 비활성화
  // isAnimationActive.value = false
  controls.enableZoom = false
  controls.enableRotate = false
  controls.enablePan = false

  // 행성에 따른 offset값 조정
  const offsets = {
    sun: 32,
    jupiter: 16,
  }

  const offset = offsets[planetName] ?? MIN_DISTANCE

  // 카메라가 현재 바라보는 방향 벡터 구하기
  const cameraDirection = new THREE.Vector3()
  camera.getWorldDirection(cameraDirection)
  cameraDirection.normalize() // 방향 벡터 정규화

  // 오프셋을 반영하여 카메라 이동 위치 계산
  const cameraPosition = {
    x: planet.position.x - cameraDirection.x * offset,
    y: planet.position.y - cameraDirection.y * offset,
    z: planet.position.z - cameraDirection.z * offset,
  }

  gsap.to(camera.position, {
    x: cameraPosition.x,
    y: cameraPosition.y,
    z: cameraPosition.z,
    duration: 1.2,
    ease: "power2.inOut",
    onComplete: () => {
      // 카메라가 행성을 바라보도록 설정
      camera.lookAt(planet.position)

      // OrbitControls의 target을 행성으로 설정 (회전, 줌, 이동이 행성을 중심으로 하도록)
      controls.target.set(planet.position.x, planet.position.y, planet.position.z)
      controls.update() // 업데이트 호출

      // 이동 완료 후 컨트롤 다시 활성화
      controls.enableZoom = isZoomActive.value
      controls.enableRotate = isRotationActive.value
      controls.enablePan = isPanActive.value
    }
  })
}

onMounted(() => {
  scene = new THREE.Scene()
  clock = new THREE.Clock()
  textureLoader = new THREE.TextureLoader()


  // 텍스처 로드
  const loadTexture = (path) => {
    const texture = textureLoader.load(path)
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.mapping = THREE.EquirectangularReflectionMapping
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  }

  // https://www.solarsystemscope.com/textures/
  const starsMilkywayTexture = loadTexture('/textures/space/2k_stars_milky_way.jpg')
  const sunTexture = loadTexture('/textures/space/2k_sun.jpg')
  const mercuryTexture = loadTexture('/textures/space/2k_mercury.jpg')
  const venusTexture = loadTexture('/textures/space/2k_venus_surface.jpg')
  const earthTexture = loadTexture('/textures/space/2k_earth_daymap.jpg')
  const moonTexture = loadTexture('/textures/space/2k_moon.jpg')
  const starTexture = loadTexture('/textures/space/2k_eris_fictional.jpg')
  const marsTexture = loadTexture('/textures/space/2k_mars.jpg')
  const jupiterTexture = loadTexture('/textures/space/2k_jupiter.jpg')
  const saturnTexture = loadTexture('/textures/space/2k_saturn.jpg')
  const saturnRingTexture = loadTexture('/textures/space/2k_saturn_ring_alpha.png')
  const uranusTexture = loadTexture('/textures/space/2k_uranus.jpg')
  const neptuneTexture = loadTexture('/textures/space/2k_neptune.jpg')

  const skyGeometry = new THREE.SphereGeometry(256, 64, 64) // 반지름을 크게 설정
  const skyMaterial = new THREE.MeshBasicMaterial({
    map: starsMilkywayTexture,
    side: THREE.BackSide  // 내부에서 보이도록 설정
  })
  const skyDome = new THREE.Mesh(skyGeometry, skyMaterial)
  scene.add(skyDome)
  
  // 렌더러 설정
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)
  renderer.shadowMap.enabled = true

  // 카메라 설정
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(-64, 32, 32)

  scene.add(camera)

  // 빛 설정
  const setupLights = () => {
    scene.add(new THREE.AmbientLight("white", 0.1))

    const sunLight = new THREE.PointLight("white", 2048, 2048)
    sunLight.position.set(0, 0, 0)
    sunLight.castShadow = true
    sunLight.shadow.mapSize.set(256, 256)
    sunLight.shadow.camera.near = 1
    sunLight.shadow.camera.far = 256
    scene.add(sunLight)

    // const lightHelper = new THREE.PointLightHelper(sunLight)
    // scene.add(lightHelper)
  }
  setupLights()

  // 공통된 Sphere 생성 함수
  const createSphere = (size, texture, name) => {
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(size, 32, 32),
      new THREE.MeshStandardMaterial({ map: texture })
    )

    if (name) {
      sphere.name = name
    }
    
    return sphere
  }

  // 행성
  const sun = createSphere(12, sunTexture, 'sun')
  // sun.material.map = sunTexture                  // map 대신 emissiveMap 사용
  sun.material.emissive = new THREE.Color("white")  // 빛의 색상
  sun.material.emissiveMap = sunTexture             // Emissive Map 적용
  sun.material.emissiveIntensity = 0.75             // 빛 방사 강도

  const mercury = createSphere(0.8, mercuryTexture, 'mercury')
  const venus = createSphere(2.0, venusTexture, 'venus')
  const earth = createSphere(2, earthTexture, 'earth')
  const moon = createSphere(0.5, moonTexture, 'moon')
  const mars = createSphere(1.1, marsTexture, 'mars')
  const jupiter = createSphere(5.0, jupiterTexture, 'jupiter')
  const saturn = createSphere(4.2, saturnTexture, 'saturn')
  const uranus = createSphere(1.8, uranusTexture, 'uranus')
  const neptune = createSphere(1.8, neptuneTexture, 'neptune')

  scene.add(sun)
  earth.add(moon)
  earth.rotation.x = THREE.MathUtils.degToRad(23.5) // 지구 기울기 조정
  saturn.rotation.x = THREE.MathUtils.degToRad(27)  // 토성 기울기 조정

  // 토성의 고리 만들기
  const createSaturnRing = () => {
    // 고리 geometry 생성
    const ringGeometry = new THREE.RingGeometry(7, 9, 64)
    const ringMaterial = new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      opacity: 0.75,
      transparent: true,
      emissive: new THREE.Color('white'),
      emissiveMap: saturnRingTexture,
      emissiveIntensity: 0.75,
    })

    // 고리 Mesh 생성
    const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.rotation.x = Math.PI / 2

    return ring
  }

  // 토성에 고리 추가
  const saturnRing = createSaturnRing()
  saturn.add(saturnRing)  // 토성 그룹에 고리 추가

  // 그룹 생성
  const sunGroup = new THREE.Group()
  // sunGroup.rotation.y = THREE.MathUtils.degToRad(135)
  
  mercury.position.set(20, 1.2, -3)
  venus.position.set(25, -1.5, 4)
  earth.position.set(40, 0, 0)
  moon.position.set(4, 0, 0)
  mars.position.set(50, -3, 5)
  jupiter.position.set(90, 4, -3)
  saturn.position.set(130, -3, 7)
  uranus.position.set(160, 4, -5)
  neptune.position.set(190, -4.5, 4)

  sunGroup.add(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune)
  scene.add(sunGroup)

  // 별 생성
  const starsGroup = new THREE.Group()
  const numberOfStars = 1024
  const stars = []
  for (let i = 0; i < numberOfStars; i++) {
    const randomSize = Math.random() * 0.1 + 0.2
    const star = createSphere(randomSize, null)
    // star.material = new THREE.MeshStandardMaterial({ color: "white" })
    star.material.emissive = new THREE.Color("white")
    star.material.emissiveMap = starTexture
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

  function twinkleStars(time) {
    const t = time * 0.025

    stars.forEach((star, index) => {
      const intensity = (Math.sin(t + index * 0.5) + 1) * 0.375 // 마지막 곱하기값 0.5 = 0~1, 0.375 = 0~0.75, 0.25 = 0~0.5, 0.125 = 0~0.25
      star.material.emissiveIntensity = intensity
    })

    requestAnimationFrame(twinkleStars)
  }
  requestAnimationFrame(twinkleStars)

  // 카메라 컨트롤
  controls = new OrbitControls(camera, renderer.domElement)
  controls.maxDistance = MAX_DISTANCE
  controls.minDistance = MIN_DISTANCE
  controls.enableZoom = isZoomActive.value        // 휠 줌 방지
  controls.enableRotate = isRotationActive.value  // 회전 방지
  controls.enablePan = isPanActive.value          // 이동 방지

  const panLimit = 96
  // 이동 제한 함수
  const limitPan = () => {
    const target = controls.target
    const distance = target.length()

    if (distance > panLimit) {
      target.normalize().multiplyScalar(panLimit)  // 최대 거리 유지
      controls.update()
    }
  }

  // change 이벤트 리스너 추가
  controls.addEventListener("change", limitPan)

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

    // 레이와 교차하는 객체 찾기
    const intersects = raycaster.intersectObjects([sun, earth, moon])

    if (intersects.length > 0) {
      const object = intersects[0].object
      if (object === sun) {
        console.log('Sun clicked', object)
      } else if (object === earth) {
        console.log('Earth clicked', object)
      } else if (object === moon) {
        console.log('Moon clicked', object)
      }
    }
  }

  // 마우스 클릭 이벤트 리스너
  window.addEventListener('click', checkIntersections)

  // 회전 애니메이션
  const rotatingObjects = [
    { object: sun, speed: 16 },
    { object: sunGroup, speed: 4 },
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

  // 공전 (태양을 중심으로 회전)
  const orbitingObjects = [
    { object: mercury, speed: 0.6, radius: 20, yOffset: 1.2 },
    { object: venus, speed: 0.3, radius: 25, yOffset: -1.5 },
    { object: earth, speed: 0.2, radius: 40, yOffset: 0 },
    { object: mars, speed: 0.1, radius: 50, yOffset: -3 },
    { object: jupiter, speed: 0.04, radius: 90, yOffset: 4 },
    { object: saturn, speed: 0.02, radius: 130, yOffset: -3 },
    { object: uranus, speed: 0.02, radius: 160, yOffset: 4 },
    { object: neptune, speed: 0.01, radius: 190, yOffset: -4.5 },
  ]

  // 행성별 공전 각도를 저장
  const planetAngles = {}
  orbitingObjects.forEach(({ object }) => {
    planetAngles[object.uuid] = Math.random() * Math.PI * 2 // 랜덤한 시작 각도 부여
  })

  /**
   * @todo 자전 업데이트 관련 코드 수정필요. 일단은 주석처리함.
   * - 자전 시 행성으로 이동하여 바라보는 위치보정이 필요할듯
   */
  const updateRotation = (delta) => {
    // 자전 업데이트
    // rotatingObjects.forEach(({ object, speed }) => {
    //   object.rotation.y += delta / speed
    // })

    // 공전 업데이트
    orbitingObjects.forEach(({ object, speed, radius, yOffset }) => {
      planetAngles[object.uuid] += delta * speed // 시간에 따라 각도 증가
      const angle = planetAngles[object.uuid]

      object.position.set(
        Math.cos(angle) * radius,
        yOffset,
        Math.sin(angle) * radius
      )
    })
  }

  // 애니메이션 루프
  const draw = () => {
    const delta = clock.getDelta()

    if (isAnimationActive.value) {
      updateRotation(delta)
    }

    renderer.render(scene, camera)
    renderer.setAnimationLoop(draw)
  }

  // 윈도우 크기 조절 이벤트
  const setSize = () => {
    const { innerWidth, innerHeight } = window
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(innerWidth, innerHeight)
  }

  window.addEventListener("resize", setSize)

  draw()


  // 변경감지
  watch(isZoomActive, (newVal) => {
    controls.enableZoom = newVal
  })

  watch(isRotationActive, (newVal) => {
    controls.enableRotate = newVal
  })

  watch(isPanActive, (newVal) => {
    controls.enablePan = newVal
  })

  onUnmounted(() => {
    window.removeEventListener("resize", setSize)
    window.removeEventListener('click', checkIntersections)
    renderer.setAnimationLoop(null)
  })
})
</script>

<template>
  <div class="canvas-warpper">
    <canvas id="canvas" ref="canvas" />
    <ControlDialog @moveToPlanet="moveToPlanet"/>
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
