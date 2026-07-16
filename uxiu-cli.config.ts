import { defineBuild } from 'uxiu-cli'
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
export default defineBuild({
	entry: {
		'src/index': './src/'
	},
	tsdownOptions: {
		define: {
			'process.env.NODE_ENV': `'production'`
		},
		deps: {
			skipNodeModulesBundle: true
		}
	},
	event: {
		async 'hook:beforeBuild'(ctx) {
			await fs.promises.rm(path.join(ctx.pwd, './dist'), { recursive: true, force: true })
		},
		async 'hook:afterBuild'(ctx) {
			await fs.promises.cp(path.join(root, './public'), path.join(ctx.pwd, './dist/public'), {
				recursive: true
			})
			const { default: packageJson } = await import('./dist/package.json', { with: { type: 'json' } })
			packageJson.main = './src/index.js'
			packageJson.scripts.start = 'node ./src/index.js'
			await fs.promises.writeFile('./dist/package.json', JSON.stringify(packageJson, null, 2))
		}
	}
})
