import { createApp } from 'uxiu'
import { bodyParser } from '@koa/bodyparser'
import cors from '@koa/cors'
import koaStatic from 'koa-static'
import Path from 'path/posix'

const root = process.cwd()
createApp({
	port: 3323,
	async mounted(ctx) {
		ctx.app.use(cors())
		ctx.app.use(bodyParser())
		ctx.app.use(koaStatic(Path.join(root, '/public')))
		const router = await import('@/router/index.js')
		ctx.app.use(router.default.routes())
		console.log('服务启动成功: http://localhost:3323')
	},
})


