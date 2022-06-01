<template>
  <div>
    <el-header><h2>后台管理系统</h2></el-header>
    <el-row>
      <el-col :span="4"
        ><div class="grid-content bg-purple-light">
          <el-button icon="el-icon-menu" circle @click="returnMain"></el-button>
          <el-menu
            :router="true"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            ><el-menu-item index="/user">
              <i class="el-icon-user-solid"></i>
              <span slot="title">个人中心</span> </el-menu-item
            ><el-menu-item index="/department">
              <i class="el-icon-takeaway-box"></i>
              <span slot="title">部门</span>
            </el-menu-item>
            <el-submenu>
              <template slot="title">
                <i class="el-icon-pie-chart"></i>
                <span>群组列表</span>
              </template>
              <el-menu-item index="/Group">a组</el-menu-item>
              <el-menu-item index="/Group">b组</el-menu-item>
            </el-submenu>
          </el-menu>
        </div></el-col
      >
      <el-col :span="20"
        ><div>
          <el-row
            ><el-col :span="2" offset="20">
              <el-button
                type="primary"
                icon="el-icon-upload"
                plain
                @click="goLogin"
                >登录</el-button
              >
              <!-- <el-button
                type="info"
                icon="el-icon-switch-button"
                plain
                @click="goLogin"
                >登录</el-button> -->
            </el-col></el-row
          ><el-row>
            <el-col :span="20" offset="2"><router-view></router-view></el-col>
          </el-row></div
      ></el-col>
    </el-row>
  </div>
</template>

<style>
.el-row {
  line-height: 40px;
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-header {
  border-radius: 4px;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>

<script>
export default {
  name: "Index",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    returnMain() {
      this.$router.push("/");
    },
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>