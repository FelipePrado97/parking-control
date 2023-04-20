import { createRouter, createWebHistory } from 'vue-router'

import Moradores from "@/views/Moradores.vue";
import EditarMorador from "@/components/EditarMorador.vue";
import AdicionaMoradores from "@/components/AdicionaMoradores.vue";
import LoginPage from "@/views/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/moradores',
      name: 'moradores',
      component: Moradores,
      beforeEnter: requireAuth
    },
    {
      path: '/moradores/cadastrar',
      name: 'AdicionaMoradores',
      component: AdicionaMoradores,
      beforeEnter: requireAuth
    },
    {
      path: '/moradores/edit/:user',
      name: 'editarmorador',
      component: EditarMorador,
      beforeEnter: requireAuth
    }
  ]
})

function isAuthenticated() {
  const credentials = localStorage.getItem('credentials');
  return credentials != null;
}

function requireAuth(to, from, next) {
  if (!isAuthenticated()) {
    alert("Usuário não autenticado! Faça Login continuar!")
    next('/');
  } else {
    next();
  }
}

export default router
