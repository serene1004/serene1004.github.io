<script setup>
import { onMounted, onUnmounted, ref } from "vue"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

const canvas = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  const clock = new THREE.Clock()
  const textureLoader = new THREE.TextureLoader()

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
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
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
  const createSphere = (size, texture) => {
    return new THREE.Mesh(
      new THREE.SphereGeometry(size, 32, 32),
      new THREE.MeshStandardMaterial({ map: texture })
    )
  }

  // 행성
  const sun = createSphere(12, sunTexture)
  // sun.material.map = sunTexture                  // map 대신 emissiveMap 사용
  sun.material.emissive = new THREE.Color("white")  // 빛의 색상
  sun.material.emissiveMap = sunTexture             // Emissive Map 적용
  sun.material.emissiveIntensity = 0.75             // 빛 방사 강도

  const mercury = createSphere(0.8, mercuryTexture)
  const venus = createSphere(2.0, venusTexture)
  const earth = createSphere(2, earthTexture)
  const moon = createSphere(0.5, moonTexture)
  const mars = createSphere(1.1, marsTexture)
  const jupiter = createSphere(5.0, jupiterTexture)
  const saturn = createSphere(4.2, saturnTexture)
  const uranus = createSphere(1.8, uranusTexture)
  const neptune = createSphere(1.8, neptuneTexture)

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
  sunGroup.rotation.y = THREE.MathUtils.degToRad(135)
  
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
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.maxDistance = 256
  controls.minDistance = 32
  // controls.enableZoom = false   // 휠 줌 방지
  // controls.enableRotate = false // 회전 방지
  controls.enablePan = false    // 이동 방지

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
    { object: mercury, speed: 0.06, radius: 20, yOffset: 1.2 },
    { object: venus, speed: 0.03, radius: 25, yOffset: -1.5 },
    { object: earth, speed: 0.02, radius: 40, yOffset: 0 },
    { object: mars, speed: 0.01, radius: 50, yOffset: -3 },
    { object: jupiter, speed: 0.004, radius: 90, yOffset: 4 },
    { object: saturn, speed: 0.002, radius: 130, yOffset: -3 },
    { object: uranus, speed: 0.002, radius: 160, yOffset: 4 },
    { object: neptune, speed: 0.001, radius: 190, yOffset: -4.5 },
  ]

  // 행성별 공전 각도를 저장
  const planetAngles = {}
  orbitingObjects.forEach(({ object }) => {
    planetAngles[object.uuid] = Math.random() * Math.PI * 2 // 랜덤한 시작 각도 부여
  })

  const updateRotation = (delta) => {
    // 자전 업데이트
    rotatingObjects.forEach(({ object, speed }) => {
      object.rotation.y += delta / speed
    })

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
    updateRotation(delta)
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

  onUnmounted(() => {
    window.removeEventListener("resize", setSize)
    window.removeEventListener('click', checkIntersections)
    renderer.setAnimationLoop(null)
  })
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
