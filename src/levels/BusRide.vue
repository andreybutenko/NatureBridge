<template>
  <div class="container">
    <div class="center-content">
      <Conversation :conversationTree="conversationTree" :continueText="continueText" :continueDest="continueDest" />
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import Conversation from '../common/Conversation';

  export default {
    name: 'BusRide',
    components: { Conversation },
    mounted() {
      globalStore.visitLocation('BusRide');
    },
    data() {
      return {
        conversationTree: {
          initials: [
            { from: 'label', text: 'You barely make it to the bus on time. As you climb up the stairs, you wonder if you remembered to bring everything on the NatureBridge packing list.' },
            { from: 'me', text: 'I think I forgot some stuff.' },
            { from: 'them', text: 'Don’t worry, they usually have extras.' }
          ],
          decisions: [
            {
              label: 'How do you know?',
              initials: [
                { from: 'me', text: 'How do you know?' },
                { from: 'them', text: 'I went last year and didn’t have a rain coat. Luckily they had extra ponchos. You’ll be fine.' }
              ]
            },
            {
              label: 'That\'s a relief.',
              initials: [
                { from: 'me', text: 'That\'s a relief. I even forgot a pen!' },
                { from: 'them', text: 'Hey, I brought an extra pencil! You can have it.' },
                { from: 'me', text: 'Thanks!' }
              ]
            },
          ],
          finals: [
            { from: 'them', text: 'Last time I was at this camp, I saw a bear!' },
            { from: 'me', text: 'What did you do?' },
            { from: 'them', text: 'I was with some friends and I guess we were so noisy he ran away from us! Now I always hike with a bear bell.' },
            { from: 'label', text: 'Time flew by... you\'re finally at camp!'}
          ]
        },
        continueText: 'Get off the bus.',
        continueDest: 'CampHub'
      }
    }
  }
</script>

<style lang="scss">
