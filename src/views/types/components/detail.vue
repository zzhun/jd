<template>
    <div>{{leftId + father}}</div>
</template>

<script>
    import Bus from '../../../util/bus'
    export default {
        name: "detail",
        data(){
            return {
                leftId:'',
                father:''
            }
        },
        mounted(){
            var that = this
            Bus.$on('rightDetail',data=>{
                that.leftId = data
            })
        },
        methods:{
            change(m){
                this.father = m
            },
        },
    }

</script>

<style scoped>
</style>