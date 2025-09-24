<script setup>
import {getCategory} from '@/apis/test'
getCategory().then(res=>{
  console.log(res)
})
</script>

<template>
  <el-button type="primary">click</el-button>
</template>

<style scoped></style>
