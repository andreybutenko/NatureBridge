<template>
  <div class="copy-from" v-if="index > 1">
    <span class="btn" @click="copyFromPrevious">Copy from Previous</span>
  </div>
</template>

<script>
  export default {
    name: 'CopyFrom',
    props: ['copyFromPrevious', 'index']
  }
</script>

<style lang="scss" scoped>
  .copy-from {
    width: 300px;
    background-color: #dfe6e9;

    .btn {
      cursor: pointer;
      color: blue;
      text-decoration: underline;
    }
  }
</style>
