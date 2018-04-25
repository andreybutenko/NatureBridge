<template>
  <div class="layer-editor">
    <span v-if="layer == 0">Currently editing <b>background layer</b></span>
    <span v-else>Currently editing stage #<b>{{ layer }}</b></span>
    <br/>
    <span class="btn" @click="changeLayer(-1)">Previous</span> |
    <span class="btn" @click="changeLayer(+1)">Next</span>
  </div>
</template>

<script>
  export default {
    name: 'LayerEditor',
    props: ['layer', 'changeLayer']
  }
</script>

<style lang="scss" scoped>
  .layer-editor {
    width: 300px;
    background-color: #dfe6e9;
    max-height: 300px;
    padding: 0.5em 8px;
    border-bottom: 1px solid black;

    .btn {
      cursor: pointer;
      color: blue;
      text-decoration: underline;
    }
  }
</style>
