<template>
  <div class="layered-image-chat" :style="{ top: y, left: x }"  :class="{ far: far }">
    <slot></slot>
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
    background-color: white;
    padding: 6px 12px;
    border: 2px dotted black;
    border-radius: 5px;

    &:after {
    	content: '';
    	position: absolute;
    	left: 0;
    	width: 0;
    	height: 0;
    	border: 25px solid transparent;
    	border-right-color: white;
    	border-left: 0;
    	border-bottom: 0;
      bottom: 0;
    	margin-left: -25px;
    }
  }
</style>
