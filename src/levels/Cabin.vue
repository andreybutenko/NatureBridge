<template>
  <div class="container">
    <div class="center-content">
      <Conversation :conversationTree="conversationTree" :continueText="continueText" :continueDest="continueDest" :characterSprite="require('../assets/mom-speech.png')" />
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
      this.addUnseenDecisions();
    },
    data() {
      console.log('data', globalStore.inventory)
      return {
        optionalDecisions: [
          {
            id: 3,
            label: 'Journal?',
            effect: () =>  {
              this.makeDecision(3, [
                { from: 'me', text: 'Journal? How do I get one of those?' },
                { from: 'them', text: 'The Park Ranger will give you one if you ask. You\'re supposed to fill it with pictures and writings. A lot of it is along the Elwha River trail.' },
                { from: 'me', text: 'Good to know!' }
              ]);
            }
          },
          {
            id: 4,
            label: 'Offer pencil',
            effect: () => {
              this.makeDecision(4, [
                { from: 'me', text: 'I have a pencil, but it\'s my only one.' },
                { from: 'them', text: 'Aw, thanks! I have an extra pen, but I can\'t really draw with it. Want to trade?' },
                { from: 'me', text: 'Sure!', effect: () => {
                  globalStore.removeItem('pencil');
                  globalStore.addItem('pen');
                }}
              ]);
            }
          }
        ],
        unseenDecisions: [
          {
            id: 0,
            label: 'What are you looking for?',
            effect: () => {
              this.makeDecision(0, [
                { from: 'me', text: 'What are you looking for?' },
                { from: 'them', text: 'I\'m trying to find a pencil to draw in my journal.' }
              ]);
              if(globalStore.has('pencil')) {
                this.unseenDecisions.unshift(this.optionalDecisions.filter(node => node.id == 4)[0]);
              }
              this.unseenDecisions.unshift(this.optionalDecisions.filter(node => node.id == 3)[0]);
            }
          },
          {
            id: 1,
            label: 'Do you have an extra water bottle?',
            effect: () => {
              this.makeDecision(1, [
                { from: 'me', text: 'Do you have an extra water bottle?' },
                { from: 'them', text: 'No, sorry.' },
                { from: 'me', text: 'Okay.' }
              ]);
            }
          },
          {
            id: 2,
            label: 'Go back outside.',
            effect: () => {
              this.makeDecision(2, [
                { from: 'me', text: 'See you!' }
              ], true);
            }
          }
        ],
        conversationTree: [
          { from: 'label', text: 'You return to your cabin and see your friend rummaging through her backpack.' },
          {
            from: 'decision'
          }
        ],
        continueText: 'Go back outside.',
        continueDest: 'CampHub'
      }
    },
    methods: {
      makeDecision(id, newConversation, skip) {
        this.conversationTree.push(...newConversation);
        this.unseenDecisions = this.unseenDecisions.filter(node => node.id != id);

        if(!skip) {
          this.conversationTree.push({
            from: 'decision',
            choices: this.unseenDecisions
          });
        }
      },
      addUnseenDecisions() {
        this.conversationTree.filter(node => node.from == 'decision')[0].choices = this.unseenDecisions;
      }
    }
  }
</script>

<style lang="scss">
