<template>
  <div>
    <el-row><h1>404 NOT FOUND</h1></el-row>
    <el-row
      ><el-button type="primary" icon="el-icon-arrow-left" @back="goBack"
        >返回</el-button
      ></el-row
    >
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    goBack() {
      console.log("go back");
    },
  },
};
</script>