import { createApp  } from 'vue';
import './style.css'
import './global.css';
import App from './App.vue';
import router from './routes';


// import store from './store/store';


// app.use(store)
const app = createApp(App)
app.use(router)
app.mount('#app')

