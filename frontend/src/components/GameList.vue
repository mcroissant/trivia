<template>
  <el-table :data="games.response" style="width: 100%">
    <el-table-column prop="fixture.date" :formatter="formatter"/>
    <el-table-column>
      <template #default="scope">
        <div style="display: flex; align-items: center">
          {{scope.teams}}
            <el-image :preview-teleported="true" :src="scope.row.teams.home.logo" :fit='scale-down' style="width: 60px; height: 60px" />
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="teams.home.name"/>
    <el-table-column>-</el-table-column>
    <el-table-column prop="teams.away.name" />
    <el-table-column  >
      <template #default="scope">
        <div style="display: flex; align-items: center">
          {{scope.teams}}
          <el-image :preview-teleported="true" :src="scope.row.teams.away.logo" :fit='scale-down' style="width: 60px; height: 60px" />
        </div>
      </template></el-table-column>
  </el-table>
</template>

<script setup >
const formatter = (row) => {
  console.log(row.fixture.date)
  let date = new Date(row.fixture.date)
  return date.toLocaleString('fr',{hour:'numeric',month:'short', day:'numeric'})
}


</script>
<script>
import {getNextGames} from "../services/football-api"


export default {
  name: "GameList",
  beforeCreate() {
     getNextGames(10).then(data =>  this.games =data);
  },
  data() {
    return {
      games: []
    };
  },
}
</script>
