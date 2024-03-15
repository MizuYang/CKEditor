<template>
  <div class="text-center my-10">
    <h3 class="text-20 mb-3">Js 版本</h3>
    <CKEditor />
  </div>
  <div class="text-center my-10">
    <h3 class="text-20 mb-3">Vue 版本</h3>
    <VueCKEditor />
  </div>
</template>

<script setup>
import VueCKEditor from '@/components/VueCKEditor.vue'
import CKEditor from '@/components/CKEditor.vue'
</script>

<style lang='scss' scope></style>
