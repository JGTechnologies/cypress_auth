import { createRouter, createWebHistory } from "vue-router";
import AuthRoutes from "./routes/auth";
import useAuthStore from "@/stores/auth";

// @ts-ignore
const HomeView = () => import("@/views/HomeView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: HomeView,
      meta: {
        layout: "default",
      },
      name: "HomeView",
      path: "/",
    },
    ...AuthRoutes,
  ],
});

router.beforeEach((to, _, next) => {
  if (!to.meta.guest && !useAuthStore().getIsAuthenticated) {
    next({ name: "LoginView" });
  } else {
    next();
  }
});

export default router;
