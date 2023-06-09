import type { HeadConfig } from '@vuepress/core'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `/vue-threejs-display/vue3-docs/16x16.ico`,
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `/vue-threejs-display/vue3-docs/32x32.ico`,
    },
  ],
  ['meta', { name: 'application-name', content: 'vue-threejs-display/vue3' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'vue-threejs-display/vue3' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
]
