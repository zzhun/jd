<template>
    <div :style="{display:display}" class="zAlert">
        <div>
            <div>{{text}}</div>
            <div>
                <button @click="close" :style="{display:displayBtn}">取消</button>
                <button @click="ok">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "alert",
        data(){
            return {
                text:'',
                display:'none',
                displayBtn:'none',
                cb:function () {
                }
            }
        },
        methods:{
            alert(text,cb){
                this.displayBtn = 'none'
                this.display = 'block'
                this.text = text
                cb ? this.cb = cb : ''
            },
            mask(text,cb){
                this.display = 'block'
                this.displayBtn = 'block'
                this.text = text
                cb ? this.cb = cb : ''
            },
            ok(){
                this.cb()
                this.display = 'none'
            },
            close(){
                this.display = 'none'
            }
        },
    }
</script>

<style scoped lang="stylus">
    .zAlert
        position fixed
        top 0
        left 0
        width 100%
        height 100%
        z-index 7
        background rgba(0,0,0,.5)
        color #666
        &>div
            position absolute
            width 80%
            border-radius 8px
            background #fff
            top 50%
            left 50%
            transform translate(-50%,-50%)
            &>div


            &>div:first-child
                width 90%
                padding  20px 0
                margin 0 auto
                line-height 30px
                text-align center
                display block
            &>div:last-child
                width 100%
                display flex
                height 30px
                padding 10px 0
                border-top 1px solid rgb(0,122,255)
                button
                    flex 1
                    margin 0 10%
                    text-align center
                    background #fff
                    color rgb(0,127,255)
                    border 1px solid rgb(0,122,255)
                    border-radius 5px
                    &:last-child
                        background rgb(0,122,255)
                        color #fff
</style>