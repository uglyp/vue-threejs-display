import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/guide/': [
    {
			text: 'guide',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
        '/guide/event.md',
        '/guide/api.md',
      ],
    },
  ],
	'/example/': [
		{
			text: 'example',
			children: [
				'/example/rotate-model.md',
				'/example/play-animations.md',
				'/example/load-json-model.md',
				'/example/load-draco-model.md',
				'/example/set-width-height.md',
				'/example/load-multiple-models.md',
				'/example/events.md',
				'/example/load-a-model.md',
				'/example/load-materials-and-textures.md',
				'/example/interactive-controls.md',
				'/example/enable-damping.md',
				'/example/lights.md',
				'/example/background-color-and-alpha.md',
				'/example/set-vertical-horizontal.md',
				'/example/camera-position-and-rotate.md',
				'/example/parallel-load-models.md',
				'/example/add-labels.md',
				'/example/progress-bar.md',
			],
		},
	],
}
