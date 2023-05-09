# 阻尼开启/关闭

<EnableDamping/>

```vue
<template>
  <vueThreejsDisplay
    :filePath="'/models/collada/elf/elf.dae'"
    :cameraPosition="{ x: 0, y: -10, z: 13 }"
    :enableDamping="true"
    :dampingFactor="0.05"
    :height="350"
    backgroundColor="#F2F2F2"
  />
</template>
<script setup>
import { vueThreejsDisplay } from "vue-threejs-display/vue3";
</script>
```
