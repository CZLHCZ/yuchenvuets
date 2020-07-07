import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/home/home.vue";
import Login from "../views/Login.vue";
import { component } from 'vue/types/umd';

/**
 * 重写路由的push方法
 */
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location: RouteConfig) {
//   return (<any>(routerPush.call(this, location))).catch((error: any)=> error)
// }

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      name:'首页'
    },
    children: [
      {
        path: '/headerNav',
        name: '导航',
        component: () => import('@/components/headerNav/headerNav.vue')
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
