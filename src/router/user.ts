import { Context } from 'koa'
import Router from 'koa-router'

const router = new Router()

router.prefix('/usermodule')

router.get('/findUserinfo/:username', async (ctx: Context) => {
  const { username } = ctx.params
  ctx.body = `welcome! ${username}`
})
router.post('/addUser', async (ctx) => {
  const user = ctx.request.body
  ctx.body = `welcome!!! ${user.username}`
})

export default router
