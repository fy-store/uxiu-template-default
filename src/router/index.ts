import Router from 'koa-router'
import info from './info/index.js'
const router = new Router()
export default router

router.use('/api', info.routes())
