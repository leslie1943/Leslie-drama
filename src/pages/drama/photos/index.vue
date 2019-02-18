<template>
  <d2-container>
    <template slot="header"></template>
    <div class="drama-photo-container">
      <el-row>
        <viewer :images="[photos]" style="background-color:pink">
          <el-col :span="4" v-for="(item,index) in photos" :key="index">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item" class="image">
              <div style="textAlign:center;">{{index}}</div>
            </el-card>
          </el-col>
        </viewer>
      </el-row>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import photos from './photos.js'
export default {
  name: 'photos',
  data () {
    return {
      photos: photos
    }
  }
}
</script>

<style lang="scss">
.drama-photo-container {
  font-size: 14px;
  .image {
    width: 240px;
    height: 180px;
    cursor: pointer;
  }
}
</style>
