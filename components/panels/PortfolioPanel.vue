<template>
  <div class="space-y-5 text-slate-800 dark:text-slate-100">
    <div class="space-y-1">
      <p class="text-[11px] uppercase tracking-[0.28em] text-purple-500/80">
        Portfolio Site
      </p>
      <h2 class="text-2xl font-semibold tracking-tight">
        Serene Portfolio
      </h2>
      <p class="pt-1 text-sm leading-6 text-slate-700 dark:text-slate-200">
        Three.js로 만든 우주공간을 배경으로 한 데스크톱 UI 느낌의 포트폴리오 사이트입니다.
      </p>
    </div>

    <section class="space-y-2 border-t border-slate-200/80 pt-4 dark:border-white/10">
      <div class="space-y-1">
        <p class="text-[11px] uppercase tracking-[0.28em] text-purple-500/80">
          Overview
        </p>
        <h3 class="text-base font-semibold leading-6">
          이 사이트를 이렇게 보여주고자 했습니다
        </h3>
      </div>

      <ul class="space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
        <li v-for="item in portfolioItems" :key="item" class="flex items-start gap-2">
          <span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/70" />
          <span>{{ item }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const portfolioItems = [
  '폴더와 창을 장식이 아닌 탐색 구조로 사용해, 프로젝트를 열고 비교하는 흐름을 만들었습니다.',
  '실제 컴퓨터를 다루듯 폴더를 열고 창을 옮기며 포트폴리오를 탐색하는 재미를 느끼도록 구성했습니다.',
  '프로젝트별 설명은 제품 소개, 역할, 담당 업무, 핵심 구현 순으로 정리했습니다.',
];
</script>
