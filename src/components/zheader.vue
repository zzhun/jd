<template>
    <header :class="{red:isTop}" >
        <div>

        </div>
        <div>
            <input type="search" placeholder="请输入查找"/>
        </div>
        <div>
            <router-link to="login">登录</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "zheader",
        data(){
            return {
                isTop:false,
            }
        },
        mounted(){
            var that = this
            window.addEventListener('scroll',()=>{
                var offsetTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (offsetTop == 0 ) {
                    that.isTop = false
                }else{
                    that.isTop = true
                }
            })
        },
        methods:{

        }
    }
</script>

<style scoped lang="stylus">
    .red
        background red
    header
        width 100%
        height 40px
        top 0
        left 0
        position fixed
        line-height  40px
        display flex
        z-index 2
        div:nth-child(2)
            flex 1
            position relative
            & input
                width 100%
                border none
                border-radius 20px
                padding-left 70px
                height 30px
                box-sizing border-box
                outline:none
            &:before,&:after
                content ''
                width 25px
                height 25px
                position absolute
                overflow hidden
                top 13px
                display block
            &:before
                background url("../assets/imgs/jd-sprites.png") no-repeat left top
                background-size 200px
                left 15px
            &:after
                background url("../assets/imgs/jd-sprites.png") no-repeat
                width 22px
                background-position  -80px 0
                background-size 200px
                left 45px
        div:first-child
            width 50px
            height 100%
            background url("../assets/imgs/types.png") no-repeat center
            background-size 20px
        div:last-child
            width 50px
            height 100%
            text-align center
            a
                text-decoration none
                color #fff
                font-size 14px
</style>