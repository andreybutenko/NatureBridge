<template>
  <div class="scrapbook-page" :class="{ 'page-photo': isPhoto, 'page-journal': isJournal }">
    <div class="photo-container" v-if="isPhoto">
      <img :src="data.src" />
    </div>
    <div class="journal-container" v-if="isJournal">
      <b>{{ data.prompt }}</b>
      <p>{{ data.response }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ScrapbookPage',
    props: ['data'],
    computed: {
      isPhoto() {
        return this.data.type == 'photo';
      },
      isJournal() {
        return this.data.type == 'journal';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scrapbook-page {
    overflow-x: hidden;
    overflow-y: auto;

    &.page-journal {
      height: 100%;
    }

    &.page-photo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      overflow-y: hidden;

      .photo-container {
        background-color: white;
        padding: 16px;
        transform: rotate(5deg) scale(0.9);

        img {
          width: 100%;
        }
      }
    }
  }
</style>
