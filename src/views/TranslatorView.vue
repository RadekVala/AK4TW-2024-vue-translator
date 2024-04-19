<script setup>
 import { ref } from 'vue';
 import { useHistoryStore } from '@/stores/history'


 const store = useHistoryStore();

 const userInput = ref('');

 const result = ref('');

 const translate = async () => {
    if(userInput.value.length > 2){
      // do the fetch request
      const url = `https://api.mymemory.translated.net/get?q=${userInput.value}&langpair=en|cs`;
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      result.value = data.responseData.translatedText;

      // save to history

      const item = {
        input: userInput.value,
        output: result.value
      }

      store.add(item);
    }
 };

</script>

<template>
  <main>
    <div class="card m-3">
        <div class="card-body">
            <div class="d-grid gap-2">

                <div class="form-floating mb-3">
                    <input v-model="userInput" type="text" class="form-control" placeholder="Text for translation...">
                    <label for="userInput">Text for translation...</label>
                </div>

                <button @click="translate()" class="btn btn-primary" type="button">Translate</button>
            </div>

            <div class="card mt-3">
                <div id="translationResult" class="card-body">
                  {{ userInput }} -> {{ result }}
                </div>
            </div>

        </div>
    </div>
  </main>
</template>
