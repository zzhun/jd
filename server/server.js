const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const path = require('path');
const serve = require('koa-static');
const main = serve(path.join(__dirname));
const bodyParser = require('koa-bodyparser')

app.use(main);
app.use(bodyParser())
app.use(route.get('/',(ctx,next)=>{
    ctx.response.body = 'Hello World';
    next()
} ))
app.use(route.post('/user',(ctx)=>{
    console.log(ctx.request.body)
    if(ctx.request.body = 'ddd'){
        ctx.response.body = {
            success:true
        };
    }else{
        ctx.response.body = {
            success:false
        };
    }
} ))
app.use(route.post('/login',(ctx)=>{
    console.log(ctx.request.body)
    if(ctx.request.body.name == 'admin'){
        if(ctx.request.body.passWord == 'admin'){
            ctx.response.body = {
                success:true
            };
        }else{
            ctx.response.body = {
                success:false
            };
        }
    }else{
        ctx.response.body = {
            success:false
        };
    }
} ))
app.listen(5000,function () {
    console.log('服务开启:http://localhost:5000')
});
