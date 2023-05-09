<template>
  <vueThreejsDisplay
    filePath="/vue-threejs-display/models/obj/tree.obj"
    :height="350"
    backgroundColor="#F2F2F2"
    :showFps="true"
  />
</template>
<script  setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
</script>
