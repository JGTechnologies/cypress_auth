import type { RouteRecordRaw } from "vue-router";

// @ts-ignore
const LoginView = () => import("@/views/LoginView.vue");

const routes: RouteRecordRaw[] = [
  {
    component: LoginView,
    meta: {
      layout: "empty",
      guest: true,
    },
    name: "LoginView",
    path: "/login",
  },
];

export default routes;
