import Koa,{Context} from 'koa'
import {success,fail} from './ResResult'
const globalEception = async (ctx: Context, next: Koa.Next) => {
    try {
    await next()
    } catch (err:any) {
        const errrslt = err as { message: string }
        ctx.body = fail(`服务器错误:${errrslt.message}`)
    }
}
export default globalEception