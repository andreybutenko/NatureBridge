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
    name: 'Cabin',
    components: { Conversation },
    mounted() {
      globalStore.visitLocation('Cabin');
    },
    data() {
      return {
        conversationTree: {
          initials: [
            { from: 'label', text: 'You return to your cabin and see your friend rummaging through his backpack.' }
          ],
          decisions: [
            {
              label: 'What are you looking for?',
              initials: [
                { from: 'me', text: 'What are you looking for?' },
                { from: 'them', text: 'I\'m trying to find a pencil to draw in our journal.' },
                { from: 'me', text: 'Journal? How do I get one of those?' },
                { from: 'them', text: 'The Park Ranger will give you one if you ask. You\'re supposed to fill it with pictures and writings. A lot of it is along the Elwha River trail.' },
                { from: 'me', text: 'Good to know! See you!' }
              ]
            },
            {
              label: 'Do you have an extra water bottle?',
              initials: [
                { from: 'me', text: 'Do you have an extra water bottle?' },
                { from: 'them', text: 'No, sorry.' },
                { from: 'me', text: 'Okay. See you!' }
              ]
            },
            {
              label: 'Go back outside.',
              initials: [
                { from: 'label', text: 'You decide to leave him alone.' }
              ]
            }
          ],
          finals: []
        },
        continueText: 'Go back outside.',
        continueDest: 'CampHub'
      }
    }
  }
</script>

<style lang="scss">
