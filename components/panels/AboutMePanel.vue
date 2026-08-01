<template>
  <div class="space-y-5 text-slate-800 dark:text-slate-100">
    <section class="space-y-2">
      <div class="space-y-1">
        <p class="text-[11px] uppercase tracking-[0.28em] text-purple-500/80">
          About Me
        </p>
        <h2 class="text-2xl font-semibold tracking-tight">
          사용자 경험을 디자인하는 프론트엔드 개발자입니다
        </h2>
      </div>
      <div class="space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
        <p>웹 퍼블리셔로 커리어를 시작해 Vue.js와 Nuxt.js를 기반으로 프론트엔드 개발을 하고 있습니다. 화면의 완성도뿐 아니라 사용자의 흐름과 경험까지 함께 설계하는 일을 중요하게 생각합니다.</p>
        <p>현재는 방송통신대학교 컴퓨터과학과에 재학하며 학업과 실무를 함께 이어가고 있습니다.</p>
      </div>
    </section>

    <section
      v-for="section in summarySections"
      :key="section.label"
      class="space-y-2 border-t border-slate-200/80 pt-4 dark:border-white/10"
    >
      <div class="space-y-1">
        <p class="text-[11px] uppercase tracking-[0.28em] text-purple-500/80">
          {{ section.label }}
        </p>
        <h3 class="text-base font-semibold leading-6">
          {{ section.title }}
        </h3>
      </div>

      <ul class="space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
        <li v-for="item in section.items" :key="item.text" class="flex items-start gap-2">
          <UIcon :name="item.icon" class="mt-1 h-4 w-4 shrink-0 text-purple-500/80" />
          <a
            v-if="item.href"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noreferrer' : undefined"
            class="transition hover:text-purple-500"
          >
            {{ item.text }}
          </a>
          <span v-else>{{ item.text }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
interface SummaryItem {
  text: string
  icon: string
  href?: string
  external?: boolean
}

interface SummarySection {
  label: string
  title: string
  items: SummaryItem[]
}

const summarySections: SummarySection[] = [
  {
    label: 'Focus',
    title: '이런 일에 집중하고 있습니다',
    items: [
      { text: 'Vue.js와 Nuxt.js를 기반으로 프론트엔드 개발을 하고 있습니다.', icon: 'i-lucide-sparkles' },
      { text: '인터랙션을 선호하며 3D와 애니메이션이 더해진 UI 구현에 관심이 많습니다.', icon: 'i-lucide-orbit' },
      { text: '보기 좋은 화면뿐 아니라 유지보수하기 좋은 컴포넌트 구조와 상태 설계도 함께 고민합니다.', icon: 'i-lucide-layers-3' },
    ],
  },
  {
    label: 'Stack',
    title: '사용하는 기술과 도구입니다',
    items: [
      { text: 'JavaScript와 TypeScript로 화면과 로직을 함께 다룹니다.', icon: 'i-lucide-code-2' },
      { text: 'Vue.js와 Nuxt.js를 기반으로 하며, React도 사용합니다.', icon: 'i-lucide-layout-template' },
      { text: 'CSS, SCSS, Tailwind CSS를 프로젝트에 맞게 선택해 사용합니다.', icon: 'i-lucide-palette' },
      { text: 'Three.js와 Cesium.js로 3D가 들어가는 화면도 구현할 수 있습니다.', icon: 'i-lucide-box' },
      { text: '필요한 경우 Electron.js로 데스크톱 환경 작업도 할 수 있습니다.', icon: 'i-lucide-monitor' },
    ],
  },
  {
    label: 'Contact',
    title: '이곳으로 편하게 연락해 주시기 바랍니다',
    items: [
      { text: 'vcbxnzn@gmail.com', icon: 'i-lucide-mail', href: 'mailto:vcbxnzn@gmail.com' },
      {
        text: 'github.com/serene1004', icon: 'i-lucide-github', href: 'https://github.com/serene1004', external: true,
      },
    ],
  },
];
</script>
