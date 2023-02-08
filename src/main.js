import { createApp } from 'vue'
import Modal from './components/Modal.vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.component('Modal', Modal)
const mountedApp = app.mount('#app')
