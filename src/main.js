import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Lazyload from "vue-lazyload"
import zTips from 'vue-ztips'

Vue.use(zTips)
Vue.use(Lazyload,{
// default false, recommand true
    fade: true,
    // it's better not set the speed now (because cellphones perfomance is better)
    // this option make images show slower
    // but if you open it, it does save network traffic data
    // speed: 20,
    // default 300, mostly, it's not necessary to set it
    time: 300,
    // unit:px, default 0, it allows the lazyload manager loads images(vertical) before an image appeard in screen
    preload: 500,
    error:'imgs/logo.png',
    loading:'imgs/jdLogo.png'
})

Vue.config.productionTip = false
console.log(Vue)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
