<template>
   <div>
       <keep-alive><router-view/></keep-alive>
       <nav-footer></nav-footer>
   </div>
</template>

<script>
    import navFooter from '../../components/navFooter'
    export default {
        name: "layout",
        components:{
            navFooter
        }
    }
</script>

<style scoped>

</style>