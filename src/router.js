import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Soldier from './views/Soldier';
import Terrorist from './views/Terrorist';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/terrorist",
      name: "Terrorist",
      component: Terrorist
    },
    {
      path: "/soldier",
      name: "Soldier",
      component: Soldier
    }
  ]
});
