<template>
  <el-row>
    {{game}}
    <el-col>
      <el-image :preview-teleported="true" :src="game.teams.home.logo" :fit='scale-down' style="width: 60px; height: 60px" />
    </el-col>
    <el-col>{{game.teams.home.name}}</el-col>
    <el-col>{{game.teams.away.name}}</el-col>
    <el-col>
      <el-image :preview-teleported="true" :src="game.teams.away.logo" :fit='scale-down' style="width: 60px; height: 60px" />
    </el-col>
  </el-row>

</template>


<script>
import {getNextGames} from "../services/football-api"


export default {
  name: "CurrentFixture",
  beforeCreate() {
     getNextGames(1).then(data =>  {this.game = data});
  },
  data() {
    return {
      game: {
        teams : {
          home : {
            logo :'',
            name: ''

          },
          away : {
            logo :'',
            name: ''

          }

        }

      }
    };
  },
}
</script>
