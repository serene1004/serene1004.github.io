<script setup>
import { ref } from "vue"

const skillList = ref({
  html: {
    html: { title: 'HTML', description: '시맨틱 태그를 활용하여 웹 접근성 및 검색 엔진 최적화(SEO)를 고려한 마크업을 작성합니다.', severity: 'primary' }
  },
  style: {
    css: { title: 'CSS', description: '디자인 가이드를 기반으로 CSS 프레임워크 없이 순수 CSS 및 SCSS를 활용해 UI를 구현할 수 있으며, 반응형 웹과 다크 모드, 다양한 브라우저 환경에서도 일관된 디자인을 유지할 수 있도록 스타일을 작성합니다.', severity: 'info' },
    scss: { title: 'SCSS', description: '', severity: 'danger' },
    tailwind: { title: 'Tailwind CSS', description: 'Tailwind CSS를 활용하여 클래스 네이밍에 대한 부담없이 빠르게 UI 개발이 가능합니다.', severity: 'success' },
    quasar: { title: 'Quasar', description: 'Quasar 프레임워크를 활용해 Vue 기반의 반응형 웹 및 데스크톱 애플리케이션을 빠르게 구축할 수 있습니다.', severity: 'info' },
  },
  js: {
    js: { title: 'JavaScript', description: 'JavaScript의 호출 스택과 이벤트 루프의 동작 원리를 이해하고 있으며, ES6+ 문법을 활용하여 가독성과 유지보수성을 높인 코드를 작성합니다.', severity: 'warn' },
    vue: { title: 'Vue.js', description: 'Vue.js를 활용한 컴포넌트 기반 개발에 익숙하며, Composition API를 사용하여 모듈화된 코드를 작성합니다.', severity: 'success' },
    pinia: { title: 'Pinia', description: 'Pinia를 상태 관리 라이브러리를 사용하여 전역 상태를 관리하며, Composition API를 사용하여 코드를 더 간결하고 가독성 좋게 작성합니다.', severity: 'warn' },
    vite: { title: 'Vite', description: 'Vite를 번들링 도구로 활용하여 빠른 개발 환경 구축 및 빌드 속도를 최적화합니다.', severity: 'info' },
    gulp: { title: 'Gulp', description: 'Gulp를 활용한 자동화된 빌드 프로세스와 태스크 관리 경험도 있습니다.', severity: 'danger' },
    electron: { title: 'Electron', description: 'Electron 기반의 사내 메신저 개발 및 유지보수 경험이 있습니다.', severity: 'secondary' },
  },
  git: {
    git: { title: 'Git', description: 'Git을 활용한 협업 및 버전 관리가 가능합니다.', severity: 'contrast' }
  },
  communication: {
    communication: { title: 'Communication', description: '기획자, 디자이너, 백엔드 개발자와 커뮤니케이션을 통해 요구사항을 정확하게 파악하고, 이를 반영한 UI/UX 구현 및 프론트엔드 개발을 진행합니다.', severity: 'info' },
    tools: { title: 'tools', description: 'Figma, Sketch와 같은 디자인 툴을 통한 기획자, 디자이너와의 협업 또한 가능합니다.', severity: 'secondary' }
  }
})
</script>

<template>
  <div class="skills">
    <div v-for="(category, categoryKey) in skillList" :key="categoryKey" class="skills-list">
      <div class="skills-header">
        <Tag
          v-for="(skill, skillKey) in category"
          :key="skillKey"
          :value="skill.title"
          :severity="skill.severity"
        />
      </div>

      <!-- 기술 설명 나열 -->
      <p v-for="(skill, skillKey) in category" :key="skillKey" class="skills-item">
        {{ skill.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  min-width: 320px;
  width: 20vw;
  // max-height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  
  &-list {
    display: flex;
    flex-direction: column;
  }

  &-header {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5em;
    gap: 0.25em;
  }
}
</style>