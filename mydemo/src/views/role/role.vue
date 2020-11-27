<template>
  <div>
    <!-- 面包屑 -->
    <el-bread></el-bread>
    <!-- 添加按钮 -->
    <el-button type="primary" size="small" @click="add">添加</el-button>
    <!-- 表格 -->
    <v-table @edit='edit'></v-table>
    <!-- 弹框 -->
    <v-dialog :addInfo="addInfo" ref="dialog" @cancel="cancel"></v-dialog>
  </div>
</template>

<script>
import elBread from "../../components/el-bread";
import vTable from "./list";
import vDialog from "./add";
import elBreadVue from '../../components/el-bread.vue';
export default {
  data() {
    return {
      addInfo: {
        isShow: false,
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
    // 打开弹框事件
    add() {
      this.addInfo.isShow = true;
    },
    // 弹框取消
    cancel() {
      this.addInfo.isShow = false;
    },
    edit(e){
      this.addInfo.isShow=true
      this.addInfo.isAdd=false
      this.$refs.dialog.look(e)
    }
  },
};
</script>

<style lang="stylus" scoped>
.el-button {
  margin-bottom: 20px;
}
</style>
