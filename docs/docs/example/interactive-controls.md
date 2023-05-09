# 交互控制

:::tip
主要用于控制鼠标的左右键拖动、滚轮
:::
<InteractiveControls/>

```vue
<template>
  <div class="controls">
    <div class="buttons">
      <!-- 禁止右键拖动 -->
      <button @click="enablePan = !enablePan">
        {{ enablePan ? "disable" : "enable" }} translation
      </button>
      <!-- 禁止缩放 -->
      <button @click="enableZoom = !enableZoom">
        {{ enableZoom ? "disable" : "enable" }} zoom
      </button>
      <!-- 禁止旋转 -->
      <button @click="enableRotate = !enableRotate">
        {{ enableRotate ? "disable" : "enable" }} rotation
      </button>
    </div>
    <vueThreejsDisplay
      :filePath="'/models/collada/elf/elf.dae'"
      :controlsOptions="{
        enablePan,
        enableZoom,
        enableRotate,
      }"
      :cameraPosition="{ x: 0, y: -10, z: 13 }"
      :height="350"
      backgroundColor="#F2F2F2"
    />
  </div>
</template>
<script setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { ref } from "vue";
const enablePan = ref(true);
const enableZoom = ref(true);
const enableRotate = ref(true);
</script>
<style scoped>
.controls {
  height: 600px;
}
.buttons {
  padding: 10px;
  text-align: center;
}
button {
  margin: 0 5px;
  background-color: rgb(12, 54, 240);
  outline: none;
  border: none;
  color: white;
  padding: 5px 8px;
  border-radius: 4px;
}
button:hover {
  background-color: #ccc;
  color: rgb(12, 54, 240);
}
</style>
```