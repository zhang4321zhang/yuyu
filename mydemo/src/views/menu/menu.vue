<template>
  <div>
    <!-- 面包屑 -->
    <el-bread></el-bread>
    <el-button type="primary" size="small" @click="isAdd">添加</el-button>
    <!-- 表格 -->
    <v-table @edit="edit"></v-table>
    <!-- 添加弹框表单 -->
    <v-dialog @quxiao="quxiao" :addInfo="addInfo" ref="dialog"></v-dialog>
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
    //   打开弹窗事件
    isAdd() {
      this.addInfo.isShow = true;
      this.addInfo.isAdd = true;
    },
    // 关闭弹窗
    quxiao(e) {
      this.addInfo.isShow = e;
    },
    // 编辑事件
    edit(e) {
      // e是id
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
