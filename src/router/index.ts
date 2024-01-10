import { createRouter, createWebHistory } from "vue-router"
import HomePage from '@/views/HomePage.vue'
import MemoryGame from "@/views/MemoryGame.vue"
import TicTacToeGame from "@/views/TicTacToeGame.vue"
import AboutUs from "@/components/atoms/AboutUs.vue"
import TwoPlayersGame from "@/views/TwoPlayersGame.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/MemoryGame", name: 'Memory', component: MemoryGame },
    { path: "/TicTacToeGame", name: 'TicTac', component: TicTacToeGame },
    { path: "/TwoPlayers", name: 'TwoPlayers', component: TwoPlayersGame },
    { path: "/AboutUs", name: 'AboutUs', component: AboutUs }
  ],
});

export default router;
