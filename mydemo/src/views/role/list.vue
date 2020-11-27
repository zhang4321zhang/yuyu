<template>
  <div>
    <el-table :data="roleList" border style="width: 100%">
      <el-table-column prop="id" label="角色编号"> </el-table-column>
      <el-table-column prop="rolename" label="角色名称"> </el-table-column>
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
            <el-button type="warning" size="small" @click="edit(item.row.id)">编辑</el-button>
            <el-button type="danger" @click="del(item.row.id)" size="small">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {getRoleDelete} from "../../util/axios"
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      roleList: "role/getRoleList",
    }),
  },
  mounted() {
    //   组件一加载触发行动
    this.getRoleAction();
  },
  methods: {
    //   获取行动
    ...mapActions({
      getRoleAction: "role/getRoleAction",
    }),
    // 删除
    del(id) {
      this.$confirm("确定删除吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          getRoleDelete({ id })
          .then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              // 重新触发调取列表
              this.getRoleAction();
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
    edit(id){
        this.$emit('edit',id)
    }
  },
};
</script>

<style lang="" scoped>
</style>
