<template>
    <ul>
        <li v-for="boxItem in boxList">
            <router-link to="">
                <img :src="boxItem.imgSrc"/>
                <p>{{boxItem.text}}</p>
            </router-link>
        </li>
    </ul>
</template>

<script>
    import axios from 'axios'
    import util from '../util/util'
    const basePath = util.basePath()
    export default {
        name: "boxList",
        data(){
            return {
                boxList:[]
            }
        },
        mounted(){
            var that = this
            axios.get(basePath + '/data/boxList.json')
                .then(e=>{
                    that.boxList = e.data
                }).catch(e=>{
                    console.log(e)
            })
        },
        methods:{

        },
    }
</script>

<style scoped lang="stylus">
    ul
        padding 0
        width 100%
        display flex
        flex-wrap: wrap
        li
            list-style none
            width 20%
            text-align center
            font-size 12px
            a
                text-decoration: none
            img
                width 50%
                display block
                margin 0 auto



</style>