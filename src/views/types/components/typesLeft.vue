<template>
    <div class="swiper-container typesLeft">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" :class="{liActive:typesLeftIndex == index}" v-for="item,index in typesLeftArr" :key="item.leftId" @click="detail(index,item.leftId)">{{item.text}}</li>
        </ul>
    </div>
</template>

<script>


    import axios from 'axios'
    import util from '../../../util/util'
    import Bus from  '../../../util/bus'
    import 'swiper/dist/css/swiper.min.css'
    import swiper from 'swiper'
    export default {
        name: "typesLeft",
        data(){
            return {
                typesLeftIndex:0,
                typesLeftArr:[]
            }
        },
        props:{
            father:{
                type:String,    //类型
                required:true,   //为true必传
                default:'zz'    //默认值
            }
        },
        mounted(){
            let basePath = util.basePath()
            console.log(basePath)
            axios.get(basePath+'/data/typesLeft.json')
                .then(e=>{
                    this.typesLeftArr = e.data
                    Bus.$emit('rightDetail',this.typesLeftArr[0].leftId)
                })
                .catch((e)=>{
                    console.log(e)
                })
            new swiper('.typesLeft',{
                direction : 'vertical',
                freeMode : true,
                slidesPerView: 'auto',
                freeModeSticky : true,
                observer:true   //异步时候使用，当swiper自己或子元素修改时，自动初始化swiper
            })
            console.log(this.father)
        },
        methods:{
            detail(index,id){
                this.typesLeftIndex = index
                Bus.$emit('rightDetail',id)
            },
        },
        components:{

        }
    }
</script>

<style scoped lang="stylus">
    .typesLeft
        width 25%
        height 100%
        margin 0
        overflow hidden
        ul
            padding 0
            border 1px solid #CCC
            border-bottom none
            border-left none
            border-top none
            height auto
            background #f8f8f8
            .swiper-slide
                width 100%
                list-style none
                height 45px
                line-height 45px
                text-align center
                border-bottom 1px solid #ccc
                &:last-child
                    border none
            .liActive
                background #fff
                color  red
                a
                    display block
                    text-decoration none
                    color #666
                    font-size 14px

</style>