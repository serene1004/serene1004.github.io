<template>
  <section class="mx-auto space-y-3 px-0.5 text-slate-800 dark:text-slate-100">
    <UForm
      :state="form"
      class="space-y-2.5"
      @submit="submitEntry"
    >
      <div class="flex items-start gap-2.5">
        <UAvatar
          src="/images/serene.png"
          alt="Guestbook"
          size="xl"
          class="mt-0.5 shrink-0 ring-1 ring-slate-200/80 dark:ring-white/10"
        />

        <div class="min-w-0 flex-1 space-y-2.5">
          <div class="flex flex-col gap-2 sm:flex-row">
            <UFormField
              name="author"
              class="min-w-0 flex-1"
            >
              <div class="space-y-1">
                <UInput
                  v-model="form.author"
                  placeholder="닉네임"
                  maxlength="10"
                  color="neutral"
                  size="lg"
                  class="w-full"
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

            <UButton
              type="button"
              color="neutral"
              variant="soft"
              size="lg"
              class="justify-center sm:self-start"
              @click="assignRandomAuthor"
            >
              랜덤 변경
            </UButton>
          </div>

          <UFormField name="message">
            <div class="space-y-1">
              <UTextarea
                v-model="form.message"
                placeholder="방명록을 작성해주세요."
                maxlength="50"
                :rows="2"
                autoresize
                :maxrows="2"
                color="neutral"
                class="w-full"
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
              :loading="submitting"
              size="lg"
              class="rounded-full px-5"
            >
              방명록 남기기
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

    <section class="space-y-1 border-t border-slate-200/80 pt-2.5 dark:border-white/10">
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
          class="flex gap-3 py-2.5 first:pt-0 last:pb-0"
        >
          <UAvatar
            :text="getAuthorInitial(entry.author)"
            size="lg"
            class="mt-0.5 shrink-0 bg-sky-100 text-sky-700 ring-1 ring-sky-200 dark:bg-sky-500/15 dark:text-sky-200 dark:ring-sky-400/15"
          />

          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <p class="truncate text-sm font-medium text-slate-900 dark:text-slate-100">
                {{ entry.author }}
              </p>
              <span class="text-[11px] text-slate-400 dark:text-slate-500">
                {{ formatMessageMeta(entry.createdAt) }}
              </span>
            </div>

            <p class="mt-1 whitespace-pre-line text-sm leading-6 text-slate-700 dark:text-slate-200">
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
  '신나는',
  '반짝이는',
  '달콤한',
  '고요한',
  '조용한',
  '부지런한',
  '따뜻한',
  '졸린'
]

const nouns = [
  '기린',
  '고양이',
  '강아지',
  '토끼',
  '바다표범',
  '코알라',
  '수달',
  '멧돼지'
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

const formatMessageMeta = (value: string) =>
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
