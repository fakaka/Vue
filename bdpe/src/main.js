import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import VCharts from 'v-charts'
import './icons' // icon
import './registerServiceWorker'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VCharts)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
