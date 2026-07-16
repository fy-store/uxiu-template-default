import Router from '@koa/router'

export const getRouter = new Router()
let i = 0
getRouter.get('/', async (ctx) => {
	i++
	ctx.body = {
		code: 0,
		msg: '获取成功',
		data: {
			message: `Hello World ! ${i}`
		}
	}
})
