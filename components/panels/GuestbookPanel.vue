<template>
  <section class="mx-auto space-y-4 px-0.5 text-slate-800 dark:text-slate-100">
    <UForm
      :state="form"
      class="space-y-3.5"
      @submit="submitEntry"
    >
      <div class="flex items-start gap-3">
        <UButton
          type="button"
          variant="ghost"
          color="neutral"
          size="sm"
          :class="guestbookAuthorButtonClass"
          aria-label="랜덤 닉네임 생성"
          @click="assignRandomAuthor"
        >
          <span :class="guestbookAuthorButtonTextClass">
            {{ getAuthorInitial(form.author) }}
          </span>
        </UButton>

        <div class="min-w-0 flex-1 space-y-3">
          <UFormField
            name="author"
            class="min-w-0"
          >
            <div class="space-y-1">
              <UInput
                v-model="form.author"
                placeholder="닉네임"
                maxlength="10"
                variant="none"
                color="neutral"
                size="lg"
                class="w-full"
                :ui="guestbookFieldUi"
                @update:model-value="clearFieldError('author')"
              />

              <p
                v-if="fieldErrors.author"
                class="pl-1 text-xs text-rose-500/90 dark:text-rose-300/90"
              >
                {{ fieldErrors.author }}
              </p>
            </div>
          </UFormField>

          <UFormField name="message">
            <div class="space-y-1">
              <UTextarea
                v-model="form.message"
                placeholder="방명록을 작성해주세요."
                maxlength="50"
                :rows="2"
                autoresize
                :maxrows="3"
                variant="none"
                color="neutral"
                class="w-full"
                :ui="guestbookFieldUi"
                @update:model-value="clearFieldError('message')"
              />

              <p
                v-if="fieldErrors.message"
                class="pl-1 text-xs text-rose-500/90 dark:text-rose-300/90"
              >
                {{ fieldErrors.message }}
              </p>
            </div>
          </UFormField>

          <div class="flex justify-end">
            <UButton
              type="submit"
              :disabled="submitting"
              variant="ghost"
              :class="guestbookSubmitButtonClass"
            >
              <span class="pointer-events-none absolute inset-y-0 right-[-18%] w-16 rounded-full bg-[radial-gradient(circle,_rgba(125,211,252,0.34)_0%,rgba(125,211,252,0)_72%)] blur-2xl dark:bg-[radial-gradient(circle,_rgba(192,132,252,0.14)_0%,rgba(192,132,252,0)_72%)]" />

              <span class="relative flex items-center gap-1">
                <span :class="guestbookSubmitIconClass">
                  <UIcon
                    :name="submitting ? 'i-lucide-loader-circle' : 'i-lucide-pencil-line'"
                    :class="['h-3.5 w-3.5', submitting ? 'animate-spin' : '']"
                  />
                </span>

                <span class="pr-1.5 text-xs font-medium tracking-[-0.01em]">
                  {{ submitting ? '남기는 중...' : '방명록 남기기' }}
                </span>
              </span>
            </UButton>
          </div>
        </div>
      </div>

      <UAlert
        v-if="submitError"
        color="error"
        variant="soft"
        icon="i-lucide-circle-alert"
        title="등록에 실패했습니다"
        :description="submitError"
      />
    </UForm>

    <section class="space-y-1 border-t border-slate-200/80 pt-2 dark:border-white/10">
      <div
        v-if="loading"
        class="flex min-h-24 items-center justify-center text-sm text-slate-500 dark:text-slate-400"
      >
        <div class="flex items-center gap-2">
          <UIcon name="i-lucide-loader-circle" class="h-4 w-4 animate-spin" />
          <span>방명록을 불러오는 중입니다.</span>
        </div>
      </div>

      <UAlert
        v-else-if="loadError"
        color="error"
        variant="soft"
        icon="i-lucide-server-crash"
        title="불러오지 못했습니다"
        :description="loadError"
      />

      <div
        v-else-if="!entries.length"
        class="flex min-h-20 items-center justify-center text-center"
      >
        <p class="text-sm text-slate-500 dark:text-slate-400">작성된 방명록이 없어요.</p>
      </div>

      <ul
        v-else
        class="divide-y divide-slate-200/80 dark:divide-white/8"
      >
        <li
          v-for="entry in entries"
          :key="entry.id"
          class="flex gap-3 p-2 first:pt-0 last:pb-0"
        >
          <div :class="guestbookEntryAvatarClass">
            <span :class="guestbookEntryAvatarTextClass">
              {{ getAuthorInitial(entry.author) }}
            </span>
          </div>

          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <p class="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                {{ entry.author }}
              </p>
              <span class="text-xs text-slate-500 dark:text-slate-400">
                {{ formatMessageMeta(entry.createdAt) }}
              </span>
            </div>

            <p class="whitespace-pre-line text-sm text-slate-700/95 dark:text-slate-200/95">
              {{ entry.message }}
            </p>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

interface GuestbookEntry {
  id: number
  author: string
  message: string
  createdAt: string
}

interface GuestbookFormState {
  author: string
  message: string
}

interface GuestbookFormError {
  name: keyof GuestbookFormState
  message: string
}

const adjectives = [
  '달콤한',
  '상큼한',
  '아삭한',
  '싱싱한',
  '말랑한',
  '시끄러운',
  '즐거운',
  '놀라는',
  '졸린',
  '슬픈',
  '멋쟁이'
]

const nouns = [
  '사과',
  '딸기',
  '포도',
  '당근',
  '오이',
  '양파',
  '감자',
  '망고',
  '키위',
  '수박',
  '메론',
  '토마토',
  '바나나',
  '코코넛',
  '파인애플',
]

const config = useRuntimeConfig()
const toast = useToast()
const entries = ref<GuestbookEntry[]>([])
const loading = ref(true)
const submitting = ref(false)
const loadError = ref('')
const submitError = ref('')
const lastLoadedAt = ref<Date | null>(null)

const form = reactive<GuestbookFormState>({
  author: '',
  message: ''
})

const fieldErrors = reactive<Record<keyof GuestbookFormState, string>>({
  author: '',
  message: ''
})

const guestbookAuthorButtonClass =
  'group cursor-pointer h-10 w-10 items-center justify-center rounded-[14px] border backdrop-blur-xl transition duration-200 border-purple-300/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.4),rgba(216,180,254,0.3))] text-slate-700 shadow-[0_12px_24px_rgba(168,85,247,0.14),inset_0_1px_0_rgba(255,255,255,0.28)] hover:-translate-y-0.5 hover:border-purple-300/70 hover:text-slate-900 dark:border-purple-300/34 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(192,132,252,0.18))] dark:text-white dark:shadow-[0_12px_28px_rgba(168,85,247,0.22),inset_0_1px_0_rgba(255,255,255,0.14)] dark:hover:border-purple-200/40 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/55 dark:focus-visible:ring-purple-300/28'

const guestbookAuthorButtonTextClass =
  'text-sm font-medium leading-none transition duration-200 group-hover:scale-105'

const guestbookEntryAvatarClass =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-purple-200/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.3),rgba(243,232,255,0.34))] text-slate-700 shadow-[0_10px_24px_rgba(168,85,247,0.08)] backdrop-blur-xl dark:border-purple-300/18 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(192,132,252,0.12))] dark:text-slate-100/90 dark:shadow-[0_10px_24px_rgba(15,23,42,0.16)]'

const guestbookEntryAvatarTextClass =
  'text-sm font-medium leading-none'

const guestbookFieldUi = {
  base: 'rounded-lg border border-white/42 bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(248,250,252,0.22))] text-slate-800 placeholder:text-slate-400/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-xl ring-0 transition duration-200 hover:border-white/58 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.4),rgba(248,250,252,0.28))] focus:border-purple-200/75 focus:bg-[linear-gradient(180deg,rgba(255,255,255,0.46),rgba(250,245,255,0.34))] focus:shadow-[inset_0_1px_0_rgba(255,255,255,0.26),0_0_0_1px_rgba(216,180,254,0.26)] focus-visible:ring-0 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(30,41,59,0.46),rgba(15,23,42,0.32))] dark:text-slate-100 dark:placeholder:text-slate-400/75 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:hover:border-white/14 dark:hover:bg-[linear-gradient(180deg,rgba(30,41,59,0.54),rgba(15,23,42,0.38))] dark:focus:border-purple-300/24 dark:focus:bg-[linear-gradient(180deg,rgba(49,46,129,0.18),rgba(17,24,39,0.44))] dark:focus:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(192,132,252,0.14)]'
}

const guestbookSubmitButtonClass =
  'group cursor-pointer relative isolate justify-start overflow-hidden rounded-full border border-white/60 bg-[linear-gradient(135deg,rgba(248,250,252,0.88),rgba(240,249,255,0.8)_52%,rgba(245,243,255,0.84))] p-1 text-slate-900 shadow-[0_10px_20px_rgba(148,163,184,0.12)] ring-1 ring-white/75 backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:border-purple-200/90 hover:shadow-[0_16px_28px_rgba(168,85,247,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/60 disabled:cursor-wait disabled:opacity-85 disabled:hover:translate-y-0 dark:border-white/12 dark:bg-[linear-gradient(135deg,rgba(30,41,59,0.8),rgba(15,23,42,0.84)_52%,rgba(49,46,129,0.24))] dark:text-slate-50 dark:ring-white/8 dark:hover:border-purple-300/24 dark:hover:shadow-[0_16px_28px_rgba(15,23,42,0.28)] dark:focus-visible:ring-purple-300/28'

const guestbookSubmitIconClass =
  'flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(14,165,233,0.95),rgba(168,85,247,0.92))] text-white shadow-[0_10px_20px_rgba(14,165,233,0.22)] transition duration-200 group-hover:scale-105 dark:bg-[linear-gradient(135deg,rgba(125,211,252,0.18),rgba(196,181,253,0.22))] dark:text-sky-50 dark:shadow-[0_10px_22px_rgba(15,23,42,0.2)]'

const formatMessageMeta = (value: string | Date) =>
  new Intl.DateTimeFormat('ko-KR', {
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(value))

const getAuthorInitial = (author: string) => author.trim().slice(0, 1) || '?'

const buildRandomName = () => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]
  return `${adjective}${noun}`.slice(0, 10)
}

const clearFieldError = (name: keyof GuestbookFormState) => {
  fieldErrors[name] = ''
}

const assignRandomAuthor = () => {
  form.author = buildRandomName()
  clearFieldError('author')
}

const validateForm = (state: GuestbookFormState): GuestbookFormError[] => {
  const errors: GuestbookFormError[] = []
  const author = state.author.trim()
  const message = state.message.trim()

  if (author.length < 2 || author.length > 10) {
    errors.push({
      name: 'author',
      message: '이름은 2자 이상 10자 이하로 입력해 주세요.'
    })
  }

  if (message.length < 1 || message.length > 50) {
    errors.push({
      name: 'message',
      message: '내용은 1자 이상 50자 이하로 입력해 주세요.'
    })
  }

  return errors
}

const syncFieldErrors = (errors: GuestbookFormError[]) => {
  fieldErrors.author = ''
  fieldErrors.message = ''

  errors.forEach(({ name, message }) => {
    fieldErrors[name] = message
  })
}

const loadEntries = async () => {
  loading.value = true
  loadError.value = ''

  try {
    entries.value = await $fetch<GuestbookEntry[]>(`${config.public.apiBase}/entries`)
    lastLoadedAt.value = new Date()
  }
  catch {
    loadError.value = '방명록을 불러오지 못했습니다. API 서버가 실행 중인지 확인해 주세요.'
  }
  finally {
    loading.value = false
  }
}

const submitEntry = async () => {
  const validationErrors = validateForm(form)

  syncFieldErrors(validationErrors)

  if (validationErrors.length) {
    return
  }

  const author = form.author.trim()
  const message = form.message.trim()

  submitting.value = true
  submitError.value = ''

  try {
    const created = await $fetch<GuestbookEntry>(`${config.public.apiBase}/entries`, {
      method: 'POST',
      body: {
        author,
        message
      }
    })

    entries.value = [created, ...entries.value]
    lastLoadedAt.value = new Date()
    form.message = ''
    assignRandomAuthor()
    syncFieldErrors([])

    toast.add({
      title: '방명록이 등록되었어요',
      description: `${author}님이 방명록을 남겼어요.`,
      icon: 'i-lucide-book-text',
      avatar: {
        src: '/images/serene.png',
        alt: 'Serene'
      },
      color: 'primary',
      orientation: 'horizontal',
      progress: false,
      duration: 3200
    })
  }
  catch {
    submitError.value = '방명록을 저장하지 못했어요. 잠시 후 다시 시도해 주세요.'
  }
  finally {
    submitting.value = false
  }
}

onMounted(() => {
  assignRandomAuthor()
  void loadEntries()
})
</script>
