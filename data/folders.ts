import type { Component } from 'vue'
import AboutMePanel from '~/components/panels/AboutMePanel.vue'
import ProjectPanel from '~/components/panels/ProjectPanel.vue'

export interface FolderItem {
  id: string
  name: string
  icon?: string
  component: Component
}

export const folders: FolderItem[] = [
  {
    id: 'about',
    name: 'About Me',
    icon: 'i-lucide-user',
    component: AboutMePanel
  },
  {
    id: 'project',
    name: 'Project',
    icon: 'i-lucide-rocket',
    component: ProjectPanel
  }
]
