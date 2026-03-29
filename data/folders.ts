import type { Component } from 'vue'
import AboutMePanel from '~/components/panels/AboutMePanel.vue'
import GuestbookPanel from '~/components/panels/GuestbookPanel.vue'
import PortfolioPanel from '~/components/panels/PortfolioPanel.vue'
import ProjectCasePanel from '~/components/panels/ProjectCasePanel.vue'
import { projects } from '~/data/projects'

export interface FolderWindowOptions {
  width?: string
  height?: string
}

export interface FolderItem {
  id: string
  name: string
  icon?: string
  component: Component
  componentProps?: Record<string, unknown>
  window?: FolderWindowOptions
}

const projectWindow: FolderWindowOptions = {
  width: 'min(52rem, calc(100vw - 2rem))',
  height: 'min(40rem, calc(100vh - 7rem))'
}

export const folders: FolderItem[] = [
  {
    id: 'about',
    name: 'About Me',
    icon: 'i-lucide-user',
    component: AboutMePanel,
    window: {
      width: 'min(40rem, calc(100vw - 2rem))',
      height: 'min(34rem, calc(100vh - 7rem))'
    }
  },
  {
    id: 'project',
    name: 'Portfolio',
    icon: 'i-lucide-rocket',
    component: PortfolioPanel,
    window: {
      width: 'min(50rem, calc(100vw - 2rem))',
      height: 'min(38rem, calc(100vh - 7rem))'
    }
  },
  {
    id: 'guestbook',
    name: 'Guestbook',
    icon: 'i-lucide-book-text',
    component: GuestbookPanel,
    window: {
      width: 'min(40rem, calc(100vw - 2rem))',
      height: 'min(34rem, calc(100vh - 7rem))'
    }
  },
  ...projects.map(project => ({
    id: project.id,
    name: project.folderName,
    icon: project.icon,
    component: ProjectCasePanel,
    componentProps: {
      projectId: project.id
    },
    window: projectWindow
  }))
]
