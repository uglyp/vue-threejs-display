# 设置背景色、透明度

<BackgroundColorAndAlpha/>

```vue
<template>
  <div class="bg">
    <div class="content">
      <div class="text">This text is on the back of the model</div>
      <div class="model">
        <vueThreejsDisplay
          filePath="/models/gltfs/bmw/scene.gltf"
          :backgroundColor="'#000fff'"
          :backgroundAlpha="0.5"
          :height="600"
          :width="600"
          outputEncoding="sRGB"
        />
      </div>
    </div>
  </div>
</template>
<script setup >
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
</script>
<style>
.bg {
  height: 600px;
  margin: 0 auto;
}
.content {
  position: relative;
  height: 600px;
}
.text,
.model {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.text {
  z-index: 0;
  font-size: 60px;
  width: 100%;
  text-align: center;
}
.model {
  z-index: 100;
}
</style>

```
