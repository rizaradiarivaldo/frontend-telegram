import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    // key: 'AIzaSyBkuk8CzMUCZealzaVW5uAAi6NGNAM78FU'
    key: 'AIzaSyBSraH5JA-j6lLMGSKkYtpBx0OwU9HoI2s'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
