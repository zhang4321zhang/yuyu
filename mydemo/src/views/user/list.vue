<template>
  <div>
    <el-table :data="userList" border style="width: 100%">
      <el-table-column prop="uid" label="用户编号"> </el-table-column>
      <el-table-column prop="username" label="用户名称"> </el-table-column>
      <el-table-column prop="roleid" label="所属角色"> </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="item">
          <div>
            <el-tag type="success" v-if="item.row.status == 1">启用</el-tag>
            <el-tag type="danger" v-else>禁用</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="item">
          <div>
            <el-button type="warning" size="small" @click="edit(item.row.uid)"
              >编辑</el-button
            >
            <el-button type="danger" @click="del(item.row.uid)" size="small"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :page-size="userSize"
      background
      layout="prev, pager, next"
      :total="userCount"
      @current-change='currentChange'
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { getUserCount, getUserDelete } from "../../util/axios";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userList: "user/getUserList",
      userCount: "user/getUserCount",
      userSize: "user/getUserSize",
    }),
  },
  mounted() {
    //   组件一加载触发行动
    this.getUserAction();
    this.getUserCount;
  },
  methods: {
    //   获取行动
    ...mapActions({
      getUserAction: "user/getUserAction",
      getUserCount: "user/getCountAction",
      changePage:'user/changePageAction'
    }),
    // 删除
    del(uid) {
      this.$confirm("确定删除吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          getUserDelete({ uid }).then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              // 重新触发调取列表
              this.getUserAction();
              this.getUserCount()
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 封装一个编辑传id事件
    edit(id) {
      this.$emit("edit", id);
    },
    currentChange(e){
      this.changePage(e)
    }
  },
};
</script>

<style lang="stylus" scoped>
.el-pagination {
  float: right;
  margin-top: 20px;
}
</style>
