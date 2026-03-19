import type { Component } from 'vue'
import AboutMePanel from '~/components/panels/AboutMePanel.vue'
import PortfolioPanel from '~/components/panels/PortfolioPanel.vue'

export interface FolderWindowOptions {
  width?: string
  height?: string
}

export interface FolderItem {
  id: string
  name: string
  icon?: string
  component: Component
  window?: FolderWindowOptions
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
    component: PortfolioPanel
  }
]
