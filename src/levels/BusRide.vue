<template>
  <div class="container narrow">
    <div>
      <p>On the bus, you meet a kid who's nervous about going to camp!</p>

      <p>...</p>

      <router-link to="CampHub">You're here!</router-link>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';

  export default {
    name: 'BusRide',
    mounted() {
      globalStore.visitLocation('BusRide');
    }
  }
</script>

<style lang="scss">
</style>
