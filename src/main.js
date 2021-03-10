import Vue from 'vue'
import App from './App.vue'
import router from './router'
import YaModal from 'vue-ya-semantic-modal'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(YaModal)




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


