<template>
  <vueThreejsDisplay
    filePath="/vue-threejs-display/models/stl/colored.stl"
    :height="350"
    backgroundColor="#F2F2F2"
    @load="onLoad"
    :cameraPosition="positon"
    :cameraRotation="rotation"
    v-if="!refersh"
  />
  <button style="margin: 5px 0" @click="replay">Replay</button>
</template>
<script setup >
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { ref, nextTick } from "vue";
const positon = ref();
const rotation = ref();
const refersh = ref(false);
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
function replay() {
  refersh.value = true;
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

  nextTick(() => {
    refersh.value = false;
  });
}
</script>
