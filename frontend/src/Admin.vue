<template>
  <div
      class="grid grid-rows-6 grid-cols-1 text-gray-600 mx-auto w-11/12 md:w-8/12 lg:w-7/12 overflow-y-hidden custom-height"
  >
    <div class="row-span-1 mt-6">
      <div
          class="min-h-full items-center justify-between py-4 rounded-lg flex flex-col items-center"
      >
        <div
            class="border-4 border-gray-400 p-3 w-full rounded-lg shadow-xl flex items-center justify-center md:p-5 mb-3"
        >
          <h1 class="text-center font-medium md:text-lg"
          >Question / Réponse</h1>
        </div>
      </div>
    </div>
    <div class="row-span-1">
      <div class="min-h-full flex flex-col justify-center">
        <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-2">
          <textarea v-model="store.newMessage"></textarea>
        </div>
      </div>
    </div>
    <div class="row-span-2">
      <div class="min-h-full flex flex-col justify-center">
        <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-2">
          <button
              class="px-12 py-4 bg-gray-600 text-white text-lg rounded-lg hover:bg-gray-700 transition w-full"
              @click="store.sendNewMessage()"
          >
            Send Data
          </button>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {store} from './store';

export default {
  components: {},
  data() {
    return {
      store
    };
  },
};
</script>

<style scoped>

.custom-height {
  min-height: 100vh;
}

@media only screen and (max-width: 800px) {
  .custom-height {
    /* 92vh to make up for the toolbar in the mobile browser */
    min-height: 92vh;
  }
}
</style>
