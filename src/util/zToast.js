export default {
    install(Vue,opt){
        Vue.prototype.$toast = tips => {
            if(document.getElementsByClassName('vue-toast').length){
                // 如果toast还在，则不再执行
                return;
            }
            let toastTpl = Vue.extend({
                template:`<div class="vue-toast">${tips}</div>`
            })

            let tpl = new toastTpl()
            console.log(tpl)
            document.body.appendChild(tpl)
            setTimeout(()=>{
                document.body.removeChild(tpl)
            },2500)
        }
    }
}
