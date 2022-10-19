<template>

  <el-container>
    <el-main class="h-screen">
      <el-row  >
        <CurrentFixture></CurrentFixture>
        <Loader v-if="store.loading"></Loader>
        <el-card v-if="!store.loading" class="box-card w-full" >
          <template #header>
            <div class="card-header">
              <span>{{ store.data.results[store.currentQuestion].question }}</span>
            </div>
          </template>
          <Answer
            v-for="answer in store.data.results[store.currentQuestion]
              .shuffled_answers"
            :key="answer"
            :text="answer"
            :show-answer="store.showAnswer"
            @check-answer="store.checkAnswer"
        ></Answer>
        </el-card>
      </el-row>
    </el-main>
  </el-container>

</template>

<script>
import Answer from './Answer.vue';
import Loader from './Loader.vue';
import CurrentFixture from './CurrentFixture.vue';
import { store } from '../store';

export default {
  components: {
    Answer,
    Loader,
    CurrentFixture
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

