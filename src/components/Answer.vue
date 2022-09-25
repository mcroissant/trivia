<script>
import { store } from '.././store';

export default {
  props: {
    text: String,
    isValidAnswer: Boolean,
    isInvalidAnswer: Boolean,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <button
    class="w-full bg-gray-200 rounded-lg p-4 transition md:text-lg md:p-6"
    @click="store.submitAnswer(text)"
    v-html="text"
  ></button>
</template>
