<template>
  <div class="minigame-viewer">
    <BeetleImpactSidebar
      v-if="enabled('BeetleImpact')" />
  </div>
</template>

<script>
  import BeetleImpactSidebar from './BeetleImpactSidebar';

  export default {
    name: 'MinigameViewerSidebar',
    props: ['name'],
    components: {
      BeetleImpactSidebar
    },
    methods: {
      enabled(name) {
        return this.name == name;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
