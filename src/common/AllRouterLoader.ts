import path from 'path'
import fs from 'fs'
import Koa, { Context } from 'koa'
import Router from 'koa-router'
import body from 'koa-body'
import json from 'koa-json'
import globalEception from './GlobalException'
const middleware1 = async (ctx: Context, next: Koa.Next) => {
  console.log('middleware1start')
  await next()
  console.log('middleware1end')
}

const middleware2 = async (ctx: Context, next: Koa.Next) => {
  console.log('middleware2start')
  await next()
  console.log('middleware2end')
}

// 自动加载路由

class AllRouterLoader {
  app!: Koa
  static allRouterLoader: AllRouterLoader = new AllRouterLoader()

  init(app: Koa) {
    this.app = app
    // 初始方法
    const rootRouter = this.loadAllRouterWrapper()
    this.app.use(globalEception)
    this.app.use(rootRouter.routes())
    // 4 监听方法
    this.listen()
  }

  // 1.加载所有路由文件数组
  getFiles(dir: string) {
    // 获取所有文件
    return fs.readdirSync(dir)
  }
  // 2.加载所有路由文件绝对路径数组
  getAbsoluteFilePaths() {
    const dir = path.join(process.cwd(), '/src/router')
    const allFiles = this.getFiles(dir)
    const allFullFilePaths: string[] = []
    for (let file of allFiles) {
      const fullFilePath = dir + '\\' + allFiles
      allFullFilePaths.push(fullFilePath)
    }
    return allFullFilePaths
  }
  // 3.加载所有一级路由到二级路由中

  loadAllRouterWrapper() {
    // 3.0 获取一级路由
    const rootRouter = this.getRootRouter()
    // 3.1 调用获取绝对路径数组方法
    const allFullFilePaths = this.getAbsoluteFilePaths()
    // 3.2 调用加载所有一级路由到二级路由方法

    this.loadAllRouter(allFullFilePaths, rootRouter)
    return rootRouter
  }

  // 3.0 获取一级路由
  getRootRouter() {
    const rootRouter = new Router()
    rootRouter.prefix('/kenn')
    this.app.use(json())
    this.app.use(body())
    return rootRouter
  }

  // 自定义守卫
  isRouter(data: any): data is Router {
    return data instanceof Router
  }
  loadAllRouter(allFullFilePaths: string[], rootRouter: Router) {
    for (let fullFilePath of allFullFilePaths) {
      const module = require(fullFilePath)
      // 二级路由加到一级路由
      if (this.isRouter(module)) {
        rootRouter.use(module.routes(), module.allowedMethods())
      }
    }
  }

  listen() {
    this.app.listen(3001)
    console.log('zaijianting3001')
  }
}
export default AllRouterLoader.allRouterLoader
