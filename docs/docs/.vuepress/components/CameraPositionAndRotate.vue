<template>
  <vueThreejsDisplay
    filePath="/models/stl/colored.stl"
    :height="350"
    backgroundColor="#F2F2F2"
    @load="onLoad"
    :cameraPosition="position"
    :cameraRotation="rotation"
    v-if="!refresh"
  />
  <button style="margin: 5px 0" @click="replay">Replay</button>
</template>
<script setup >
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { ref, nextTick } from "vue";
const position = ref();
const rotation = ref();
const refresh = ref(false);
position.value = {
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
  position.value.z += 0.01;
}
function replay() {
  refresh.value = true;
  position.value = {
    x: -Math.PI / 2,
    y: 0,
    z: 0,
  };

  rotation.value = {
    x: -Math.PI / 2,
    y: 0,
    z: 0,
  };

  nextTick(() => {
    refresh.value = false;
  });
}
</script>
