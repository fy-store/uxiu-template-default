import Router from '@koa/router'
import { getRouter } from './get.js'

export const infoRouter = new Router()
infoRouter.use('/info', getRouter.routes())
