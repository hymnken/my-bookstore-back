import Koa from 'koa'
import allRouterLoader from './common/AllRouterLoader'
const app = new Koa()
allRouterLoader.init(app)

// localhost:3001/kenn/usermodule/findUserinfo/wangwu
// router.get('/test', async (ctx: Koa.Context, next: Koa.Next) => {
// ctx.body='one one'
// })
