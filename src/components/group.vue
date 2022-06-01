<template>
  <div>
    <el-divider content-position="left">组</el-divider
    ><el-card shadow="hover">部门简介</el-card>
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
    };
  },
  methods: {
    sendMessages() {},
  },
};
</script>