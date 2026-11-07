<template>
  <section
      :id="`project-window-${props.folderId}`"
      ref="windowElement"
      class="project-window"
      :class="{ 'is-maximized': props.maximized }"
      :style="dragPositionStyle"
      role="dialog"
      :aria-label="`${folder?.name ?? 'Project'} information`"
      tabindex="-1"
      @keydown="handleWindowKeydown"
      @pointerdown="emit('activate')"
    >
      <header
        class="window-titlebar"
        @pointerdown="startDragging"
        @pointermove="dragWindow"
        @pointerup="stopDragging"
        @pointercancel="stopDragging"
      >
        <div class="window-title">
          <PixelFolderIcon :src="folder?.icon" />
          <h2>{{ folder?.name }}</h2>
        </div>
        <div class="window-controls">
          <button class="window-control" type="button" aria-label="창 최소화" @pointerdown.stop @click="emit('activate'); emit('minimize')">
            <Minus class="window-control-icon" :size="16" :stroke-width="2.25" aria-hidden="true" />
          </button>
          <button class="window-control" type="button" :aria-label="props.maximized ? '창 복원' : '창 최대화'" @pointerdown.stop @click="emit('activate'); emit('toggle-maximize')">
            <Copy v-if="props.maximized" class="window-control-icon" :size="16" :stroke-width="2.25" aria-hidden="true" />
            <Square v-else class="window-control-icon" :size="16" :stroke-width="2.25" aria-hidden="true" />
          </button>
          <button ref="closeButton" class="window-close" type="button" aria-label="창 닫기" @pointerdown.stop @click="emit('activate'); emit('close')">
            <X class="window-control-icon" :size="16" :stroke-width="2.25" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div class="window-body">
        <template v-if="props.folderId === 'serene1004'">
          <p class="eyebrow">ABOUT ME</p>
          <header class="about-page-header">
            <img class="about-avatar" src="/images/serene.png" alt="윤용준 프로필 사진" width="80" height="80">
            <div>
              <h3 class="window-heading">사용자 경험을 디자인하는<br>프론트엔드 개발자 윤용준입니다.</h3>
            </div>
          </header>
          <div class="info-copy">
            <p>
              웹 퍼블리셔로 커리어를 시작하여 현재 프론트엔드 개발을 하고 있는 6년차 프론트엔드 개발자입니다.<br>
              화면의 완성도뿐 아니라 사용자의 흐름과 경험, 유지보수하기 좋은 구조를 함께 고민합니다.<br>
              현재 방송통신대학교 컴퓨터과학과에 재학하며 학업과 실무를 이어가고 있습니다.
            </p>
          </div>
          <section class="detail-section">
            <h4>관심 있게 다루는 일</h4>
            <ul class="detail-list">
              <li>요구사항과 사용 맥락을 이해해 명확한 화면 흐름으로 구성하기</li>
              <li>컴포넌트 구조와 상태 흐름을 고려해 오래 유지할 수 있는 UI 만들기</li>
              <li>필요에 맞게 지도, 캔버스, 실시간 데이터를 다루는 인터랙션 구현하기</li>
            </ul>
          </section>
          <section class="detail-section contact-methods">
            <h4>연락 채널</h4>
            <div class="contact-options">
              <a class="contact-option" href="mailto:vcbxnzn@gmail.com">
                <img class="contact-option-icon" src="/images/folder-icons/email.png" alt="">
                <span><small>EMAIL</small><strong>vcbxnzn@gmail.com</strong></span>
              </a>
              <a class="contact-option" href="https://github.com/serene1004" target="_blank" rel="noopener noreferrer">
                <img class="contact-option-icon" src="/images/folder-icons/github.png" alt="">
                <span><small>GITHUB</small><strong>github.com/serene1004</strong></span>
                <ExternalLink class="contact-option-external" :size="14" :stroke-width="2.25" aria-hidden="true" />
              </a>
              <a class="contact-option" href="https://www.linkedin.com/in/yongjun-yun-301623439/" target="_blank" rel="noopener noreferrer">
                <img class="contact-option-icon" src="/images/folder-icons/linkedin.png" alt="">
                <span><small>LINKEDIN</small><strong>linkedin.com/in/yongjun-yun-301623439</strong></span>
                <ExternalLink class="contact-option-external" :size="14" :stroke-width="2.25" aria-hidden="true" />
              </a>
            </div>
          </section>
        </template>
        <template v-else-if="sideProject">
          <p class="eyebrow">SIDE PROJECT</p>
          <h3 class="window-heading">{{ sideProject.name }}</h3>
          <p class="detail-summary">{{ sideProject.summary }}</p>
          <section class="detail-section">
            <h4>주요 기능</h4>
            <ul class="detail-list">
              <li v-for="highlight in sideProject.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </section>
          <a class="primary-link" :href="sideProject.url" target="_blank" rel="noopener noreferrer">
            프로젝트 열기 <ExternalLink class="action-icon" :size="16" :stroke-width="2.25" aria-hidden="true" />
          </a>
        </template>

        <template v-else-if="projectGroup">
          <nav class="project-tabs" :aria-label="`${folder?.name} project views`">
            <button
              v-for="(tab, index) in projectGroup.tabs"
              :key="tab"
              class="project-tab"
              :class="{ 'is-active': activeIndex === index }"
              type="button"
              :aria-pressed="activeIndex === index"
              @click="activeIndex = index"
            >
              {{ tab }}
            </button>
          </nav>
          <ProjectContent v-if="activeProject" :project="activeProject" />
        </template>

        <ProjectContent v-else-if="project" :project="project" />
      </div>
    </section>
</template>

<script setup lang="ts">
import {
  Copy,
  ExternalLink,
  Minus,
  Square,
  X,
} from '@lucide/vue';
import {
  computed,
  nextTick,
  onMounted,
  ref,
  watch,
} from 'vue';
import ProjectContent from '~/components/ProjectContent.vue';
import PixelFolderIcon from '~/components/PixelFolderIcon.vue';
import { folders } from '~/data/folders';
import { getProjectById, projectGroups } from '~/data/projects';
import { getSideProjectById } from '~/data/side-projects';

const props = defineProps<{ folderId: string; maximized?: boolean }>();
const emit = defineEmits<{ close: []; minimize: []; 'toggle-maximize': []; activate: [] }>();
const windowElement = ref<HTMLElement | null>(null);
const closeButton = ref<HTMLButtonElement | null>(null);
const activeIndex = ref(0);
const dragPosition = ref<{ left: number; top: number } | null>(null);
const dragPointer = ref<{ id: number; offsetX: number; offsetY: number } | null>(null);
const dragPositionStyle = computed(() => (
  dragPosition.value && !props.maximized
    ? { left: `${dragPosition.value.left}px`, top: `${dragPosition.value.top}px`, transform: 'none' }
    : {}
));
const folder = computed(() => folders.find((item) => item.id === props.folderId));
const sideProject = computed(() => getSideProjectById(props.folderId));
const project = computed(() => getProjectById(props.folderId));
const projectGroup = computed(() => projectGroups.find((item) => item.id === props.folderId));
const activeProject = computed(() => {
  if (!projectGroup.value) return undefined;
  return getProjectById(projectGroup.value.projectIds[activeIndex.value]);
});

const focusWindow = () => nextTick(() => closeButton.value?.focus());

const startDragging = (event: PointerEvent) => {
  if (props.maximized || !window.matchMedia('(pointer: fine)').matches) return;
  if (event.target instanceof Element && event.target.closest('button')) return;
  const rect = windowElement.value?.getBoundingClientRect();
  if (!rect) return;
  event.preventDefault();
  dragPointer.value = {
    id: event.pointerId,
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
  };
  (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
};

const dragWindow = (event: PointerEvent) => {
  if (dragPointer.value?.id !== event.pointerId || !windowElement.value) return;
  const rect = windowElement.value.getBoundingClientRect();
  const minTop = 58;
  const maxLeft = Math.max(8, window.innerWidth - rect.width - 8);
  const maxTop = Math.max(minTop, window.innerHeight - 48 - rect.height);
  dragPosition.value = {
    left: Math.min(maxLeft, Math.max(8, event.clientX - dragPointer.value.offsetX)),
    top: Math.min(maxTop, Math.max(minTop, event.clientY - dragPointer.value.offsetY)),
  };
};

const stopDragging = (event: PointerEvent) => {
  if (dragPointer.value?.id !== event.pointerId) return;
  if ((event.currentTarget as HTMLElement).hasPointerCapture(event.pointerId)) {
    (event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);
  }
  dragPointer.value = null;
};

onMounted(focusWindow);
watch(() => props.folderId, () => {
  activeIndex.value = 0;
  focusWindow();
});

const handleWindowKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close');
  }
};

</script>
