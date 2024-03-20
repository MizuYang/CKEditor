<template>
  <div id="ckeditor">
    <CKEditor
      ref="editorRef"
      v-model="editorDesign"
      :editor="Editor"
      :config="editorConfig"
      :disabled="props.disabled"
      @ready="onEditorReady"
      @focus="onEditorFocus"
      @blur="onEditorBlur"
      @input="onEditorInput"
      @destroy="onEditorDestroy"
    ></CKEditor>
  </div>
</template>

<script setup>
import CKEditor5Vue from '@ckeditor/ckeditor5-vue'
import { ref, reactive } from 'vue'
import { Editor } from '@gwq/ckeditor5-custom-build'
import '@gwq/ckeditor5-custom-build/build/translations/zh.js' // 引入中文包
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false // 是否禁用
  }
})
const CKEditor = CKEditor5Vue.component
const editorDesign = ref('') // 默认内容

const editorConfig = reactive({
  language: 'zh',
  fontSize: {
    options: [
      // 9,
      // 11,
      // 13,
      // 'default',
      // 17,
      // 19,
      // 21,
      'tiny', // 特小
      'small', // 小
      'big', // 大
      'huge'// 特大
    ]
  },
  // fontSize: {
  //   options: [
  //   ]
  // },
  // toolbar: {
  //   items: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'outdent', 'indent', '|', 'imageUpload', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo','|','fontColor','fontFamily','fontSize','fontBackgroundColor',],
  // },
  // 自定义设置字体
  //  fontFamily: {
  //   options: [
  //     'default',
  //     '宋体',
  //     '新宋体',
  //     '仿宋',
  //     '楷体',
  //     '微软雅黑',
  //     '黑体',
  //     '华文仿宋',
  //     '华文楷体',
  //     '华文隶书',
  //     '华文宋体',
  //     '华文细黑',
  //     '华文新魏',
  //     '华文行楷',
  //     '华文中宋',
  //     '隶书',
  //     '苹方 常规',
  //     '幼圆',
  //   ],
  // },
  image: {
    toolbar: ['imageTextAlternative', 'toggleImageCaption', 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side']
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
  },
  ckfinder: {
    uploadUrl: '/uploadfile', // 上传图片接口
    options: {
      resourceType: 'Images'
    }
  }
})

const emit = defineEmits(['ready', 'focus', 'blur', 'input', 'destroy'])

const editorRef = ref(null)
const onEditorReady = () => {
  console.log('准备好了')
  emit('ready')
}

const onEditorFocus = () => {
  console.log('聚焦')
  emit('focus')
}
const onEditorBlur = () => {
  console.log('失去焦点')
  emit('blur')
}

const onEditorInput = () => {
  console.log('正在录入')
  emit('input')
}

const onEditorDestroy = () => {
  console.log('销毁')
  emit('destroy')
}
</script>

<style>
.ck-editor__editable {
  min-height: 100px;
  max-height: 500px;
}
.ck-editor__editable_inline p {
 font-family: '宋体' !important;
}
</style>
