<template>
  <div class="controls">
    <div class="buttons">
      <!-- 开启水平旋转 -->
      <button @click="setHorizontal()">
        Only enable horizontal
      </button>
      <!-- 开启垂直旋转 -->
      <button @click="setVertical()">
        Only enable vertical
      </button>
      <!-- 设置水平旋转最大/小角度 -->
      <button @click="setHorizontal('range')">
        set horizontal rotation value range
      </button>
      <!-- 设置垂直旋转最大/小角度 -->
      <button @click="setVertical('range')">
        set vertical rotation value range
      </button>
    </div>
    <vueThreejsDisplay
      v-if="!refresh"
      filePath="/models/gltfs/telannas/scene.gltf"
      :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
      :verticalCtrl="verticalCtrl"
      :horizontalCtrl="horizontalCtrl"
      :height="500"
    />
  </div>
</template>
<script  setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { nextTick, ref } from "vue";
const verticalCtrl = ref(false);
const horizontalCtrl = ref(false);
const refresh = ref(false);

function setVertical(type) {
  horizontalCtrl.value = false;
  if (type === "range") {
    // set vertical angle range
    verticalCtrl.value = { min: 0, max: 1 };
  } else {
    verticalCtrl.value = true;
    // horizontalCtrl.value = { min: 0, max: Math.PI };
  }
  refresh3d();
}

function setHorizontal(type) {
  verticalCtrl.value = false;
  if (type === "range") {
    // set horizontal angle range
    horizontalCtrl.value = { min: 1, max: 2 };
  } else {
    horizontalCtrl.value = true;
    console.log(horizontalCtrl.value);
    // verticalCtrl.value = { min: -Math.PI, max: Math.PI };
  }
  refresh3d();
}

function refresh3d() {
  refresh.value = true;
  nextTick(() => {
    refresh.value = false;
  });
}
</script>
<style scoped>
.controls {
  height: 600px;
}
.buttons {
  padding: 10px;
  text-align: center;
}
button {
  margin: 0 5px;
  background-color: rgb(12, 54, 240);
  outline: none;
  border: none;
  color: white;
  padding: 5px 8px;
  border-radius: 4px;
}
button:hover {
  background-color: #ccc;
  color: rgb(12, 54, 240);
}
</style>
