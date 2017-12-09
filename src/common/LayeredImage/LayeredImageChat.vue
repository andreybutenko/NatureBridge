<template>
  <div class="layered-image-chat" :style="{ top: y, left: x }"  :class="{ far: far }">
    <span><slot></slot></span>
  </div>
</template>

<script>
  export default {
    name: 'LayeredImageChat',
    props: ['x', 'y', 'far']
  }
</script>

<style lang="scss" scoped>
  .layered-image-chat {
    position: absolute;
    font-family: 'VT323';
    font-size: 24px;
    padding: 6px 12px;
    cursor: default;
    background-image: url('../../assets/misc/speech-bubble-right-long.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 220px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > span {
      margin-bottom: 20px;
    }
  }
</style>
