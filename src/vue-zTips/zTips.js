import toast from './toast'
import alert from './alert'
export default {
    install(Vue,opt){
        Vue.component(toast.name, toast) // toast.name 组件的name属性
        Vue.component(alert.name, alert) // alert.name 组件的name属性
    }
}