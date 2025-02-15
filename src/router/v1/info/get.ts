import { sleep, createCheck } from 'uxiu'
import Router from 'koa-router'
const router = new Router()
export default router

router.get('/', async (ctx) => {
	ctx.body = {
		code: 0,
		msg: '获取成功',
		data: {
			message: 'Hello World !'
		}

	}
})

