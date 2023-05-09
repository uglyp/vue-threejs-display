# 相机位置及旋转

<CameraPositionAndRotate/>

```vue
<template>
  <vueThreejsDisplay
    filePath="/models/stl/colored.stl"
    @load="onLoad"
    :cameraPosition="positon"
    :cameraRotation="rotation"
  />
</template>
<script setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { ref } from "vue";
const positon = ref();
const rotation = ref();
positon.value = {
  x: -Math.PI / 2,
  y: 0,
  z: 0,
};

rotation.value = {
  x: -Math.PI / 2,
  y: 0,
  z: 0,
};
function onLoad() {
  rotate();
}
function rotate() {
  requestAnimationFrame(rotate);
  rotation.value.z += 0.01;
  positon.value.z += 0.01;
}
</script>
```
