<template>
  <div class="element-editor">
    <ElementEditorItem
      v-for="(key, index) in keys"
      :setElementProperty="setElementProperty"
      :property="key"
      :value="element[key]"
      :key="index" />
  </div>
</template>

<script>
  import ElementEditorItem from './ElementEditorItem';
  export default {
    name: 'ElementEditor',
    props: ['setElementProperty', 'element', 'index'],
    components: {
      ElementEditorItem
    },
    computed: {
      keys() {
        return Object.keys(this.element || {});
      }
    }
  }
</script>

<style lang="scss" scoped>
  .element-editor {
    max-width: 300px;
    background-color: #dfe6e9;
    overflow-y: scroll;
  }
</style>
