import { Context } from 'koa'
import Router from 'koa-router'
import { success } from '../common/ResResult'
const router = new Router()

router.prefix('/usermodule')

router.get('/findUserinfo/:username', async (ctx: Context) => {
  const { username } = ctx.params
  console.log('执行路由请求findUserinfo开始...')
  // 人为制造一个异常
  // const userinfo = { username: 'wangwu' }
  // const result = (userinfo as any).phone
  // console.log(result())
  ctx.body = success(`welcome! ${username}`)
  console.log('执行路由请求findUserinfo结束...')
})
router.post('/addUser', async (ctx) => {
  const user = ctx.request.body
  ctx.body = `welcome!!! ${user.username}`
})

module.exports = router
