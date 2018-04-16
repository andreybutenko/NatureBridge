<template>
  <div class="editor-toolbar">
    <div class="btns">
      <div class="btn" @click="clickNavigation('inventory')">
        Import
      </div>
      <div class="btn" @click="showSource()">
        Export
      </div>
      <div class="btn" @click="clickNavigation('scrapbook')">
        Settings
      </div>
    </div>
    <div class="btn-primary" @click="clickNavigation('scrapbook')">
      <span>Preview</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Toolbar',
    props: ['showSource']
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
