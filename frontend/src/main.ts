import { createApp } from "vue";
import { createPinia } from "pinia";  
import App from "./App.vue";
import router from "./router";
import * as Icons from "@ant-design/icons-vue";

const app = createApp(App);


for (const [key, component] of Object.entries(Icons)) {
  app.component(key, component);
}


app.use(createPinia());  
app.use(router);

app.mount("#app");
