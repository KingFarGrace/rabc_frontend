<template>
  <div>
    <el-divider content-position="left">部门</el-divider>
    <el-card shadow="hover">部门简介</el-card
    ><el-row
      ><div>
        <el-tabs type="border-card">
          <el-tab-pane label="部门公告标题1">部门公告1</el-tab-pane>
          <el-tab-pane label="部门公告标题2">部门公告2</el-tab-pane>
          <el-tab-pane label="部门公告标题3">部门公告3</el-tab-pane>
          <el-tab-pane label="部门公告标题4">部门公告4</el-tab-pane>
        </el-tabs>
      </div></el-row
    >
    <div style="margin-bottom: 20px">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="申请权限" name="1">
          <template slot="title">
            <p class="title">申请权限</p>
          </template>
          <el-form :inline="true" :model="applyForm" class="demo-form-inline">
            <el-form-item label="新用户名">
              <el-select v-model="value" placeholder="请选择需要申请的权限">
                <el-option
                  v-for="item in applyForm.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option
              ></el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="apply">申请</el-button>
            </el-form-item>
          </el-form>
          <el-table
            :data="userTable"
            style="width: 50%; margin: auto"
            max-height="200"
          >
            <el-table-column prop="perm" label="已发出申请" width="180">
            </el-table-column>
            <el-table-column prop="ctime" label="发起时间" width="180">
            </el-table-column>
            <el-table-column prop="isPass" label="是否通过">
            </el-table-column> </el-table
        ></el-collapse-item>
      </el-collapse>
    </div>
    <div>
      <el-collapse v-model="activeNames"
        ><el-collapse-item name="1">
          <template slot="title">
            <p class="title">授权</p>
          </template>
          <el-table
            :data="adminTable"
            style="width: 75%; margin: auto"
            max-height="200"
          >
            <el-table-column prop="uid" label="用户ID" width="180">
            </el-table-column>
            <el-table-column prop="realname" label="用户真实姓名" width="180">
            </el-table-column>
            <el-table-column prop="content" label="申请内容"> </el-table-column>
            <el-table-column label="操作"
              ><template>
                <el-button-group>
                  <el-button type="primary" icon="el-icon-check"
                    >同意</el-button
                  >
                  <el-button type="danger"
                    >拒绝<i class="el-icon-close"></i
                  ></el-button>
                </el-button-group>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <p class="title">移除部门成员</p>
          </template>
          <el-table
            :data="memberTable"
            style="width: 50%; margin: auto"
            max-height="200"
          >
            <el-table-column prop="uid" label="用户ID" width="180">
            </el-table-column>
            <el-table-column prop="realname" label="用户真实姓名" width="180">
            </el-table-column>
            <el-table-column label="操作"
              ><template>
                <el-button type="danger">移出部门</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            <p class="title">添加部门成员</p>
          </template>
          <el-form
            :model="addForm"
            style="margin-top: 20px; width: 50%, margin: auto;"
          >
            <el-form-item>
              <div style="margin-top: 20px">
                <el-checkbox-group v-model="userCheckbox" size="small">
                  <el-checkbox label="用户1" border></el-checkbox>
                  <el-checkbox label="用户2" border></el-checkbox>
                </el-checkbox-group>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="apply">添加</el-button>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </div>
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
  name: "Department",
  data() {
    return {
      activeName: "1",
      applyForm: {
        options: [
          {
            value: "permAnnouncement",
            label: "申请发布公告",
          },
        ],
        value: "",
      },
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
      userCheckbox: [],
    };
  },
  methods: {
    apply() {},
  },
};
</script>