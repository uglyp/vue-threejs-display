<template>
  <vueThreejsDisplay
    :rotation="rotation"
    @load="onLoad()"
    filePath="/vue-threejs-display/models/collada/elf/elf.dae"
    :height="350"
    backgroundColor="#F2F2F2"
  />
</template>
<script setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { ref } from "vue";
const rotation = ref();
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
  rotation.value.z -= 0.01;
}
</script>
