<script setup>
import { ref, watchEffect } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

// data
const editor = ref(ClassicEditor)
const editorData = ref('<p>Content of the editor.</p>')
const editorConfig = ref({
  // The configuration of the editor.
})

watchEffect(() => {
  console.log('內容改變', editorData.value)
})

</script>

<template>
<Ckeditor :editor="editor" v-model="editorData" :config="editorConfig" />

{{ editorData }}
</template>

<style lang='scss' scope></style>
