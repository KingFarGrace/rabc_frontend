<template>
  <div>
    <el-divider content-position="left">用户中心</el-divider
    ><el-radio-group v-model="size">
      <el-radio label="">默认</el-radio>
      <el-radio label="medium">中等</el-radio>
      <el-radio label="small">小型</el-radio>
      <el-radio label="mini">超小</el-radio>
    </el-radio-group>
    <el-descriptions
      class="margin-top"
      title="个人信息"
      :column="3"
      :size="size"
    >
      <el-descriptions-item label="用户名">xxx</el-descriptions-item>
      <el-descriptions-item label="手机号">xxx</el-descriptions-item>
      <el-descriptions-item label="邮箱地址">xxx</el-descriptions-item>
      <el-descriptions-item label="年龄">xxx</el-descriptions-item>
      <el-descriptions-item label="性别">xxx</el-descriptions-item>
      <el-descriptions-item label="所属部门">xxx</el-descriptions-item>
      <el-descriptions-item label="注册时间">xxx</el-descriptions-item>
    </el-descriptions>
    <el-divider
      ><i class="el-icon-edit" style="font-size: 30px; color: #598ef8"></i
    ></el-divider>
    <el-row>
      <el-collapse v-model="activeName" accordion style="margin-top: 20px">
        <el-collapse-item name="1">
          <template slot="title">
            <p class="title">修改用户名</p>
          </template>
          <div>
            <el-form
              :inline="true"
              :model="uidReviseForm"
              class="demo-form-inline"
            >
              <el-form-item label="新用户名">
                <el-input
                  v-model="uidReviseForm.uid"
                  placeholder="请输入新用户名"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">修改</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <p class="title">修改手机号</p>
          </template>
          <div>
            <el-form
              :inline="true"
              :model="telenumReviseForm"
              class="demo-form-inline"
            >
              <el-form-item label="新手机号">
                <el-input
                  v-model="telenumReviseForm.telenum"
                  placeholder="请输入新手机号"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">修改</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <p class="title">修改邮箱地址</p>
          </template>
          <div>
            <el-form
              :inline="true"
              :model="emailReviseForm"
              class="demo-form-inline"
            >
              <el-form-item label="新邮箱地址">
                <el-input
                  v-model="emailReviseForm.email"
                  placeholder="请输入新邮箱地址"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">修改</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title">
            <p class="title">修改密码</p>
          </template>
          <div>
            <el-form
              :inline="true"
              :model="pwdReviseForm"
              class="demo-form-inline"
            >
              <el-form-item label="当前账号密码">
                <el-input
                  v-model="pwdReviseForm.oldpwd"
                  placeholder="请输入当前账号密码"
                ></el-input>
              </el-form-item>
              <el-form-item label="新密码">
                <el-input
                  v-model="pwdReviseForm.newpwd"
                  placeholder="请输入新密码"
                ></el-input>
              </el-form-item>
              <el-form-item label="重复输入新密码">
                <el-input
                  v-model="pwdReviseForm.newpwd"
                  placeholder="请输入相同的新密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmitPwd">修改</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-row>
  </div>
</template>

<style scoped>
.el-collapse {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.title {
  margin-left: 20px;
  font-size: 18px;
  font-family: "PingFang SC";
  font-weight: bold;
  color: #303133;
  padding-bottom: 17px;
  padding-top: 17px;
}
</style>

<script>
export default {
  name: "User",
  data() {
    return {
      size: "",
      activeName: "1",
      uidReviseForm: {
        uid: "",
      },
      telenumReviseForm: {
        telenum: "",
      },
      emailReviseForm: {
        email: "",
      },
      pwdReviseForm: {
        oldpwd: "",
        newpwd: "",
        repeat: "",
      },
    };
  },
  methods: {
    gorevise() {
      this.$router.push();
    },
    onSubmit() {
      console.log("submit!");
    },
    onSubmitPwd() {},
  },
};
</script>