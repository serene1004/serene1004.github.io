import { createRouter, createWebHistory, createWebHashHistory  } from 'vue-router'
import Home from '@/pages/home/Home.vue' 
import Notes from '@/pages/notes/Notes.vue'
import Gallery from '@/pages/gallery/Gallery.vue'
import Contact from '@/pages/contact/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

export const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})