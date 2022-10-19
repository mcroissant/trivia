<template>

  <table
      class=" el-table el-table--enable-row-transition el-table el-table--layout-fixed is-scrolling-none">
    <thead class="thead-dark">
    <tr>
      <th scope="col">Question</th>
      <th scope="col">Answers</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <draggable
        v-model="store.questions"
        group="people"
        @start="drag=true"
        @end="drag=false"
        item-key="id"
        tag="tbody">
      <template #item="{element}">
        <tr class="el-table__row handle" gutter="20" :key="element.id">
          <td class="el-table__cell" :span="6">
            <div class="cell">{{ element.question }}</div>
          </td>
          <td class="el-table__cell"  :span="12">
            <div class="cell">{{ element.answers }}</div>
          </td>
          <td class="el-table__cell"  :span="6">
            <div class="cell">
              <el-button link type="primary" size="small"
                         @click.prevent="store.sendQuestion(element.$index)">
                Send
                Question
              </el-button>
            </div>

          </td>
        </tr>
      </template>
    </draggable>
  </table>

</template>

<script>
import {store} from '../store';
import draggable from "vuedraggable";


export default {
  components: {draggable},
  name: "Questions",
  data() {
    return {
      store
    };
  }
}
</script>

<style scoped>

</style>