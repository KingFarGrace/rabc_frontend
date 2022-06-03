<template>
  <div>
    <el-divider content-position="left">系统管理员中心</el-divider
    ><el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item name="1">
        <template slot="title">
          <p class="title">发布系统公告</p>
        </template>
        <el-form
          :model="annoForm"
          class="demo-form-inline"
          style="width: 50%; margin: auto"
        >
          <el-form-item>
            <el-input
              v-model="title"
              placeholder="请输入公告标题"
              style="width: 50%; margin: auto"
            ></el-input>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入公告内容"
              v-model="textarea"
              autosize
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">发布</el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <p class="title">设置新部门</p>
        </template>
        <el-form
          :model="departForm"
          class="demo-form-inline"
          style="width: 50%; margin: auto"
        >
          <el-form-item>
            <el-input
              v-model="departName"
              placeholder="请输入部门名称"
              style="width: 50%; margin: auto"
            ></el-input>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入部门简介"
              v-model="departInfo"
              autosize
            >
            </el-input>
          </el-form-item>
          <el-form-item
            ><el-select
              v-model="departLeaderID"
              filterable
              placeholder="请选择部门管理员ID"
            >
              <el-option
                v-for="item in departLeaders"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option> </el-select
          ></el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">添加</el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <p class="title">设置新群组</p>
        </template>
        <el-form
          :model="groupForm"
          class="demo-form-inline"
          style="width: 50%; margin: auto"
        >
          <el-form-item>
            <el-input
              v-model="groupName"
              placeholder="请输入群组名称"
              style="width: 50%; margin: auto"
            ></el-input>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入群组简介"
              v-model="groupInfo"
              autosize
            >
            </el-input>
          </el-form-item>
          <el-form-item
            ><el-select
              v-model="groupLeaderID"
              filterable
              placeholder="请选择群组管理员ID"
            >
              <el-option
                v-for="item in groupLeaders"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option> </el-select
          ></el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">添加</el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
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
  name: "SystemAdmin",
  data() {
    return {
      annoForm: {},
      title: "",
      textarea: "",
      departLeaders: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      departName: "",
      departInfo: "",
      departLeaderID: "",
      groupLeaders: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      groupName: "",
      groupInfo: "",
      groupLeaderID: "",
    };
  },
};
</script>
