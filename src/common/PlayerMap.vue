<template>
  <div class="modal-container" @click="onDismiss()">
    <div class="map modal-content big" @click.stop="() => {}">
      <PlayerMapNode name="Bed Room" :top="300" :left="20" :visible="true" />
      <PlayerMapLine :startTop="300" :startLeft="20" :endTop="150" :endLeft="200" :visible="true" />
      <PlayerMapNode name="Bus Ride" :top="150" :left="200" :visible="true" />
      <PlayerMapLine :startTop="150" :startLeft="200" :endTop="300" :endLeft="400" :visible="true" />
      <PlayerMapNode name="Camp Hub" :top="300" :left="400" :visible="true" />
      <PlayerMapLine :startTop="300" :startLeft="400" :endTop="250" :endLeft="500" :visible="true" />
      <PlayerMapLine :startTop="300" :startLeft="400" :endTop="350" :endLeft="500" :visible="true" />
      <PlayerMapLine :startTop="300" :startLeft="400" :endTop="450" :endLeft="500" :visible="true" />
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import PlayerMapNode from './PlayerMapNode';
  import PlayerMapLine from './PlayerMapLine';

  export default {
    name: 'PlayerMap',
    props: ['onDismiss'],
    components: { PlayerMapNode, PlayerMapLine },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
  .map {
    position: relative;
  }
</style>
