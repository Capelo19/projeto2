import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import  firebase  from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD77Yh2jURvUc0-ZZSOI9UucGmQ5Di-7og",
  authDomain: "restaurante-d15dd.firebaseapp.com",
  databaseURL: "https://restaurante-d15dd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "restaurante-d15dd",
  storageBucket: "restaurante-d15dd.appspot.com",
  messagingSenderId: "1082156022291",
  appId: "1:1082156022291:web:0a2c609829aed5e9c89de6"
};
   firebase.initializeApp(firebaseConfig);
createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')
