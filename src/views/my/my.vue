<template>
    <div>我的</div>
</template>

<script>
    import util from '../../util/util'
    export default {
        name: "my",
        beforeRouteLeave(to,from,next){
            util.setPageHigh(from,next)
        },
        activated(){
            //util.getPageHigh(this)
        },
    }
</script>

<style scoped>

</style>