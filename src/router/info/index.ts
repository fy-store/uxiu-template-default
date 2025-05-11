import Router from 'koa-router'
import get from './get.js'
const router = new Router()
export default router

router.use(get.routes())
