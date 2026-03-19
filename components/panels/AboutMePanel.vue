<template>
  <div class="space-y-5 text-slate-800 dark:text-slate-100">
    <section class="flex flex-col gap-2">
      <div
        v-for="section in summarySections"
        :key="section.label"
        class="rounded-2xl border border-white/15 bg-white/65 p-4 shadow-sm shadow-slate-950/10 dark:bg-slate-950/40"
      >
        <div class="mb-3 space-y-1">
          <p class="text-[11px] uppercase tracking-[0.28em] text-purple-500/80">
            {{ section.label }}
          </p>
          <h3 class="text-base font-semibold">
            {{ section.title }}
          </h3>
        </div>

        <ul class="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          <li
            v-for="item in section.items"
            :key="item.text"
            :class="[
              'flex items-start text-sm leading-6 text-slate-600 dark:text-slate-300',
              item.icon ? 'gap-2' : ''
            ]"
          >
            <UIcon
              v-if="item.icon"
              :name="item.icon"
              class="mt-1 h-4 w-4 shrink-0 text-purple-500/80"
            />
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
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface SummaryItem {
  text: string
  icon?: string
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
    label: 'About',
    title: '사용자 경험을 디자인하는 프론트엔드 개발자에요',
    items: [
      {
        text: '웹 퍼블리셔로 커리어를 시작하여 현재는 Vue.js와 Nuxt.js를 기반으로 프론트엔드 개발을 하고 있어요. 단순히 화면을 보기 좋게 만드는 데서 그치지 않고, 사용자의 흐름과 경험까지 함께 설계하는 일을 중요하게 생각해요.'
      },
      {
        text: '인터랙션이 자연스럽게 이어지는 UI를 좋아해요. 3D와 애니메이션이 더해진 화면을 구현하는 과정에도 관심이 많아요.'
      },
      {
        text: '현재는 방송통신대학교 컴퓨터과학과에 재학하며 학업과 실무를 함께 이어가고 있어요.'
      }
    ]
  },
  {
    label: 'Focus',
    title: '이런 일에 집중하고 있어요',
    items: [
      {
        text: 'Vue.js와 Nuxt.js를 기반으로 프론트엔드 개발을 하고 있어요.',
        icon: 'i-lucide-sparkles'
      },
      {
        text: '인터랙션을 좋아해서 3D와 애니메이션이 더해진 UI를 구현하는 일에 관심이 많아요.',
        icon: 'i-lucide-orbit'
      },
      {
        text: '보기 좋은 화면뿐 아니라 유지보수하기 좋은 컴포넌트 구조와 상태 설계도 함께 고민해요.',
        icon: 'i-lucide-layers-3'
      }
    ]
  },
  {
    label: 'Stack',
    title: '이런 기술들을 사용하고 있어요',
    items: [
      {
        text: 'JavaScript와 TypeScript로 화면과 로직을 함께 다룰 수 있어요.',
        icon: 'i-lucide-code-2'
      },
      {
        text: 'Vue.js와 Nuxt.js를 중심으로 프론트엔드 구조를 만들고 있어요.',
        icon: 'i-lucide-layout-template'
      },
      {
        text: 'Pinia로 상태를 역할에 맞게 나누고 관리하는 방식을 선호해요.',
        icon: 'i-lucide-database'
      },
      {
        text: 'Tailwind CSS 4와 SCSS로 스타일을 빠르게 정리하고 다듬어요.',
        icon: 'i-lucide-palette'
      },
      {
        text: 'Three.js와 Cesium.js로 3D가 들어가는 화면도 구현할 수 있어요.',
        icon: 'i-lucide-box'
      },
      {
        text: '필요한 경우 Electron.js로 데스크톱 환경 작업도 할 수 있어요.',
        icon: 'i-lucide-monitor'
      }
    ]
  },
  {
    label: 'Work Style',
    title: '이렇게 일하고 있어요',
    items: [
      {
        text: '디자인 의도가 화면에서 자연스럽게 느껴지도록 꼼꼼하게 구현해요.',
        icon: 'i-lucide-pencil-ruler'
      },
      {
        text: '나중에도 수정하기 편한 구조와 상태 관리를 먼저 생각해요.',
        icon: 'i-lucide-workflow'
      },
      {
        text: '기획, 디자인, 개발이 같은 방향을 볼 수 있게 자주 소통해요.',
        icon: 'i-lucide-messages-square'
      }
    ]
  },
  {
    label: 'Contact',
    title: '이곳으로 편하게 연락주세요',
    items: [
      {
        text: 'vcbxnzn@gmail.com',
        icon: 'i-lucide-mail',
        href: 'mailto:vcbxnzn@gmail.com'
      },
      {
        text: 'github.com/serene1004',
        icon: 'i-lucide-github',
        href: 'https://github.com/serene1004',
        external: true
      }
    ]
  }
]
</script>
