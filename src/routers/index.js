import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: () => import("@/views/Layout/index.vue"),
      children: [
        { path: "", component: () => import("@/views/Home/index.vue") },
        { path: "category", component: () => import("@/views/Category/index.vue") },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login/index.vue"),
    },
  ],
});
export default router;
