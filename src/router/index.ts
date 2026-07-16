import Router from '@koa/router'
import { infoRouter } from './info/index.js'

export const router = new Router()
router.use('/api', infoRouter.routes())
