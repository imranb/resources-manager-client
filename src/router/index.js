import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin Dashboard',
    component: () => import('../views/admin/Dashboard.vue'),
    children: [
      {
        path: 'pdfs',
        name: 'admin-pdfs',
        component: () => import('../views/admin/Pdfs.vue')
      },
      {
        path: 'snippets',
        name: 'admin-snippets',
        component: () => import('../views/admin/Snippets.vue')
      },
      {
        path: 'links',
        name: 'admin-links',
        component: () => import('../views/admin/Links.vue')
      },
      {
        path: '', redirect: '/admin/pdfs'
      }
    ]
  },
  {
    path: '/client',
    name: 'Client Dashboard',
    component: () => import('../views/client/Dashboard.vue'),
    children: [
      {
        path: 'pdfs',
        name: 'client-pdfs',
        component: () => import('../views/client/Pdfs.vue')
      },
      {
        path: 'snippets',
        name: 'client-snippets',
        component: () => import('../views/client/Snippets.vue')
      },
      {
        path: 'links',
        name: 'client-links',
        component: () => import('../views/client/Links.vue')
      },
      {
        path: '', redirect: '/client/pdfs'
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
