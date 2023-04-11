import Koa from 'koa'
import body from 'koa-body'
import json from 'koa-json'
import Router from 'koa-router'
import userRouter from './router/user'
const app = new Koa()
const router = new Router()
router.prefix('/kenn')
app.use(json())
app.use(body())
// localhost:3001/kenn/usermodule/findUserinfo/wangwu
// router.get('/test', async (ctx: Koa.Context, next: Koa.Next) => {
// ctx.body='one one'
// })

router.use(userRouter.routes(),userRouter.allowedMethods())

app.use(router.routes())
app.listen(3001)
console.log('jiantingzhogn....');
