<template>
  <div class="modal-container" @click="onDismiss()">
    <div class="map modal-content big" @click.stop="() => {}">
      <PlayerMapNode name="Bed Room" :top="300" :left="20" :visible="hasVisited('MessyRoom')" />

      <PlayerMapLine :startTop="300" :startLeft="20" :endTop="300" :endLeft="220" :visible="hasVisited('MessyRoom')" />
      <PlayerMapNode name="Bus Ride" :top="300" :left="220" :visible="hasVisited('BusRide')" />

      <PlayerMapLine :startTop="300" :startLeft="220" :endTop="300" :endLeft="420" :visible="hasVisited('BusRide')" />
      <PlayerMapNode name="Camp Hub" :top="300" :left="420" :visible="hasVisited('CampHub')" />

      <PlayerMapLine :startTop="300" :startLeft="420" :endTop="200" :endLeft="620" :visible="hasVisited('CampHub')" />
      <PlayerMapNode name="Cabin" :top="200" :left="620" :visible="hasVisited('Cabin')" />

      <PlayerMapLine :startTop="300" :startLeft="420" :endTop="300" :endLeft="620" :visible="hasVisited('CampHub')" />
      <PlayerMapNode name="Trail" :top="300" :left="620" :visible="hasVisited('TrailGame')" />
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
    methods: {
      hasVisited(location) {
        return this.visited.indexOf(location) > -1;
      }
    },
    computed: {
      visited() {
        return globalStore.visited
      }
    }
  }
</script>

<style lang="scss" scoped>
  .map {
    position: relative;
  }
</style>
