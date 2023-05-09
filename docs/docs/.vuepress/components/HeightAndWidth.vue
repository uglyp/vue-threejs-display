<template>
  <vueThreejsDisplay
    filePath="/vue-threejs-display/models/glb/mclaren_elva.glb"
    backgroundColor="rgb(216,217,219)"
    :height="600"
    :width="600"
    outputEncoding="sRGB"
    style="margin: 0 auto"
  />
</template>
<script  setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
</script>
