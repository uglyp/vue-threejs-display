<template>
  <vueThreejsDisplay
    :rotation="rotation"
    @load="onLoad()"
    filePath="/models/glb/naixiaodong.glb"
    :height="450"
		:scale="{ x: 0.8, y: 0.8, z: 0.8 }"
    backgroundColor="#F2F2F2"
  />
</template>
<script setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { ref } from "vue";
const rotation = ref();
rotation.value = {
  x: 0,
  y: 0,
  z: 0,
};
function onLoad() {
  rotate();
}
function rotate() {
  requestAnimationFrame(rotate);
  rotation.value.y -= 0.01;
}
</script>
