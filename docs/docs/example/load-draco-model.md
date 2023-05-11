# 加载Draco压缩模型

:::tip
使用此功能需要下载[draco解码器](https://github.com/king2088/vue-threejs-display/vue3/blob/master/public/assets/draco.7z)，并解压放到本地项目assets目录中，draco路径应为：“assets/draco/gltf/”
:::
<LoaderDracoModel/>

```vue
<template>
  <vueThreejsDisplay
    filePath="/models/gltf/LittlestTokyo.glb"
    :cameraPosition="{ x: 10, y: 700, z: 1000 }"
    :enableDraco="true"
    outputEncoding="sRGB"
    :height="350"
    backgroundColor="#F2F2F2"
    dracoDir="/vue-threejs-display//assets/draco/gltf/"
		 @process="onProcess"
  />
	<div class="process">
	      current model: {{ currentModelIndex }}, loadding: {{ process + "%" }}
	    </div>
</template>
<script setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { ref } from "vue";
const currentModelIndex = ref();
const process = ref(0);
function onProcess(event, index) {
	console.log(event,index,'====')
	process.value = Math.floor((event.loaded / event.total) * 100);
	if (index != 0) {
		currentModelIndex.value = index;
	}
}
</script>

```
