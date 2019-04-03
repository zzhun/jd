<template>
    <div :style="{display:display}">
        <p>{{text}}</p>
    </div>
</template>

<script>
    export default {
        name: "toast",
        data(){
            return {
                text:'',
                display:'none'
            }
        },
        methods:{
            toast(text,time){
                this.text = text || '提示框文字请传入'
                this.display = 'block'
                setTimeout(()=>{
                    this.display = 'none'
                },time)
            }
        },
    }
</script>

<style scoped lang="stylus">
    div
        position fixed
        top 0
        left 0
        width 100%
        height 100%
        z-index 6
    p
        position absolute
        top 50%
        left 50%
        max-width 80%
        background rgba(0,0,0,.6)
        color #fff
        text-align center
        padding 0 10px
        line-height 30px
        font-size 14px
        border-radius 5px
        transform translate(-50%,-50%)
</style>