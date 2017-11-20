<template>
  <div class="modal-container" @click="onDismiss()">
    <div class="modal-content big" @click.stop="() => {}">
      <div class="btn" @click="print()">Print this</div>
      <ul>
        <li v-for="journal in journals">
          <b>{{ journal.title }}</b>
          <p>{{ journal.response }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { globalStore } from '../main.js';

  export default {
    name: 'PlayerScrapbook',
    props: ['onDismiss'],
    computed: {
      journals() {
        return globalStore.journals;
      }
    },
    methods: {
      print() {
        window.print();
      }
    }
  }
</script>

<style lang="scss" scoped>
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

  @media print {
    .btn {
      display: none;
    }
  }
</style>
