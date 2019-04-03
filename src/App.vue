<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>
<style lang="stylus">
  body
    margin  0
    width 100%
    height 100%
    overflow-x hidden
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  height 100%

</style>

<script>

    export default {
        name: "App",
        data(){
            return {
            }
        },
        mounted(){

        },
        methods:{

        },
        components:{

        }
    }
</script>
