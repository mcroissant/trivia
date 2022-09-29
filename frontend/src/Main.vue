<script>
import Quiz from './components/Quiz.vue';
import Options from './components/Options.vue';
import Result from './components/Result.vue';
import { store } from './store';

export default {
  components: {
    Quiz,
    Options,
    Result,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="text-gray-700">
    <Options v-if="store.step == 0"></Options>
    <Quiz v-if="store.step == 1"></Quiz>
    <Result v-if="store.step == 3"></Result>
  </div>
</template>

<style>
body {
  font-family: 'Epilogue';
  background-color: #f9f9f9;
}
input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
