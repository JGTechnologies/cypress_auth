import { createApp } from "vue";
import { createPinia } from "pinia";

// @ts-ignore
import App from "@/App.vue";
import "@/assets/main.css";
// @ts-ignore
import EmptyLayout from "@/layouts/EmptyLayout.vue";
// @ts-ignore
import DefaultLayout from "@/layouts/DefaultLayout.vue";
// @ts-ignore
import VeeValidatePlugin from "@/plugins/vee-validate.js";
import router from "@/router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VeeValidatePlugin);

app.component("DefaultLayout", DefaultLayout);
app.component("EmptyLayout", EmptyLayout);

app.mount("#app");
