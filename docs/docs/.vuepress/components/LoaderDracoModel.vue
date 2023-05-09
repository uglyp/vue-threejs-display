<template>
  <vueThreejsDisplay
    filePath="/vue-threejs-display/models/gltf/LittlestTokyo.glb"
    :cameraPosition="{ x: 10, y: 700, z: 1000 }"
    :enableDraco="true"
    outputEncoding="sRGB"
    :height="350"
    backgroundColor="#F2F2F2"
    dracoDir="/vue-threejs-display//assets/draco/gltf/"
		 @process="onProcess"
  />
	<div class="process">
	      current model: {{ currentModelIndex }}, loadding: {{ process + "%" }}
	    </div>
</template>
<script setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { ref } from "vue";
const currentModelIndex = ref();
const process = ref(0);
function onProcess(event, index) {
	console.log(event,index,'====')
	process.value = Math.floor((event.loaded / event.total) * 100);
	if (index != 0) {
		currentModelIndex.value = index;
	}
}
</script>
