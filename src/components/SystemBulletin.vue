<template>
  <div class="grid-content bg-purple">
    <el-row
      ><div margin="">
        <el-tabs type="border-card">
          <el-tab-pane label="系统公告标题1">系统公告1</el-tab-pane>
          <el-tab-pane label="系统公告标题2">系统公告2</el-tab-pane>
          <el-tab-pane label="系统公告标题3">系统公告3</el-tab-pane>
          <el-tab-pane label="系统公告标题4">系统公告4</el-tab-pane>
        </el-tabs>
      </div></el-row
    >
    <el-row
      ><el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel></el-row
    >
  </div>
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<script>
export default {
  name: "SystemBulletin",
};
</script>
