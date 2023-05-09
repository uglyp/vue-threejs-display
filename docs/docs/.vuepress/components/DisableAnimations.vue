<template>
  <div class="check-box-s">
    <input type="checkbox" @change="change()" checked />
    {{ autoPlay ? "Play" : "Stop" }}
  </div>
  <vueThreejsDisplay
    filePath="/vue-threejs-display/models/collada/stormtrooper/stormtrooper.dae"
    :cameraPosition="{ x: 20, y: 0, z: -10 }"
    :autoPlay="autoPlay"
    :height="350"
    backgroundColor="#F2F2F2"
  />
</template>
<script setup >
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { ref } from "vue";
const autoPlay = ref(true);
function change() {
  if (autoPlay.value) {
    autoPlay.value = false;
  } else {
    autoPlay.value = true;
  }
}
</script>
<style>
.check-box-s {
  background-color: rgb(13, 6, 103);
  padding: 5px 4px;
  z-index: 100;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
}
</style>
