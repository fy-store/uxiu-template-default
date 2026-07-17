import { createApp, getLocalIP } from 'uxiu'
import { bodyParser } from '@koa/bodyparser'
import cors from '@koa/cors'
import { styleText } from 'node:util'
import { staticFile } from '@/middleware'

const primaryIP = getLocalIP.getPrimaryLocalIP()
createApp({
	port: 3323,
	async beforeMount(ctx) {
		ctx.app.use(cors()) // 若需要前端携带 cookie , 则 origin 不能配置为 *
		ctx.app.use(bodyParser())
		const { router } = await import('@/router/index.js')
		ctx.app.use(router.routes())
		ctx.app.use(staticFile({ publicPath: '/public' }))
	},
	async mounted(ctx) {
		console.log('')
		console.log(styleText('green', `服务启动成功 ➜  Local: http://127.0.0.1:${ctx.port}/`))
		console.log(styleText('green', `服务启动成功 ➜  Network: http://${primaryIP}:${ctx.port}/`))
		console.log('')
	}
})
