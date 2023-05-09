<template>
  <vueThreejsDisplay
    filePath="/vue-threejs-display/models/ply/Lucy100k.ply"
    @mousemove="onMouseMove"
    :cameraPosition="{ x: 0, y: 0, z: -2500 }"
    :height="350"
    backgroundColor="#F2F2F2"
  />
</template>
<script setup >
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { ref } from "vue";
const object = ref(null);
function onMouseMove(event, intersected) {
  if (object.value) {
    object.value.material.color.setStyle("#fff");
  }
  if (intersected) {
    object.value = intersected.object;
    object.value.material.color.setStyle("#13ce66");
  }
}
</script>
