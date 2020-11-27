<template>
  <div>
    <!-- 面包屑 -->
    <el-bread></el-bread>
    <!-- 添加按钮 -->
    <el-button type="primary" size="small" @click="isAdd">添加</el-button>
    <!-- 表格 -->
    <v-table @edit="edit"></v-table>
    <!-- 弹窗 -->
    <v-dialog @cancel="cancel" :addInfo="addInfo" ref="dialog"></v-dialog>
  </div>
</template>

<script>
import elBread from "../../components/el-bread";
import vTable from "./list";
import vDialog from "./add";
export default {
  data() {
    return {
      addInfo: {
        // 用于打开弹框
        isShow: false,
        // 用于区分添加还是编辑
        isAdd: true,
      },
    };
  },
  components: {
    elBread,
    vTable,
    vDialog,
  },
  methods: {
    isAdd() {
      this.addInfo.isShow = true;
      this.addInfo.isAdd = true;
    },
    // 关闭弹窗
    cancel(e) {
      this.addInfo.isShow = e;
    },
    edit(e) {
      this.addInfo.isShow = true;
      this.addInfo.isAdd = false;
      this.$refs.dialog.look(e);
    },
  },
};
</script>

<style lang="stylus" scoped>
.el-button {
  margin-bottom: 20px;
}
</style>
