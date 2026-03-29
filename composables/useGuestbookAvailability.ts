import { computed } from 'vue'
import { folders, type FolderItem } from '~/data/folders'

const guestbookFolderId = 'guestbook'

let pendingAvailabilityCheck: Promise<boolean> | null = null

export const useGuestbookAvailability = () => {
  const config = useRuntimeConfig()
  const guestbookAvailable = useState('guestbook-available', () => false)
  const guestbookAvailabilityChecked = useState('guestbook-availability-checked', () => false)
  const guestbookAvailabilityRefreshing = useState(
    'guestbook-availability-refreshing',
    () => false
  )

  const refreshGuestbookAvailability = async () => {
    if (pendingAvailabilityCheck) {
      return pendingAvailabilityCheck
    }

    guestbookAvailabilityRefreshing.value = true

    pendingAvailabilityCheck = (async () => {
      try {
        await $fetch(`${config.public.apiBase}/entries`, {
          query: {
            limit: 1
          }
        })
        guestbookAvailable.value = true
      }
      catch {
        guestbookAvailable.value = false
      }
      finally {
        guestbookAvailabilityChecked.value = true
        guestbookAvailabilityRefreshing.value = false
      }

      return guestbookAvailable.value
    })()

    const isAvailable = await pendingAvailabilityCheck
    pendingAvailabilityCheck = null
    return isAvailable
  }

  const isFolderVisible = (folderId: string) =>
    folderId !== guestbookFolderId || guestbookAvailable.value

  const visibleFolders = computed<FolderItem[]>(() =>
    folders.filter(folder => isFolderVisible(folder.id))
  )

  return {
    guestbookAvailable,
    guestbookAvailabilityChecked,
    guestbookAvailabilityRefreshing,
    refreshGuestbookAvailability,
    isFolderVisible,
    visibleFolders
  }
}
