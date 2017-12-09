<template>
  <div class="container">
    <div class="center-content">
      <Conversation :conversationTree="conversationTree" :characterSprite="require('../assets/weeder-speech.png')" />
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
        conversationTree: [
          { from: 'label', text: 'You go up to the weeders.' },
          {
            from: 'me',
            text: 'Hey, what are you doing?'
          },
          {
            from: 'them',
            text: 'We\'re weeding a plant called Stinky Bob! It\'s an invasive species that grows on the forest floor.'
          },
          {
            from: 'me',
            text: 'Invasive species? What is that?'
          },
          {
            from: 'them',
            text: 'Invasive species are plants that have been brought from another place and are not part of the natural ecosystem. They take away important resources from native plants and make it harder for the natural ecosystem to develop and thrive.'
          },
          {
            from: 'them',
            text: 'Hey, do you want to help us?'
          },
          {
            from: 'decision',
            choices: [
              {
                label: 'Sure!',
                effect: () => {
                  this.conversationTree.unshift(
                    {
                      from: 'me',
                      text: 'Sure!'
                    },
                    {
                      from: 'label',
                      text: 'You join the weeders, and pick some stinky bob with them.'
                    },
                    {
                      from: 'them',
                      text: 'Thanks for your help! Here, take this bucket: you can pick stinky bob wherever you come across it now.',
                      effect: () => {
                        globalStore.addItem('bucket')
                      }
                    },
                    {
                      from: 'me',
                      text: 'Thank you! I definately will.'
                    },
                    {
                      from: 'label',
                      text: 'Walking away, you decide to write about invasive species in your journal.'
                    }
                  );
                }
              },
              {
                label: 'No thanks',
                effect: () => {
                  this.conversationTree.unshift(
                    {
                      from: 'me',
                      text: 'No thanks!'
                    },
                    {
                      from: 'them',
                      text: 'No worries! Here, take this bucket: you can pick stinky bob wherever you come across it now.',
                      effect: () => {
                        globalStore.addItem('bucket')
                      }
                    },
                    {
                      from: 'me',
                      text: 'Thank you! I definately will.'
                    },
                    {
                      from: 'label',
                      text: 'Walking away, you decide to write about invasive species in your journal.'
                    }
                  );
                }
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
