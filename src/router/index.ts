import { createRouter, createWebHistory } from "vue-router"
import HomePage from '@/views/HomePage.vue'
import MemoryGame from "@/views/MemoryGame.vue"
import TicTacToeGame from "@/views/TicTacToeGame.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/MemoryGame", name: 'Memory', component: MemoryGame },
    { path: "/TicTacToeGame", name: 'TicTac', component: TicTacToeGame }
  ],
});

export default router;
