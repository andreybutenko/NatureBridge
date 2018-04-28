<template>
  <div class="editor-toolbar">
    <div class="btns">
      <div class="btn" @click="showImport()">
        Import
      </div>
      <div class="btn" @click="showSource()">
        Export
      </div>
    </div>
    <div class="btn-primary" @click="togglePreview()">
      <span v-if="!previewEnabled">Preview</span>
      <span v-else>Stop Preview</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Toolbar',
    props: ['showImport', 'showSource', 'previewEnabled', 'togglePreview']
  }
</script>

<style lang="scss" scoped>
  .editor-toolbar {
    background-color: #81ecec;
    display: flex;
    flex-direction: row;

    .btns {
      display: flex;
      flex-direction: row;
      flex: 1;
      padding: 16px;

      .btn {
        cursor: pointer;
        padding: 8px 16px;
        border-radius: 8px;

        &:hover {
          background-color: #00cec9;
        }
      }
    }

    .btn-primary {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 32px;
      background-color: #0984e3;
      color: white;
    }
  }
</style>
