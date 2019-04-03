<template>
    <div>
        <car-store></car-store>
    </div>
</template>

<script>
    import util from '../../util/util'
    import carStore from './components/carStore'
    export default {
        name: "shopCar",
        beforeRouteLeave(to,from,next){
            util.setPageHigh(from,next)
        },
        components:{
            carStore
        }
    }
</script>

<style scoped>

</style>