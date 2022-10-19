<template>
  <el-container>
    <el-main>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="User" name="questions">
          <el-row :gutter="20">

            <el-col :lg="16">
              <div class="grid-content">
                <el-card class="box-card">
                  <template #header>
                    <div class="card-header">
                      <span>Existing questions</span>
                    </div>
                  </template>

                  <Questions></Questions>

                </el-card>
              </div>
            </el-col>

            <el-col :lg="8">
              <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <span>Adding questions</span>
                  </div>
                </template>
                <el-form :model="question" label-width="120px">
                  <el-form-item label="Question">
                    <el-input v-model="question.question"/>
                  </el-form-item>
                  <el-form-item label="Answer" v-for="index in question.answersCount" :key="index">
                    <el-input v-model="question.answers[index-1]"/>
                  </el-form-item>
                  <el-form-item>
                    <el-button @click="question.answersCount++">Add Answer Field</el-button>
                  </el-form-item>

                  <el-form-item>
                    <el-button @click="store.addQuestion(question)">Create</el-button>
                  </el-form-item>
                </el-form>
              </el-card>
            </el-col>


          </el-row>


        </el-tab-pane>


        <el-tab-pane label="Next Game" name="game">
          <el-row :gutter="20">

            <el-col :lg="12">
              <div class="grid-content">
                <el-card class="box-card">
                  <template #header>
                    <div class="card-header">
                      <span>Existing questions</span>
                    </div>
                  </template>


                </el-card>
              </div>
            </el-col>
            <el-col :lg="12">
              <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <span>Question control</span>
                  </div>
                </template>
                <el-tag>Connected Players : {{ connectedPlayers }}</el-tag>
                <p v-if="store.question">{{ store.question.question }}</p>
                <el-form-item>
                  <el-button v-if="store.question" v-for="answer in store.question.answers" style="width: 100%"
                             @click.prevent="store.sendAnswer(answer)"> {{ answer }}
                  </el-button>
                </el-form-item>
              </el-card>
            </el-col>

          </el-row>

        </el-tab-pane>
      </el-tabs>

    </el-main>
  </el-container>
</template>

<script>
import {store} from './store';
import GameList from "./components/GameList.vue";
import {getGameStatistic} from "./services/statistic-api";
import draggable from "vuedraggable";
import Questions from "./components/Questions.vue";

export default {
  components: {Questions, draggable, GameList},
  beforeCreate() {
    store.createConnection();
    store.getQuestions();
    setInterval(function () {
      getGameStatistic().then(data => this.connectedPlayers = data.connectedPlayers.Count - 1);
    }.bind(this), 10000);
  },
  data() {
    return {
      connectedPlayers: 0,
      question: {
        question: '',
        answers: [],
        answersCount: 1,
        correctAnswer: '',
        duration: 0,
      },
      store
    };
  }
};
</script>
