<template>
  <div>
    <div v-for="(item,index) in loaderList" :key="item.title">
      <h1>{{ item.title }}</h1>
			<button v-if="index === 0" @click="setMtlOrTextureImage">添加材质</button>
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
import { vueThreejsDisplay } from "vue-threejs-display/vue3"
import { ref } from "vue"
const object = ref(null)
const loaderList = ref()
loaderList.value = [
  {
    title: "OBJ+MTL",
    filePath: "/models/obj/male02/male02.obj",
    mtlPath: "",
    showFps: false,
    height: 600,
    backgroundColor: "#f2f2f2",
    outputEncoding: "sRGB",
    cameraPosition: { x: -100, y: 100, z: 200 },
  },
  {
    title: "FBX+JPG",
    filePath: "/models/fbx/stanford-bunny.fbx",
    textureImage: "/models/fbx/brick.png",
    height: 400,
  },
]
function setMtlOrTextureImage(){
	loaderList.value[0].mtlPath = "/models/obj/male02/male02.mtl"
}
function onMouseMove(event, intersected) {
  if (object.value) {
    (object.value).material.color.setStyle("#fff")
  }

  if (intersected) {
    object.value = intersected.object;
    (object.value).material.color.setStyle("#13ce66")
  }
}
</script>
<style>
h1 {
  font-size: 20px;
}
</style>
