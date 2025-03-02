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
    return texture
  }

  // https://www.solarsystemscope.com/textures/
  // const starsMilkywayTexture = loadTexture('/textures/space/2k_stars_milky_way.jpg')
  const sunTexture = loadTexture('/textures/space/2k_sun.jpg')
  const earthTexture = loadTexture('/textures/space/2k_earth_daymap.jpg')
  const moonTexture = loadTexture('/textures/space/2k_moon.jpg')

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
  camera.position.set(64, 32, -64)
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
  sun.material.emissive = new THREE.Color("orange") // 빛의 색상
  sun.material.emissiveMap = sunTexture             // Emissive Map 적용
  sun.material.emissiveIntensity = 0.75             // 빛 방사 강도

  const earth = createSphere(2, earthTexture)
  const moon = createSphere(0.5, moonTexture)

  scene.add(sun)

  // 그룹 생성
  const sunGroup = new THREE.Group()
  const earthGroup = new THREE.Group()
  earthGroup.add(earth, moon)
  earthGroup.position.set(32, 0, 0)
  earthGroup.rotation.x = THREE.MathUtils.degToRad(23.5)
  moon.position.set(3, 0, 0)

  sunGroup.add(earthGroup)
  scene.add(sunGroup)

  // 별 생성
  const starsGroup = new THREE.Group()
  const numberOfStars = 256
  for (let i = 0; i < numberOfStars; i++) {
    const star = createSphere(0.5, null)
    star.material = new THREE.MeshStandardMaterial({ color: "white" })

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


  // 회전 애니메이션
  const rotatingObjects = [
    { object: sunGroup, speed: 64 },
    { object: earthGroup, speed: 2 },
    { object: earth, speed: 4 },
    { object: moon, speed: 2 },
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
