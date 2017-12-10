<template>
  <div class="layered-image-chat" :style="{ top: y, left: x }"  :class="{ far: far, flip: flip, tall: tall }">
    <span><slot></slot></span>
  </div>
</template>

<script>
  export default {
    name: 'LayeredImageChat',
    props: ['x', 'y', 'far', 'flip', 'tall']
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
    height: 105px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > span {
      margin-bottom: 25px;
    }

    &.tall {
      background-image: url('../../assets/misc/speech-bubble-right-tall.png');
      height: 200px;
    }

    &.flip {
      background-image: url('../../assets/misc/speech-bubble-left-long.png');
    }

    &.flip.tall {
      background-image: url('../../assets/misc/speech-bubble-left-tall.png');
      height: 200px;
    }
  }
</style>
