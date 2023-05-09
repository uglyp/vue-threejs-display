<template>
  <vueThreejsDisplay
    filePath="/vue-threejs-display/models/collada/stormtrooper/stormtrooper.dae"
    :cameraPosition="{ x: 1, y: -5, z: -20 }"
    :height="350"
    backgroundColor="#F2F2F2"
  />
</template>
<script setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
</script>
