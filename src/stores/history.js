
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHistoryStore = defineStore('history', () => {
  const history = ref([])
  //const doubleCount = computed(() => count.value * 2)
  function add(item) {
    history.value.unshift(item)
  }

  return { history, add }
},
  // set persistance
  {
    persist: true,
  },
)
