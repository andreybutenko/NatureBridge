<template>
  <div class="container narrow">
    <div>
      <p>Welcome to the campground!</p>

      <p>...</p>

      <router-link to="TrailGame">Go for a hike</router-link>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';

  export default {
    name: 'CampHub',
    mounted() {
      globalStore.visitLocation('CampHub');
    }
  }
</script>

<style lang="scss">
</style>
