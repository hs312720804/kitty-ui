<template>
  <div>
    启动测试
    <k-button type="default" :round="true" plain @click="submit">提交</k-button>
  </div>
</template>

<script lang="ts" setup>
  function submit () {
    alert('提交成功')
  }
// import Button from 'kitty-ui-hs';
</script>