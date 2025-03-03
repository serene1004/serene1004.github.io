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
  const earthTexture = loadTexture('/textures/space/2k_earth_daymap.jpg')
  const moonTexture = loadTexture('/textures/space/2k_moon.jpg')

  // scene.background = starsMilkywayTexture

  const skyGeometry = new THREE.SphereGeometry(128, 64, 64) // 반지름을 크게 설정
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
    scene.add(new THREE.AmbientLight("white", 0.05))

    const sunLight = new THREE.PointLight("white", 1024, 1024)
    sunLight.position.set(0, 0, 0)
    sunLight.castShadow = true
    sunLight.shadow.mapSize.set(256, 256)
    sunLight.shadow.camera.near = 1
    sunLight.shadow.camera.far = 128
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

  // 태양, 지구, 달 생성
  const sun = createSphere(16, sunTexture)
  // sun.material.map = sunTexture                  // map 대신 emissiveMap 사용
  sun.material.emissive = new THREE.Color("white")  // 빛의 색상
  sun.material.emissiveMap = sunTexture             // Emissive Map 적용
  sun.material.emissiveIntensity = 0.75             // 빛 방사 강도

  const earth = createSphere(2, earthTexture)
  const moon = createSphere(0.5, moonTexture)

  scene.add(sun)

  // 그룹 생성
  const sunGroup = new THREE.Group()
  const earthGroup = new THREE.Group()
  earthGroup.add(earth, moon)
  earthGroup.position.set(48, 0, 0)
  earthGroup.rotation.x = THREE.MathUtils.degToRad(23.5)
  moon.position.set(3, 0, 0)

  sunGroup.add(earthGroup)
  sunGroup.rotation.y = THREE.MathUtils.degToRad(135)
  scene.add(sunGroup)

  // 별 생성
  const starsGroup = new THREE.Group()
  const numberOfStars = 256
  for (let i = 0; i < numberOfStars; i++) {
    const randomSize = Math.random() * 0.2 + 0.25
    const star = createSphere(randomSize, null)
    star.material = new THREE.MeshStandardMaterial({ color: "white" })
    star.material.emissive = new THREE.Color("white")
    star.material.emissiveMap = moonTexture
    star.material.emissiveIntensity = 0.1

    star.position.set(
      Math.random() * 256 - 128,
      Math.random() * 256 - 128,
      Math.random() * 256 - 128
    )

    starsGroup.add(star)
  }
  scene.add(starsGroup)

  // 카메라 컨트롤 (모든 조작 비활성화)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.maxDistance = 128
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
    { object: sunGroup, speed: 4 },
    { object: earthGroup, speed: 0.5 },
    { object: earth, speed: 1 },
    { object: moon, speed: 0.25 },
    { object: starsGroup, speed: 8 },
  ]

  const updateRotation = (delta) => {
    rotatingObjects.forEach(({ object, speed }) => {
      object.rotation.y += delta / speed
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
