<template>
  <vueThreejsDisplay
    filePath="/vue-threejs-display/models/gltfs/violet/scene.gltf"
    :cameraPosition="{ x: 0, y: 0, z: 0 }"
    :height="450"
    backgroundColor="#F2F2F2"
  />
</template>
<script setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
</script>
