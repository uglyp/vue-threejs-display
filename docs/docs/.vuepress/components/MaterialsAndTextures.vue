<template>
  <div>
    <div v-for="item in loaderList" :key="item.title">
      <h1>{{ item.title }}</h1>
      <vueThreejsDisplay
        :height="item.height"
        :showFps="item.showFps"
        :filePath="item.filePath"
        :mtlPath="item.mtlPath"
        :textureImage="item.textureImage"
        :backgroundColor="item.backgroundColor"
        :outputEncoding="item.outputEncoding"
        :cameraPosition="item.cameraPosition"
      />
    </div>
  </div>
</template>

<script setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { ref } from "vue";
const object = ref(null);
const loaderList = ref();
loaderList.value = [
  {
    title: "OBJ+MTL",
    filePath: "/vue-threejs-display/models/obj/male02.obj",
    mtlPath: "/vue-threejs-display/models/obj/male02.mtl",
    showFps: false,
    height: 400,
    backgroundColor: "#f2f2f2",
    outputEncoding: "sRGB",
    cameraPosition: { x: -100, y: 100, z: 200 },
  },
  {
    title: "FBX+JPG",
    filePath: "/vue-threejs-display/models/fbx/stanford-bunny.fbx",
    textureImage: "/vue-threejs-display/models/fbx/brick.png",
    height: 400,
  },
];
function onMouseMove(event, intersected) {
  // console.log('event', event);
  if (object.value) {
    (object.value).material.color.setStyle("#fff");
  }

  if (intersected) {
    object.value = intersected.object;
    (object.value).material.color.setStyle("#13ce66");
  }
}
</script>
<style>
h1 {
  font-size: 20px;
}
</style>
