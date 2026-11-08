<template>
  <section
      :id="`project-window-${props.folderId}`"
      ref="windowElement"
      class="project-window"
      :class="{ 'is-maximized': props.maximized, 'is-terminal-window': props.folderId === 'terminal' }"
      :style="dragPositionStyle"
      role="dialog"
      :aria-label="`${displayFolderName} ${copy.projectInformation}`"
      tabindex="-1"
      @keydown="handleWindowKeydown"
      @pointerdown="handleWindowPointerdown"
    >
      <header
        class="window-titlebar"
        @pointerdown="startDragging"
        @pointermove="dragWindow"
        @pointerup="stopDragging"
        @pointercancel="stopDragging"
      >
        <div class="window-title">
          <img v-if="props.folderId === 'terminal'" class="window-app-icon" src="/images/folder-icons/terminal.png" alt="" aria-hidden="true">
          <PixelFolderIcon v-else :src="folder?.icon" />
          <h2>{{ displayFolderName }}</h2>
        </div>
        <div class="window-controls">
          <button class="window-control" type="button" :aria-label="copy.minimizeWindow" @pointerdown.stop @click="emit('activate'); emit('minimize')">
            <Minus class="window-control-icon" :size="16" :stroke-width="2.25" aria-hidden="true" />
          </button>
          <button class="window-control" type="button" :aria-label="props.maximized ? copy.restoreWindow : copy.maximizeWindow" @pointerdown.stop @click="toggleWindowMaximize">
            <Copy v-if="props.maximized" class="window-control-icon" :size="16" :stroke-width="2.25" aria-hidden="true" />
            <Square v-else class="window-control-icon" :size="16" :stroke-width="2.25" aria-hidden="true" />
          </button>
          <button ref="closeButton" class="window-close" type="button" :aria-label="copy.closeWindow" @pointerdown.stop @click="emit('activate'); emit('close')">
            <X class="window-control-icon" :size="16" :stroke-width="2.25" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div class="window-body">
        <TerminalApp v-if="props.folderId === 'terminal'" />
        <template v-else-if="props.folderId === 'serene1004'">
          <p class="eyebrow">{{ copy.about.eyebrow }}</p>
          <header class="about-page-header">
            <img class="about-avatar" src="/images/brand/serene.png" :alt="copy.profileImageAlt" width="80" height="80">
            <div>
              <h3 class="window-heading">{{ copy.about.headingLead }}<br>{{ copy.about.headingRole }}</h3>
            </div>
          </header>
          <div class="info-copy">
            <p v-for="paragraph in copy.about.paragraphs" :key="paragraph">{{ paragraph }}</p>
          </div>
          <section class="detail-section">
            <h4>{{ copy.about.interestsHeading }}</h4>
            <ul class="detail-list">
              <li v-for="interest in copy.about.interests" :key="interest">{{ interest }}</li>
            </ul>
          </section>
          <section class="detail-section contact-methods">
            <h4>{{ copy.about.contactHeading }}</h4>
            <div class="contact-options">
              <a class="contact-option" href="mailto:vcbxnzn@gmail.com">
                <img class="contact-option-icon" src="/images/contact/email.png" alt="">
                <span><small>EMAIL</small><strong>vcbxnzn@gmail.com</strong></span>
              </a>
              <a class="contact-option" href="https://github.com/serene1004" target="_blank" rel="noopener noreferrer">
                <img class="contact-option-icon" src="/images/contact/github.png" alt="">
                <span><small>GITHUB</small><strong>github.com/serene1004</strong></span>
                <ExternalLink class="contact-option-external" :size="14" :stroke-width="2.25" aria-hidden="true" />
              </a>
              <a class="contact-option" href="https://www.linkedin.com/in/yongjun-yun-301623439/" target="_blank" rel="noopener noreferrer">
                <img class="contact-option-icon" src="/images/contact/linkedin.png" alt="">
                <span><small>LINKEDIN</small><strong>linkedin.com/in/yongjun-yun-301623439</strong></span>
                <ExternalLink class="contact-option-external" :size="14" :stroke-width="2.25" aria-hidden="true" />
              </a>
            </div>
          </section>
        </template>
        <template v-else-if="sideProjectContent">
          <p class="eyebrow">{{ copy.sideProject }}</p>
          <h3 class="window-heading">{{ sideProjectContent.name }}</h3>
          <p class="detail-summary">{{ sideProjectContent.summary }}</p>
          <section class="detail-section">
            <h4>{{ copy.projectFeatures }}</h4>
            <ul class="detail-list">
              <li v-for="highlight in sideProjectContent.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </section>
          <a class="primary-link" :href="sideProjectContent.url" target="_blank" rel="noopener noreferrer">
            {{ copy.openProject }} <ExternalLink class="action-icon" :size="16" :stroke-width="2.25" aria-hidden="true" />
          </a>
        </template>

        <template v-else-if="projectGroup">
          <nav class="project-tabs" :aria-label="copy.projectTabs">
            <button
              v-for="(tab, index) in displayTabs"
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
import TerminalApp from '~/components/TerminalApp.vue';
import { folders, getFolderDisplayName } from '~/data/folders';
import { getProjectById, projectGroups } from '~/data/projects';
import { getSideProjectById } from '~/data/side-projects';
import { usePortfolioLocale } from '~/composables/usePortfolioLocale';
import { localeMessages } from '~/data/locale-messages';
import { projectGroupTabsJa } from '~/data/project-translations-ja';
import { sideProjectTranslationsJa } from '~/data/side-project-translations-ja';

const props = defineProps<{ folderId: string; maximized?: boolean }>();
const emit = defineEmits<{ close: []; minimize: []; 'toggle-maximize': []; activate: [] }>();
const windowElement = ref<HTMLElement | null>(null);
const closeButton = ref<HTMLButtonElement | null>(null);
const activeIndex = ref(0);
const dragPosition = ref<{ left: number; top: number } | null>(null);
const windowSize = ref<{ width: number; height: number } | null>(null);
const dragPointer = ref<{ id: number; offsetX: number; offsetY: number } | null>(null);
const dragPositionStyle = computed(() => {
  if (props.maximized) return {};
  return {
    ...(dragPosition.value
      ? { left: `${dragPosition.value.left}px`, top: `${dragPosition.value.top}px`, transform: 'none' }
      : {}),
    ...(windowSize.value
      ? { width: `${windowSize.value.width}px`, height: `${windowSize.value.height}px` }
      : {}),
  };
});
const folder = computed(() => folders.find((item) => item.id === props.folderId));
const sideProject = computed(() => getSideProjectById(props.folderId));
const project = computed(() => getProjectById(props.folderId));
const projectGroup = computed(() => projectGroups.find((item) => item.id === props.folderId));
const { locale } = usePortfolioLocale();
const copy = computed(() => localeMessages[locale.value]);
const displayFolderName = computed(() => getFolderDisplayName(props.folderId, locale.value));
const sideProjectContent = computed(() => {
  if (!sideProject.value) return undefined;
  return locale.value === 'ja'
    ? { ...sideProject.value, ...sideProjectTranslationsJa[sideProject.value.id] }
    : sideProject.value;
});
const displayTabs = computed(() => (
  projectGroup.value && locale.value === 'ja'
    ? projectGroupTabsJa[projectGroup.value.id] ?? projectGroup.value.tabs
    : projectGroup.value?.tabs ?? []
));
const activeProject = computed(() => {
  const projectId = projectGroup.value?.projectIds[activeIndex.value];
  if (projectId === undefined) return undefined;
  return getProjectById(projectId);
});

const focusWindow = () => nextTick(() => (
  windowElement.value?.querySelector<HTMLInputElement>('.terminal-command-input') ?? closeButton.value
)?.focus());

const handleWindowPointerdown = (event: PointerEvent) => {
  emit('activate');
  const element = windowElement.value;
  if (
    !element
    || props.maximized
    || event.button !== 0
    || !window.matchMedia('(pointer: fine)').matches
    || event.target !== element
  ) return;

  const rect = element.getBoundingClientRect();
  if (event.clientX < rect.right - 20 || event.clientY < rect.bottom - 20) return;
  dragPosition.value = { left: rect.left, top: rect.top };
};

const toggleWindowMaximize = () => {
  if (!props.maximized && windowElement.value) {
    const rect = windowElement.value.getBoundingClientRect();
    windowSize.value = { width: rect.width, height: rect.height };
    windowElement.value.style.removeProperty('width');
    windowElement.value.style.removeProperty('height');
  }
  emit('activate');
  emit('toggle-maximize');
};

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
