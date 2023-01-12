import { createStore } from "vuex";
import auth from '@/plugins/modules_vuex/auth'
const store = createStore({
  state() {
    return {
      
    };
  },
  mutations: {
    
  },
  modules:{
    auth
  } //возможно здесь должно быть {}
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin

});