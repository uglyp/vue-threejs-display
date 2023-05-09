import { App } from 'vue'
import * as Three from 'three'
import vueThreejsDisplay from './loader/index.vue'

export { Three }

const install = (app: App) => {
  app.component(vueThreejsDisplay.name, vueThreejsDisplay)
}

export default { install, vueThreejsDisplay }

export { vueThreejsDisplay }
