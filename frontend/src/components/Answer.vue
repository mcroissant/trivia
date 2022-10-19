<script>
import {store} from '.././store';

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
  <el-row class="mt-3 w-full">
    <el-button size="large"
               @click="store.submitAnswer(text)"
               v-html="text"
               class="w-full"
               round></el-button>
  </el-row>
</template>
