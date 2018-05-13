<template>
  <div
    class="layered-image-label"
    :style="{ top: y, left: x }"
    :class="{ clickable: !!onclick, selected: selected }"
    @click.stop="click($event)">{{ text }}</div>
</template>

<script>
  export default {
    name: 'LayeredImageLabel',
    props: ['x', 'y', 'onclick', 'text', 'selected'],
    methods: {
      click(e) {
        if(!!this.onclick) {
          this.onclick(e);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layered-image-label {
    position: absolute;
    font-family: 'VT323';
    font-size: 32px;
    background-color: #cdcccc;
    border: 5px solid black;
    text-align: center;
    padding: 8px 16px;
    user-select: none;
    white-space: pre;

    &.clickable {
      cursor: pointer;
    }

    &.selected {
      border: 5px solid rgba(255, 0, 0, 0.4);
    }
  }
</style>
