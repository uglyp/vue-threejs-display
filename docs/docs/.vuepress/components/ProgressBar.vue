<template>
  <div class="content">
    <vueThreejsDisplay
      :filePath="filePath"
      :scale="{ x: 1, y: 1, z: 1 }"
      @process="onProcess"
			:lights="lights"
      :height="350"
    />
    <div class="process">
      current model: {{ currentModelIndex }}, loadding: {{ process + "%" }}
    </div>
  </div>
</template>
<script setup >
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { ref } from "vue";
const filePath = ref();
filePath.value = [
  // "/vue-threejs-display/models/gltfs/bmw_m6_gt3_shiny__evil/scene.gltf",
  "/vue-threejs-display/models/gltfs/774ce9b6d7ea4a72a0e2f57b1f0af839/scene.gltf",
];
const currentModelIndex = ref();
const process = ref(0);

const lights = ref();
lights.value = [
	{
		type: "AmbientLight",
		color: "white",
	},
	{
		type: "AmbientLight",
		position: { x: 100, y: 10, z: 100 },
		color: "white",
		intensity: 0.8,
	},
	{
		type: "AmbientLight",
		color: "white",
		position: { x: 200, y: -200, z: 100 },
		intensity: 1,
	},
	{
		type: "AmbientLight",
		skyColor: "white",
		groundColor: "#000000",
		position: { x: 200, y: -200, z: 100 },
	},
];
function onProcess(event, index) {
  process.value = Math.floor((event.loaded / event.total) * 100);
  if (index != 0) {
    currentModelIndex.value = index;
  }
}
</script>
<style>
.content {
  height: 100%;
}
.process {
  padding: 3px 8px;
  background-color: aquamarine;
  color: red;
}
</style>
