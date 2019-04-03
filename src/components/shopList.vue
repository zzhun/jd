<template>
    <div>
        <ul>
            <shop-item v-for="item,index in shopList" :shopItem="item" :key="index"></shop-item>

        </ul>
        <mugen-scroll :handler="fetchData" :should-handle="!loading">
            <p v-if="loading" style="text-align: center">加载中。。。。</p>
            <p v-else style="text-align: center">暂无数据</p>
        </mugen-scroll>
    </div>
</template>

<script>
    import shopItem from './shopItem'
    import axios from 'axios'
    import MugenScroll from 'vue-mugen-scroll'
    import util from '../util/util'
    const basePath = util.basePath()
    export default {
        name: "shopList",
        data(){
            return {
                shopList:[],
                loading: false,
                pageNo:1
            }
        },
        mounted(){
            axios.get(basePath + '/data/shopList.json')
                .then(e=>{
                    this.shopList = e.data
                })
                .catch(e=>{
                    console.log(e)
                })
        },
        methods:{
            fetchData() {
                if(this.pageNo == 5){
                    this.loading = false
                    return
                }
                this.pageNo++
                this.loading = true
                axios.get(basePath + '/data/shopList.json?pageNo='+this.pageNo)
                    .then(e=>{
                        this.loading = false
                        this.shopList = this.shopList.concat(e.data)
                    })
                    .catch(e=>{
                        console.log(e)
                    })
                // ... the code you wanna run to fetch data

            }
        },
        components:{
            shopItem,
            MugenScroll
        }
    }
</script>

<style scoped lang="stylus">
    div
        margin-bottom 50px
    ul
        width 100%
        display flex
        flex-wrap wrap
        padding 0
        overflow hidden
        background rgb(240,242,245)
        padding-top 10px

</style>