
import { createApp } from 'vue'
import App from './app.vue'
import Button from 'kitty-ui-hs'


const app = createApp(App)
console.log('button-->', Button)

app.use(Button)
app.mount('#app')