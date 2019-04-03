<template>
    <div>
        <zheader ></zheader>
        <div class="swiper-container indexSwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgList" :key="index" >
                    <img :src="item" width="100%" @click="onto"/>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <box-list></box-list>
        <shop-list></shop-list>
        <toast ref="toast"></toast>
        <alert ref="alert"></alert>
    </div>
</template>

<script>
    import zheader from '../../components/zheader'
    import boxList from '../../components/boxList'
    import shopList from '../../components/shopList'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import util from '../../util/util'

    export default {
        name: "index",
        data(){
            return {
                isTop:false,
                imgList:[
                    'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31162/17/1128/101786/5c46ead8E22ee9740/f66061da227c1965.jpg!cr_1125x549_0_72!q70.jpg.dpg',
                    "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/14959/11/11470/131228/5c8f7e2fE110e52b6/e9b96d6ad52c55a7.jpg!cr_1125x549_0_72!q70.jpg.dpg",
                    "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/27517/33/11334/87032/5c8f793bE78ae02fe/3a6883d671da5668.jpg!cr_1125x549_0_72!q70.jpg.dpg",
                ]
            }
        },
        computed:{
            top(){
                return this.$store.state.routerHigh
            }
        },
        beforeRouteLeave(to,from,next){
             util.setPageHigh(from,next)
        },
        // activated(){
        //     util.getPageHigh(this)
        // },
        mounted(){
            console.log(this.$zmsg)
            new Swiper('.indexSwiper', {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项

                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
            })
            util.basePath()

        },
        methods:{
            onto(){
                //this.$refs.toast.toast('jjjjj信息通过',3000)
                let zzz = 'ddd'
                console.log(this.$refs);
                this.$refs.alert.alert('信息通过',()=>{
                    console.log(zzz)
                })
            }
        },
        components: {
            boxList,
            shopList,
            zheader,
        }
    }
</script>

<style scoped lang="stylus">

    .swiper-container
        width 100%
        height 160px
</style>