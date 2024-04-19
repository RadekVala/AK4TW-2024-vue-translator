<script setup>
import { ref } from 'vue';
import { useHistoryStore } from '@/stores/history'

const store = useHistoryStore();
const history = store.history;

const fetchHistory = () => {
  history.value = store.getHistoryArray();
};

//onMounted(fetchHistory);
</script>

<template>
  <div class="container">
    <h1 class="m-4">History</h1>

    <ul>
      <li v-for="(item, index) in history" :key="index">{{ item.input }} -> {{ item.output }}</li>
    </ul>
  </div>
</template>

<style>

</style>
