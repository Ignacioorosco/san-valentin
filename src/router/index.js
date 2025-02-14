import { createRouter, createWebHistory } from 'vue-router';
import Aceptado from '@/components/Aceptado.vue'; // Página si dice "Sí"
import Rechazo1 from '@/components/Rechazo1.vue';
import Rechazo2 from '@/components/Rechazo2.vue';
import Rechazo3 from '@/components/Rechazo3.vue';
import Rechazo4 from '@/components/Rechazo4.vue';

import pregunta from '@/components/pregunta.vue';

const routes = [
  { path: '/', component: pregunta },
  { path: '/aceptado', component: Aceptado },
  { path: '/rechazado1', component: Rechazo1 },
  { path: '/rechazado2', component: Rechazo2 },
  { path: '/rechazado3', component: Rechazo3 },
  { path: '/rechazado4', component: Rechazo4 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;