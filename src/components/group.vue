<template>
  <div>
    <el-divider content-position="left">组</el-divider
    ><el-card shadow="hover">组简介</el-card>
    <el-form :model="ChatForm" style="height: 400px" id="messageBackground">
      <el-scrollbar style="height: 100%">
        <div v-for="item in this.ChatForm" :key="item">
          <div id="messagesTime">{{ item.mtime }}</div>
          <div v-if="item.fromUser == username" :key="item.mid">
            <el-row>
              <el-col :span="14" :offset="10">
                <div id="sendMessages">
                  {{ item.content }}
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="item.fromUser != username" :key="item.mid">
            <el-row>
              <el-col :span="14" :offset="0">
                <div id="receiveMessages">{{ item.content }}</div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-scrollbar>
    </el-form>
    <el-row>
      <el-input
        v-model="inputMessage"
        placeholder="请输入聊天内容"
        type="textarea"
        autosize
        :rows="5"
      ></el-input>
      <el-col :span="2" :offset="22"
        ><el-button type="primary" @click="sendMessages()"
          >发送</el-button
        ></el-col
      >
    </el-row>
    <div>
      <el-tabs type="border-card">
        <el-tab-pane label="群组公告标题1">群组公告1</el-tab-pane>
        <el-tab-pane label="群组公告标题2">群组公告2</el-tab-pane>
        <el-tab-pane label="群组公告标题3">群组公告3</el-tab-pane>
        <el-tab-pane label="群组公告标题4">群组公告4</el-tab-pane>
      </el-tabs>
    </div>
    <div style="margin-top: 50px">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template slot="title">
            <p class="title">发布群公告</p>
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
            <p class="title">管理群成员</p>
          </template>
          <el-transfer
            filterable
            :filter-method="filterMethod"
            filter-placeholder="请输入用户ID"
            v-model="value"
            :data="data"
            :titles="['非组内成员', '组内成员']"
          >
          </el-transfer>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style scoped>
#messageBackground {
  background-color: #e9eef3;
  line-height: 25px;
  border-radius: 5px;
}
#sendMessages {
  color: #ffffff;
  background: cornflowerblue;
  font-size: 17px;
  padding: 10px;
  margin: 10px;
  float: right;
  border-radius: 15px;
}
#receiveMessages {
  color: #000000;
  background: #ffffff;
  font-size: 17px;
  padding: 10px;
  margin: 10px;
  float: left;
  border-radius: 15px;
}
#messagesTime {
  text-align: center;
}
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
  name: "Group",
  data() {
    return {
      username: "",
      chatWith: "",
      inputMessage: "",
      ChatForm: {
        mid: "",
        fromUser: "",
        toUser: "",
        content: "",
        mtime: "",
      },
      annoForm: {},
      title: "",
      textarea: "",
      userTable: [
        {
          perm: "发布公告",
          ctime: "...",
          isPass: "未通过",
        },
      ],
      adminTable: [
        {
          uid: "120181080602",
          realname: "张凯恒",
          content: "发布公告",
        },
      ],
      memberTable: [
        {
          uid: "120181080602",
          realname: "张凯恒",
        },
      ],
      searchArea: [],
      value: [],
      data: [],
    };
  },
  methods: {
    sendMessages() {},
    filterMethod() {},
  },
};
</script>