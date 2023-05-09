# 快速上手

## Install

<CodeGroup>
<CodeGroupItem title="PNPM" active>

```bash
# 在你的项目中安装
pnpm install vue-threejs-display/vue3
```

  </CodeGroupItem>
<CodeGroupItem title="NPM">

```bash
# 在你的项目中安装
npm install vue-threejs-display/vue3
```

  </CodeGroupItem>

	
  <CodeGroupItem title="YARN">

```bash
# 在你的项目中安装
yarn add vue-threejs-display/vue3
```

  </CodeGroupItem>

</CodeGroup>

## Used

### 全局引入
全局使用，在入口文件中全局安装，代码如下：

```javascript
/* vue2 待开发 */
import vueThreejsDisplay from "vue-threejs-display/vue2";
Vue.use(vueThreejsDisplay)

/* vue3 */
import vueThreejsDisplay from "vue-threejs-display/vue3";
createApp(App).use(vueThreejsDisplay).mount('#app')
```
### 非全局引入

非全局使用，在Vue文件中使用如下代码:
```javascript
// 注意 vueThreejsDisplay 写在 {...} 内
import { vueThreejsDisplay } from "vue-threejs-display/vue2";

import { vueThreejsDisplay } from "vue-threejs-display/vue3";
```
在组件中使用标签`<vueThreejsDisplay></vueThreejsDisplay>`

### 组件标签应用
```vue
<vueThreejsDisplay
  :height="200"
  :showFps="true"
  :filePath="['/fbx/1.fbx', '/obj/2.obj', '/gltf/3.gltf']"
  :mtlPath="[null, '/obj/2.mtl', null]"
  :backgroundColor="0xff00ff"
></vueThreejsDisplay>
```
