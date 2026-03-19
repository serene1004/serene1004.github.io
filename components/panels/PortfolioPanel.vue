<template>
  <div class="space-y-6 text-slate-800 dark:text-slate-100">
    <section class="space-y-2">
      <div class="space-y-1">
        <p class="text-[11px] uppercase tracking-[0.28em] text-purple-500/80">
          Portfolio Site
        </p>
        <h2 class="text-2xl font-semibold tracking-tight">
          Serene Portfolio
        </h2>
      </div>

      <div class="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        <p>Three.js로 만든 우주공간을 배경으로 한 테스크탑 UI 느낌의 포트폴리오 사이트를 만들고 있어요.</p>
      </div>
    </section>

    <section class="space-y-4">
      <article
        v-for="section in portfolioSections"
        :key="section.label"
        class="space-y-2 pt-2 first:pt-0"
      >
        <div class="space-y-1">
          <p class="text-[11px] uppercase tracking-[0.28em] text-purple-500/80">
            {{ section.label }}
          </p>
          <h3 class="text-base font-semibold leading-6">
            {{ section.title }}
          </h3>
        </div>

        <ul class="text-sm leading-6 text-slate-600 dark:text-slate-300">
          <li
            v-for="item in section.items"
            :key="item"
            class="flex items-start gap-2"
          >
            <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/70" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
interface PortfolioSection {
  label: string
  title: string
  items: string[]
}

const portfolioSections: PortfolioSection[] = [
  {
    label: 'Overview',
    title: '이 사이트를 이렇게 보여주고 싶었어요',
    items: [
      '프로젝트를 단순히 읽는 화면보다, 직접 눌러보고 열어보면서 분위기와 흐름을 먼저 느낄 수 있는 구조를 목표로 했어요.',
      '사이트를 처음 보는 순간에도 제가 좋아하는 인터랙션 방향이 자연스럽게 드러나면 좋겠다고 생각했어요.'
    ]
  },
  {
    label: 'In Progress',
    title: '지금도 계속 다듬고 있는 부분이에요',
    items: [
      '폴더(패널별 콘텐츠)를 추가해 나갈예정이에요.',
      '디자인톤과 사용감이 더 자연스럽게 연결되도록 세부 UI를 다듬어가고 있어요.'
    ]
  }
]
</script>
