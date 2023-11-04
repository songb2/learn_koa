const koa = require('koa')
// const { default: koaBody } = require('koa-body')
// const Router = require('koa-router')
import router from './routes/routes'
// import koa from 'koa'
import {koaBody} from 'koa-body'
// import router from 'koa-router'
const cors = require('@koa/cors')
const json = require('koa-json')

import compose from 'koa-compose'


const app = new koa()
// const router = new Router()

// router.prefix('/api')

// router.get('/', ctx => {
//     debugger
//     ctx.body = 'Hello World this is root path!'
// })

// router.get('/api', ctx => {
//     // console.log(ctx)
//     // console.log(ctx.request)
//     const params = ctx.request.query
//     console.log(params)
//     console.log(params.name)    
//     ctx.body = {
//         name:params.name,
//         age:params.age
//     }
// })

// router.get('/async', async (ctx) => {
//     let result = await new Promise((resolve) => {
//         setTimeout(function(){
//             resolve("Hello world 2s later!")
//         }, 2000)
//     })
//     ctx.body = result
// })

// router.post('/post', async (ctx) => {
//     let {body} = ctx.request
//     ctx.body = {
//         ...body
//     }
//     ctx.body = {
//         ...body
//     }
// })

// const middleware = function async (ctx, next) {
//     console.log('this is a middleware!')
//     console.log(ctx.request.path)
//     next()
// }


const middleware = compose([
    koaBody(), 
    cors(), 
    json({pretty:false, param:'pretty'}),
    router()
])
app.use(middleware)
// app.use(middleware)
// app.use(koaBody())
// app.use(cors())
// app.use(json({pretty:false, param:'pretty'}))
// app.use(router.routes())
// .use(router.allowedMethods())

app.listen(3000)