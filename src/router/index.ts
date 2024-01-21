import { createRouter, createWebHistory } from "vue-router"
import HomePage from '@/views/HomePage.vue'
import MemoryGame from "@/views/MemoryGame.vue"
import TicTacToeGame from "@/views/TicTacToeGame.vue"
import AboutUs from "@/components/atoms/AboutUs.vue"
import TwoPlayersGame from "@/components/organisms/TwoPlayersGame.vue"
import SinglePlayerGame from "@/components/organisms/SinglePlayerGame.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage }, // zmienic sciezke przed deployem na Game4You
    { path: "/MemoryGame", name: 'Memory', component: MemoryGame },
    { path: "/TicTacToeGame", name: 'TicTac', component: TicTacToeGame },
    { path: "/SinglePlayer", name: 'SinglePlayer', component: SinglePlayerGame },
    { path: "/TwoPlayers", name: 'TwoPlayers', component: TwoPlayersGame },
    { path: "/AboutUs", name: 'AboutUs', component: AboutUs }
  ],
});

export default router;
