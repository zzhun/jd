<template>
    <li>
        <img v-lazy="shopItem.imgSrc" @click="toUrl"/>
        <p>{{shopItem.text}}</p>
        <span>￥{{shopItem.amount}}</span>
        <div @click="addCar(shopItem.id)">购买</div>
    </li>
</template>

<script>
    export default {
        name: "shopItem",
        props:{
            shopItem:{
                type:Object,
                required:true
            }
        },
        data(){
            return {

            }
        },
        methods:{
            toUrl(){
                this.$router.push({
                    name:'shopDetail',
                    params:{
                        id:1
                    }
                })
            },
            add(id){

            }
        },
    }
</script>

<style scoped lang="stylus">
    li
        list-style none
        width 49%
        background #fff
        margin-bottom 3px
        &:nth-child(n)
            margin-right 1%
        img
            width 100%
        p
            box-sizing border-box
            height 31px
            font-size  13px
            overflow  hidden
            text-overflow  ellipsis
            display  -webkit-box
            -webkit-line-clamp  2
            -webkit-box-orient  vertical
            word-break  break-word
            color  #232326
            margin-top  5px
            line-height  16px
            margin-bottom  3px
            padding  0 4px
        span
            color red
            line-height 40px
</style>