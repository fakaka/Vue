import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'
import VueResource from 'vue-resource'

// 
// import VueWebsocket from "vue-websocket";

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(VueResource)
// Vue.use(VueWebsocket, "ws://localhost:8080/endpointHairpin", { reconnection: false })
Vue.use(ElementUI)

new Vue({
    el: '#app',
    router,
    // store,
    template: '<App/>',
    components: { App }
})
