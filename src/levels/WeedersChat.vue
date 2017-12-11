<template>
  <div class="container">
    <JournalEntry
      prompt="How does removing invasive species affect resilience of ecosystem in a quickly-changing climate?"
      :onComplete="() => this.next()"
      :visible="composing" />
    <div class="center-content">
      <Conversation :conversationTree="conversationTree" :characterSprite="require('../assets/weeder-speech.png')" />
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import Conversation from '../common/Conversation';
  import JournalEntry from '../common/JournalEntry';

  export default {
    name: 'WeedersChat',
    components: { Conversation, JournalEntry },
    mounted() {
      globalStore.setAttr('weedersTalked', true);
    },
    data() {
      return {
        composing: false,
        conversationTree: [
          { from: 'label', text: 'You go up to the weeders.' },
          {
            from: 'me',
            text: 'Hey, what are you doing?',
            effect: () => this.composing = true
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
            text: 'Hey, do you want to help us? We\'ll give you a bucket and a shovel so you can pick anywhere!'
          },
          {
            from: 'decision',
            choices: [
              {
                label: 'Sure!',
                effect: () => {
                  globalStore.setAttr('weedersHelped', true);
                  this.conversationTree.unshift(
                    {
                      from: 'me',
                      text: 'Sure!'
                    },
                    {
                      from: 'label',
                      text: 'You join the weeders, and pick some stinky bob with them.',
                      effect: () => {
                        globalStore.addItem('bucket')
                      }
                    },
                    {
                      from: 'them',
                      text: 'Thanks for your help! Here, take this shovel: you can pick stinky bob wherever you come across it now.',
                      effect: () => {
                        globalStore.addItem('shovel')
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
                      text: 'No thanks.'
                    },
                    {
                      from: 'them',
                      text: 'Okay, see you!'
                    },
                    {
                      from: 'label',
                      text: 'Walking away, you decide to write about invasive species in your journal.'
                    },
                    {
                      from: 'label',
                      text: 'You take out your journal.',
                      effect: () => this.composing = true
                    }
                  );
                }
              }
            ]
          }
        ]
      }
    },
    methods: {
      next() {
        this.$router.push('WeedersAlt');
      }
    }
  }
</script>

<style lang="scss">
</style>
