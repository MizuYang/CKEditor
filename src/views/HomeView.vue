<template>
  <div class="text-center my-10">
    <!-- 不同的編輯器無法共存 -->
    <!-- <CKEditor /> -->

    <!-- <CKEditorClassic /> -->

    <CKEditorDocument />
  </div>
</template>

<script setup>
// import CKEditor from '@/components/CKEditor.vue'
// import CKEditorClassic from '@/components/進階-匯入更多文字功能模組/CKEditorClassic.vue'
import CKEditorDocument from '@/components/進階-匯入更多文字功能模組/CKEditorDocument.vue'
</script>

<style lang='scss' scope></style>
