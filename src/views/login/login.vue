<template>
    <div>
        <input v-model="userName" placeholder="请输入用户名"/>
        <input v-model="passWord" placeholder="请输入密码"/>
        <button @click="login">登录</button>
        <p>dddd</p>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "login",
        data(){
            return {
                userName:'',
                passWord:''
            }
        },
        methods:{
            login(){
                this.userName == ''?alert('请输入用户名'):''
                this.passWord == ''?alert('密码输入'):''
                axios.post('api/login',{name:this.userName,passWord:this.passWord})
                    .then(e=>{
                        if(e.data.success){
                            localStorage.setItem('ztoken','ddd')
                        }else{

                        }
                    }).catch(e=>{
                       console.log(e)
                })
            }
        },
    }
</script>

<style scoped>

</style>