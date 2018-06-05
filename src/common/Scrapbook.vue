<template>
  <div class="modal-container" @click="onDismiss()">
    <div class="modal-content big modal-content-journal" @click.stop="() => {}">
      <!-- <div class="btn" @click="print()">Print this</div> -->
      <div class="left">
        <ScrapbookPage
          :data="pages[page + 0]"
          v-if="pageExists(page + 0)" />
        <span class="link" v-if="pageExists(page - 2)" @click="page -= 2">Previous Page</span>
      </div>
      <div class="right">
        <ScrapbookPage
          :data="pages[page + 1]"
          v-if="pageExists(page + 1)" />
        <span class="link right-align" v-if="pageExists(page + 2)" @click="page += 2">Next Page</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';
  import ScrapbookPage from './ScrapbookPage';

  export default {
    name: 'Scrapbook',
    props: ['onDismiss'],
    components: { ScrapbookPage },
    mounted() {
      setTimeout(() => {
        this.constructPages();
      }, 100);
    },
    data() {
      return {
        memoryAssociations: {
          'Intro1': 'arrival.png',
          'RT2': 'beetles.png',
          'MT4': 'landslide.png',
          'HT2': 'pickaxe.png',
          'RT1': 'salmon.png',
          'MT1': 'weeders.png'
        },
        page: 0,
        pages: []
      }
    },
    computed: {
      journals() {
        //return globalStore.journals
        return [
          {title: '1', response: 'asdv'},
          {title: '2', response: 'asdv'},
          {title: '3', response: 'asdv'},
          {title: '4', response: 'asdv'},
          {title: '5', response: 'asdv'},
          {title: '6', response: 'asdv'}
        ]
      },
      test() {
        return Math.random() > 0.5;
      },
      photos() {
        return Object.keys(this.memoryAssociations)//.filter(location => globalStore.hasVisited(location))
          .filter(location => Math.random() > 0.5)
          .map(location => this.memoryAssociations[location])
      }
    },
    methods: {
      constructPages() {
        let journalIndex = 0;
        let photoIndex = 0;
        while(journalIndex < this.journals.length || photoIndex < this.photos.length) {
          if(journalIndex < this.journals.length) {
            this.pages.push({
              type: 'journal',
              prompt: this.journals[journalIndex].title,
              response: this.journals[journalIndex].response
            });
          }
          if(photoIndex < this.photos.length) {
            this.pages.push({
              type: 'photo',
              src: '/static/memories/' + this.photos[photoIndex]
            });
          }

          journalIndex++;
          photoIndex++;
        }
      },
      pageExists(page) {
        return page >= 0 && page < this.pages.length;
      },
      print() {
        window.print();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal-container {
    .modal-content-journal {
      background-image: url('../assets/ui/ranger-wiki-bg.png');
      display: flex;

      .left, .right {
        width: 323px;
        margin-left: 55px;
        margin-right: 20px;
        padding-right: 35px;
        margin-top: 60px;
        margin-bottom: 60px;

        img {
          width: 100%;
        }

        .link {
          color: #2980b9;
          text-decoration: underline;
          display: block;
          cursor: pointer;
          user-select: none;

          &.right-align {
            text-align: right;
          }

          &:hover {
            color: #3498db;
          }
        }
      }

      b {
        white-space: pre-wrap;
      }

      p {
        white-space: pre-wrap;
        margin-bottom: 16px;
      }

      .btn {
        background-color: #bdc3c7;
        transition: all 250ms;
        padding: 16px;
        margin: 16px;
        cursor: pointer;
        color: black;

        &:hover {
          background-color: #95a5a6
        }
      }
    }
  }

  @media print {
    .btn {
      display: none;
    }
  }
</style>
