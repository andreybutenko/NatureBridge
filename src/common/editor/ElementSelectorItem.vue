<template>
  <div class="element-selector-item" @click="() => onclick(data)">
    <div class="img-container">
      <img :src="'/NatureBridge/static/' + imageUrl" v-if="!!imageUrl"/>
    </div>
    <span>{{ name }}</span>
  </div>
</template>

<script>
  export default {
    name: 'ElementSelectorItem',
    props: ['name', 'imageUrl', 'onclick', 'data']
  }
</script>

<style lang="scss" scoped>
  $esi-height: 48px;

  .element-selector-item {
    height: $esi-height;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    .img-container {
      width: 72px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: $esi-height;
      }
    }
  }
</style>
