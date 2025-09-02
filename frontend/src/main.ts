import { createApp } from "vue";
import { createPinia } from "pinia";  // ✅ import Pinia
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());  // ✅ register Pinia
app.use(router);

app.mount("#app");
