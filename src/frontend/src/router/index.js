import { createRouter, createWebHistory } from 'vue-router'

import Moradores from "@/views/Moradores.vue";
import EditarMorador from "@/components/EditarMorador.vue";
import AdicionaMoradores from "@/components/AdicionaMoradores.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'moradores',
      component: Moradores
    },
    {
      path: '/moradores/cadastrar',
      name: 'AdicionaMoradores',
      component: AdicionaMoradores
    },
    {
      path: '/moradores/edit/:user',
      name: 'editarmorador',
      component: EditarMorador
    }
  ]
})

export default router
