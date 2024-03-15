<template>
  <div id="editor"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

onMounted(() => {
  ClassicEditor
    .create(document.querySelector('#editor'))
    .catch(error => {
      console.error(error)
    })
})
</script>

<style lang='scss' scope></style>
