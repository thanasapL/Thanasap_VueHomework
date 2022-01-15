import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import Profile from './views/Profile.vue';
import Contact from './views/Contact.vue';

const routes = [
  { path: '/', name: 'Profile', component: Profile },
  { path: '/contact', name: 'Contact', component: Contact },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
