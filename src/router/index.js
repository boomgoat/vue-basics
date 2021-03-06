import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { transition: "slide-right" },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/UsersList.vue"),
  },
  {
    path: "/users/:id",
    name: "userProfile",
    component: () =>
      import(/* webpackChunkName: "userProfile" */ "../views/UserProfile.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
