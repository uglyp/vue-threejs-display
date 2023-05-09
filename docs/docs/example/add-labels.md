# 添加文字标注

:::tip
支持图片、文字标注
:::
<AddLabel/> 

```vue
<template>
  <div class="top">
    <button @click="changeLabelPosition">Change label position</button>
    <button @click="changeTextLabelName">Change text label name</button>
    <button @click="resetLabels">Reset labels</button>
  </div>
  <div class="content">
    <vueThreejsDisplay
      filePath="/vue-threejs-display/models/glb/naixiaodong.glb"
      backgroundColor="#cccccc"
      :labels="labels"
      :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
      outputEncoding="sRGB"
      :height="400"
    />
  </div>
</template>
<script setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
import { ref } from "vue";
const labels = ref();
labels.value = [
  // image label
  {
    image: "/vue-threejs-display//assets/label1.png",
    position: { x: -0.5, y: 1, z: 0 },
    scale: { x: 0.6, y: 0.6, z: 0.6 },
    sid: 1, // custom id
  },
  {
    image: "/vue-threejs-display//assets/label2.png",
    position: { x: 0.5, y: 1.2, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    sid: 2,
  },
  // text label
  {
    text: "I'm Text Label",
    position: { x: 0, y: 2, z: 0 },
    scale: { x: 1.5, y: 0.8, z: 0 },
    textStyle: {
      fontFamily: "Arial",
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1,
      color: "#ffffff",
      borderWidth: 8,
      borderRadius: 0,
      borderColor: "#000000",
      backgroundColor: "rgba(0,0,0,1)",
    },
    sid: 3, // 自定义标识，可有可无
  },
];

function changeLabelPosition() {
  labels.value[0].position = { x: -0.2, y: 2, z: 1 }
}

function changeTextLabelName() {
  labels.value[2].text = "My name is change"
}

function resetLabels() {
  labels.value[0].position = { x: -0.5, y: 1, z: 0 }
  labels.value[2].text = "I'm Text Label"
}
</script>
<style>
.top{
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
}
.top button{
  margin: 0 2px;
  background: rgb(43, 109, 202);
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 4px 6px;
}
.top button:hover{
  background: rgb(27, 62, 186);
}
.content{
  width: 100%;
  height: 500px;
}
</style>
</script>
```