import { createApp } from "vue";
import { createPinia } from "pinia";
import Modal from "./components/Modal.vue";
import App from "./App.vue";
import "./style.css";

const pinia = createPinia();
const app = createApp(App);
app.component("Modal", Modal)
   .use(pinia)
   .mount("#app");
