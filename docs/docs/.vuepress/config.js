import process from 'node:process'
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'
import { head, navbar, sidebar } from './configs'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

const __dirname = getDirname(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
	base: '/',
	title:'vue-threejs-display',
	description:'基于 Vue + Three.js 的 3D展示组件',
  head,
  theme: defaultTheme({
    docsDir: 'docs',
		navbar: navbar,
		selectLanguageName: '简体中文',
		selectLanguageText: '选择语言',
		selectLanguageAriaLabel: '选择语言',
		sidebar: sidebar,
		lastUpdatedText: '上次更新',
		tip: '提示',
		warning: '注意',
		danger: '警告',
		// 404 page
		notFound: [
			'这里什么都没有',
			'我们怎么到这来了？',
			'这是一个 404 页面',
			'看起来我们进入了错误的链接',
		],
		backToHome: '返回首页',
		// a11y
		openInNewWindow: '在新窗口打开',
		toggleColorMode: '切换颜色模式',
		toggleSidebar: '切换侧边栏',
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),
  ]
})
