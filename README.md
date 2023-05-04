# lc-vue-grid-layout-wrapper

简单的grid布局组件

## 安装

```
npm i lc-vue-grid-layout-wrapper
```

## 依赖

- vue@3.x

## Demo

[demo](https://unpkg.com/lc-vue-grid-layout-wrapper/docs/.vitepress/dist/index.html) 

## 基本使用

```vue
<template>
  <el-form ref='formRef' :model='form' :rules='rules' label-position='top'>
    <GridLayoutWrapper :col='2'>
      <el-form-item label='测试1' prop='value1'>
          <el-input v-model='form.value1'/>
        </el-form-item>
        <el-form-item label='测试2' prop='value2'>
          <el-input v-model='form.value2'/>
        </el-form-item>
        <el-form-item label='测试3' prop='value3'>
          <el-input v-model='form.value3'/>
        </el-form-item>
    </GridLayoutWrapper>
    <el-form-item label='测试3'>
      <el-button @click='onSubmit'>确认</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
  import { GridLayoutWrapper } from 'lc-vue-grid-layout-wrapper';
  import { reactive, ref } from 'vue';

  const form = reactive({
    value1: '',
    value2: '', 
    value3: ''
  })

  const rules = reactive({
    value1:[
      { required: true, message:'请输入value1' }
    ]
  })

  const formRef = ref();
  const onSubmit = async () => {
    try {
      await formRef.value.validate();
    } catch(e){
      console.log(e)
    }
  }
</script>
```

## Api

### FormGrid Props

| 属性名 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| col | grid布局列数 | number | 2 |
