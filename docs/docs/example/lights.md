# 灯光

:::tip
灯光分类为  
环境光(AmbientLight) | 方向光(DirectionalLight) | 点光(PointLight) | 半球光(HemisphereLight)
:::
<LightModel/>

```vue
<template>
  <vueThreejsDisplay
    filePath="/vue-threejs-display/models/gltfs/fishingTown/scene.gltf"
    :cameraPosition="{ x: 0, y: 10, z: 10 }"
    :height="650"
    backgroundColor="#F2F2F2"
  />
	<h1>添加灯光</h1>
	<vueThreejsDisplay
	    filePath="/vue-threejs-display/models/gltfs/fishingTown/scene.gltf"
	    :lights="lights"
	    :cameraPosition="{ x: 0, y: 10, z: 10 }"
	    :height="650"
	    backgroundColor="#F2F2F2"
	  />
</template>
<script setup>
import { ref } from "vue";
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
const lights = ref();
lights.value = [
  {
    type: "AmbientLight",
    color: "red",
  },
  {
    type: "DirectionalLight",
    position: { x: 100, y: 10, z: 100 },
    color: "green",
    intensity: 0.8,
  },
  {
    type: "PointLight",
    color: "#000000",
    position: { x: 200, y: -200, z: 100 },
    intensity: 1,
  },
  {
    type: "HemisphereLight",
    skyColor: "#00FF00",
    groundColor: "#000000",
    position: { x: 200, y: -200, z: 100 },
  },
]
</script>
```
