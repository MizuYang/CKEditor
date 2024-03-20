<template>
  <div class="text-center my-10">
    <!-- 不同的編輯器無法共存 -->
    <!-- <CKEditor /> -->

    <!-- <CKEditorClassic /> -->

    <!-- <CKEditorDocument /> -->

    <!-- <CKEditorDocument /> -->

    <CKEditorRich />
  </div>
</template>

<script setup>
// import CKEditor from '@/components/CKEditor.vue'

// 多種文字功能款
import CKEditorRich from '@/components/進階-匯入更多文字功能模組/CKEditorRich.vue'

// 官方經典款
// import CKEditorClassic from '@/components/進階-匯入更多文字功能模組/CKEditorClassic.vue'

// 官方文檔款
// import CKEditorDocument from '@/components/進階-匯入更多文字功能模組/CKEditorDocument.vue'

// 官方自訂版款
// import CKEditorDocument from '@/components/進階-匯入更多文字功能模組/CKEditorCustom.vue'

</script>

<style lang='scss' scope></style>
