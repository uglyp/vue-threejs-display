import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbar: NavbarConfig = [
  {
		text: '快速上手',
		link: '/guide/getting-started/',
  },
	{
		text: 'demo',
		link: '/example/load-a-model/',
	}
]
