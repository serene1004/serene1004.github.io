<template>
  <div class="portfolio-terminal">
    <p class="terminal-welcome">{{ copy.terminal.welcome }}</p>
    <p class="terminal-hint">{{ copy.terminal.hint }}</p>
    <div class="terminal-output" role="log" aria-live="polite">
      <p v-for="(line, index) in output" :key="index" :class="{ 'terminal-command': line.command }">
        <template v-if="line.command"><span class="terminal-prompt">{{ copy.terminal.prompt }}</span> {{ line.text }}</template>
        <template v-else>{{ line.text }}</template>
      </p>
    </div>
    <form class="terminal-input-row" @submit.prevent="runCommand">
      <label class="terminal-prompt" for="terminal-command-input" aria-hidden="true">{{ copy.terminal.prompt }}</label>
      <input
        id="terminal-command-input"
        v-model="command"
        class="terminal-command-input"
        :aria-label="copy.terminal.inputLabel"
        autocomplete="off"
        autocapitalize="none"
        spellcheck="false"
      >
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import { useDesktopWindows } from '~/composables/useDesktopWindows';
import { usePortfolioLocale } from '~/composables/usePortfolioLocale';
import { folders, getFolderDisplayName } from '~/data/folders';
import { localeMessages } from '~/data/locale-messages';

const { locale } = usePortfolioLocale();
const { openWindow } = useDesktopWindows();
const copy = computed(() => localeMessages[locale.value]);
const command = ref('');
const output = ref<{ text: string; command?: boolean }[]>([]);

const runCommand = async () => {
  const value = command.value.trim();
  if (!value) return;
  command.value = '';
  if (value.toLocaleLowerCase() === 'clear') {
    output.value = [];
    return;
  }

  output.value.push({ text: value, command: true });
  const [name, ...args] = value.split(/\s+/);
  const key = name.toLocaleLowerCase();
  if (key === 'help') {
    output.value.push(...copy.value.terminal.help.map((text) => ({ text })));
  } else if (key === 'projects') {
    output.value.push(...folders.map((folder) => ({ text: getFolderDisplayName(folder.id, locale.value) })));
  } else if (key === 'about') {
    output.value.push({ text: copy.value.terminal.about });
  } else if (key === 'open' && args.length) {
    const requestedName = args.join(' ').toLocaleLowerCase(locale.value === 'ja' ? 'ja-JP' : 'ko-KR');
    const folder = folders.find((item) => (
      item.id.toLocaleLowerCase() === requestedName
      || getFolderDisplayName(item.id, locale.value).toLocaleLowerCase(locale.value === 'ja' ? 'ja-JP' : 'ko-KR') === requestedName
    ));
    if (folder) openWindow(folder.id);
    output.value.push({ text: folder ? `${getFolderDisplayName(folder.id, locale.value)} — ${copy.value.openProject}` : copy.value.terminal.missingProject });
  } else {
    output.value.push({ text: copy.value.terminal.unknown });
  }
  await nextTick();
  document.querySelector('.terminal-command-input')?.scrollIntoView({ block: 'nearest' });
};
</script>

<style scoped>
.portfolio-terminal { min-height: 320px; padding: 24px; background: var(--color-ink); color: var(--color-surface); font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: var(--font-size-body); line-height: var(--line-height-readable); }
.portfolio-terminal p { margin: 0; overflow-wrap: anywhere; }
.terminal-welcome { color: #D7DDD9; }
.terminal-hint { margin-top: 4px !important; color: #AEB9B2; }
.terminal-output { display: grid; gap: 4px; margin-block: 20px; }
.terminal-command { color: #D7DDD9; }
.terminal-input-row { display: flex; align-items: baseline; gap: 8px; }
.terminal-prompt { flex: 0 0 auto; color: #D7DDD9; white-space: pre; }
.terminal-command-input { min-width: 0; flex: 1; padding: 0; border: 0; outline: 0; background: transparent; color: inherit; caret-color: #A9D1C1; font: inherit; }
.terminal-command-input:focus-visible { outline: 0; }
@media (max-width: 760px) { .portfolio-terminal { min-height: 100%; padding: 20px 16px; } }
</style>
