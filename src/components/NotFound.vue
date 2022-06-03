<template>
  <div>
    <el-row><h1>404 NOT FOUND</h1></el-row>
    <el-row
      ><el-button type="primary" icon="el-icon-arrow-left" @click="returnLast"
        >返回</el-button
      ></el-row
    >
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    returnLast() {
      this.$router.go(-1);
    },
  },
};
</script>