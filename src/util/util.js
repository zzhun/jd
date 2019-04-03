import axios from 'axios'

export default  {
    setPageHigh(from,next){
        from.meta.keepalive = from.meta.keepalive || false
        if (from.meta.keepalive) {
            from.meta.savedPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop     //得到当前高度
        }
        next()
    },
    getPageHigh(that){
        var url = window.location.pathname.replace('/','')
        this.overflowHide()
        let top = 0
        Object.keys(that.$store.getters.getRouterHigh, e => e == url).length != 0 ? top = that.$store.getters.getRouterHigh[url] : ''
        setTimeout(() => {
            // 一致，则滚动到对应的y值
            window.scrollTo(0, top)
        }, 0)
    },
    basePath(){
        let url = location.href
        let index = url.indexOf('/',8)
        let basePath = url.substring(0,index)
        return basePath
    },
    overflowHide(url){
        var body = document.body.style
        var types = document.querySelectorAll('.types')
        var height = window.screen.height
        if(url){
            body.height = height + 'px'
            types[0].style.height = height-10 +'px'
            body.overflow = 'hidden'
        }else{
            body.height = 'auto'
            body.overflow = 'auto'
        }
    },
    isLogin(next){
        let token = localStorage.getItem('ztoken') || ''
        if(token){
            axios({
                method:'post',
                url:'/api/user',
                data:{token}
            }).then((e)=>{
                if(e.data.success){
                    next()
                }else{
                    next({
                        path:'/login'
                    })
                }
            }).catch((e)=>{
                console.log(e)
                next({
                    path:'/login'
                })
            })
            // $.ajax({
            //     url:'/api/user',
            //     type:'post',
            //     data:{token},
            //     success(e){
            //         console.log(e)
            //     }
            // })
        }
    },
}