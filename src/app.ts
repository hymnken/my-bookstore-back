import Koa from 'koa'
import allRouterLoader from './common/AllRouterLoader'
import dbconfig from './config/dbconfig'

console.log(dbconfig.getConf('port'));




const app = new Koa()
allRouterLoader.init(app)

// localhost:3001/kenn/usermodule/findUserinfo/wangwu
// router.get('/test', async (ctx: Koa.Context, next: Koa.Next) => {
// ctx.body='one one'
// })
