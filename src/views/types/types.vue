<template>
    <div>
        <zheader style="background: #ccc"></zheader>
        <div class="types">
            <types-left :father="'name'" @childToFather="childChange"></types-left>
            <detail ref="zdetail"></detail>
        </div>
    </div>
</template>

<script>
    import zheader from '../../components/zheader'
    import typesLeft from './components/typesLeft'
    import detail from './components/detail'
    import util from '../../util/util'
    export default {
        name: "types",
        beforeRouteLeave(to,from,next){
            util.setPageHigh(from,next)
        },
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            util.overflowHide()
            next()
        },
        activated(){
            console.log();
            util.overflowHide(this.$route.fullPath)
        },
        mounted(){
            this.$refs.zdetail.change('zzzz')
        },
        methods:{
            childChange(title){
                console.log(title)
            }
        },
        components:{
            typesLeft,
            detail,
            zheader
        }
    }
</script>

<style scoped lang="stylus">
    .types
        width 100%
        box-sizing border-box
        padding 40px 0
        display flex
        overflow hidden

</style>