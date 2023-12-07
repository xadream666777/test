<script setup>
import { ref } from 'vue'
import ChangeSelect from './ChangeSelect.vue'
import { Plus } from '@element-plus/icons-vue'
// 引入富文本编辑器
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { artPublishService } from '@/api/article.js'
const visibleDrawer = ref(false) //控制抽屉显示隐藏
const defaultForm = ref({
  //默认数据
  title: '',
  cate_id: '',
  cover_img: '',
  content: '',
  state: ''
})

const formModel = ref({ ...defaultForm })
const imgUrl = ref('') //图片
const onUploadFile = (uploadFile) => {
  imgUrl.value = URL.createObjectURL(uploadFile.raw) //预览图片
  formModel.value.cover_img = uploadFile.raw
}
const emit = defineEmits(['success'])
const onPublish = async (state) => {
  formModel.value.state = state
  console.log(formModel.value.id)
  const fd = new FormData()
  for (let key in formModel.value) {
    fd.append(key, formModel.value[key]) //formdata添加数据使用append
  }
  if (formModel.value.id) {
    //编辑
    console.log('编辑')
  }

  // 添加
  await artPublishService(fd)
  ElMessage.success('添加成功')
  visibleDrawer.value = false
  emit('success', 'add')
}
const open = (row) => {
  visibleDrawer.value = true
  console.log(row)
  if (row.id) {
    console.log('回显')
  } else {
    formModel.value = { ...defaultForm }
    console.log('添加')
  }
}

defineExpose({ open })
// :title="formModel.id ? '编辑文章' : '添加文章'"  ??此处有问题，原应写在el-form标签上，加上就报错
</script>
<!-- 抽屉 -->
<template>
  <el-drawer v-model="visibleDrawer" direction="rtl" size="50%">
    <!-- 发表文章表单 -->
    <el-form :model="formModel" ref="formRef" label-width="100px">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="formModel.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="cate_id">
        <!-- 引用下拉框组件 -->
        <ChangeSelect v-model="formModel.cate_id" width="100%"></ChangeSelect>
      </el-form-item>
      <el-form-item label="文章封面" prop="cover_img">
        <el-upload
          class="avatar-uploader"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="onUploadFile"
        >
          <img v-if="imgUrl" :src="imgUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <!-- 富文本内容 -->
        <div class="editor">
          <quill-editor
            theme="snow"
            v-model:content="formModel.content"
            contentType="html"
          >
          </quill-editor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onPublish('已发布')">发布</el-button>
        <el-button @click="onPublish('草稿')" type="info">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style lang="scss" scoped>
// 图片样式
.avatar-uploader {
  :deep() {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }
    .el-upload:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}
// 富文本编辑器样式
.editor {
  width: 100%;
  :deep(.ql-editor) {
    min-height: 200px;
  }
}
</style>