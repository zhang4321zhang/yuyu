<template>
  <div>
    <el-dialog
      :title="addInfo.isAdd ? '添加角色' : '编辑角色'"
      :visible.sync="addInfo.isShow"
      center
      :before-close="cancel"
    >
      <el-form :model="form" :rules="rules">
        <el-form-item
          label="角色名称"
          prop="rolename"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="角色权限" :label-width="formLabelWidth">
          <el-tree
            :data="menuList"
            default-expand-all
            node-key="id"
            ref="tree"
            :props="{
              children: 'children',
              label: 'title',
            }"
            :default-checked-keys="[]"
            show-checkbox
          >
          </el-tree>
        </el-form-item>

        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button @click="add" type="primary" v-if="addInfo.isAdd"
          >添 加</el-button
        >
        <el-button @click="update" type="primary" v-else>编 辑</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 引入复制函数
import { mapGetters, mapActions } from "vuex";
import { getRoleAdd, getRoleInfo, getRoleEdit } from "../../util/axios";
export default {
  data() {
    return {
      form: {
        rolename: "",
        menus: "",
        status: 1,
      },
      formLabelWidth: "120px",
      rules: {
        rolename: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    // 获取菜单列表
    ...mapGetters({
      menuList: "menu/getMenuList",
    }),
  },
  mounted() {
    // 减少对服务器的交互
    if (this.menuList.length == 0) {
      this.getMenuList();
    }
  },
  methods: {
    // 重置
    reset() {
      this.form = {
        rolename: "",
        status: 1,
      };
      this.$refs.tree.setCheckedKeys([]);
    },
    //   弹框取消
    cancel() {
      this.$emit("cancel", false);
      this.reset();
    },
    // 调取行动
    ...mapActions({
      getMenuList: "menu/getMenuListAction",
      getRoleList: "role/getRoleAction",
    }),
    // 添加确定按钮
    add() {
      // this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      this.form.menus = this.$refs.tree.getCheckedKeys().join(',')
      getRoleAdd(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.getRoleList();
          this.cancel();
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    look(id) {
      // 调取查看接口
      getRoleInfo({ id }).then((res) => {
        if (res.data.code == 200) {
          this.form = res.data.list;
          // this.form.menus = this.$refs.tree.setCheckedKeys(
          //   JSON.parse(this.form.menus)
          // );
          this.form.menus=this.form.menus?this.$refs.tree.setCheckedKeys(this.form.menus.split(',')):[]
          this.form.id = id;
        }
      });
    },
    update() {
      // this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      this.form.menus = this.$refs.tree.getCheckedKeys().join(',')
      getRoleEdit(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.getRoleList();
          this.cancel();
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
  },
  props: ["addInfo"],
};
</script>

<style lang="" scoped>
</style>
