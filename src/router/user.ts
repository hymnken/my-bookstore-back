import { Context } from 'koa'
import Router from 'koa-router'
import { success } from '../common/ResResult'
import { Userinfo, addUser, findAllUser } from '../dao/UserDaoDefine'
const router = new Router()

router.prefix('/usermodule')

router.get('/findUserinfo/:username/:password', async (ctx: Context) => {
  const { username, password } = ctx.params
})

router.get('/findAllUser', async (ctx: Context) => {
  const dbUserinfo = await findAllUser()
  console.log('dbUserinfo:', dbUserinfo)
  ctx.body = success(dbUserinfo)
})

router.post('/addUser', async (ctx) => {
  const userinfo: Userinfo = ctx.request.body
  const dbUserinfo = await addUser(userinfo)
  ctx.body = success(dbUserinfo)
})

module.exports = router
