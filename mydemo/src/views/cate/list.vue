<template>
  <div>
    <el-table
      :data="cateList"
      border
      style="width: 100%"
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="id" label="分类编号" width="180">
      </el-table-column>
      <el-table-column prop="catename" label="分类名称" width="180">
      </el-table-column>
      <el-table-column  label="图片">
        <template slot-scope="item">
          <div>
            <img class="img" :src="$imgUrl+item.row.img" alt="">
          </div>
        </template>
      </el-table-column>
      
      <el-table-column label="状态">
        <template slot-scope="item">
          <div>
            <el-tag type="success" v-if="item.row.status == 1">启用</el-tag>
            <el-tag type="danger" v-else>禁用</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="item">
          <div>
            <el-button type="warning" size="small" @click="edit(item.row.id)"
              >编辑</el-button
            >
            <el-button type="danger" @click="del(item.row.id)" size="small"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// 辅助性函数
import { mapGetters, mapActions } from "vuex";
import { getCateDelete } from "../../util/axios";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      cateList: "cate/getCateList",
    }),
  },
  mounted() {
    this.getCateListAction();
  },
  methods: {
    ...mapActions({
      getCateListAction: "cate/getCateListAction",
    }),
    // 点击编辑获取id
    edit(id) {
      // 把id给父组件menu
      this.$emit("edit", id);
    },
    // 删除事件
    del(id) {
      this.$confirm("确定删除吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          getCateDelete({ id }).then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              // 重新触发调取列表
              this.getCateListAction();
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
  },
};
</script>

<style lang="stylus" scoped>
.img
  width 100px
  height 100px
</style>
