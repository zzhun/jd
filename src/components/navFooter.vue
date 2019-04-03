<template>
    <div id="navFooter">
        <div><router-link to="/layout/index">首页</router-link> </div>
        <div><router-link to="/layout/types">分类</router-link> </div>
        <div><router-link to="/layout/shopCar">购物车</router-link> </div>
        <div><router-link to="/layout/my">我的</router-link> </div>
    </div>
</template>

<script>
    export default {
        name: "navFooter"
    }
</script>

<style scoped lang="stylus">
    #navFooter
        position fixed
        bottom 0
        left 0
        width 100%
        height 40px
        line-height 40px
        display flex
        box-shadow 1px -1px 3px #ccc
        border-top 1px solid #ccc
        background #fff
        div
            flex 1
            text-align center
        a
            font-weight bold
            text-decoration: none
            font-weight 400
            color #000
            font-size 12px
            &.router-link-exact-active
                color red
</style>