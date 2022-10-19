<template>
  <Loader v-if="store.loading"></Loader>
  <div v-else class="w-11/12 mx-auto grid grid-cols-1 gap-y-8 lg:w-5/12">
    <h1 class="text-center text-3xl my-12 font-bold">
      In<span class="text-purple-500">Football</span>
    </h1>
    <button
      class="px-12 py-4 bg-gray-600 text-white text-lg rounded-lg hover:bg-gray-700 transition w-full"
      @click="startQuiz()"
    >
      Start quiz
    </button>


  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Loader from './Loader.vue';
import { store } from '.././store';


onMounted(() => {
  store.loading = false;
});

const startQuiz = () => {

  store.startQuiz();
};
</script>
