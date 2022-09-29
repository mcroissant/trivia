<template>
  <Loader v-if="store.loading"></Loader>
  <div
    v-else
    class="grid grid-rows-6 grid-cols-1 text-gray-600 mx-auto w-11/12 md:w-8/12 lg:w-7/12 overflow-y-hidden custom-height"
  >
    <div class="row-span-1 mt-6">
      <div
        class="min-h-full items-center justify-between py-4 rounded-lg flex flex-col items-center"
      >
        <div
          class="border-4 border-gray-400 p-3 w-full rounded-lg shadow-xl flex items-center justify-center md:p-5 mb-3"
        >
          <h1
            class="text-center font-medium md:text-lg"
            v-html="store.data.results[store.currentQuestion].question"
          ></h1>
        </div>
      </div>
    </div>
    <div class="row-span-2">
      <div class="min-h-full flex flex-col justify-center">
        <div class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-2">
          <Answer
            v-for="answer in store.data.results[store.currentQuestion]
              .shuffled_answers"
            :key="answer"
            :text="answer"
            :show-answer="store.showAnswer"
            @check-answer="store.checkAnswer"
          ></Answer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Answer from './Answer.vue';
import Loader from './Loader.vue';
import { store } from '../store';

export default {
  components: {
    Answer,
    Loader,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    this.store.getData();
  },
};
</script>

<style scoped>
.grow-fade-enter-active {
  transition: all 0.2s ease-out;
}

.grow-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.grow-fade-enter-from,
.grow-fade-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(60px);
}
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
