<template>
  <div>
    <el-dialog
      :title="addInfo.isAdd ? '添加管理员' : '编辑管理员'"
      :visible.sync="addInfo.isShow"
      center
      :before-close="cancel"
    >
      <el-form :model="form" :rules="rules">
        <el-form-item
          label="所属角色"
          :label-width="formLabelWidth"
          prop="roleid"
        >
          <el-select v-model="form.roleid" placeholder="请选择">
            <!-- 下拉框循环菜单列表 -->
            <el-option
              v-for="item in roleList"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form :model="form" :rules="rules">
        <el-form-item
          label="用户名称"
          prop="username"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
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
import { getUserAdd, getUserInfo, getUserEdit } from "../../util/axios";
export default {
  data() {
    return {
      form: {
        roleid: "",
        username: "",
        password: "",
        status: 1,
      },
      formLabelWidth: "120px",
      rules: {
        username: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
        roleid: [
          { required: true, message: "请选择所属角色", trigger: "blur" },
          
        ],
      },
    };
  },
  computed: {
    // 获取角色列表
    ...mapGetters({
      roleList: "role/getRoleList",
    }),
  },
  mounted() {
    // 减少对服务器的交互
    if (this.roleList.length == 0) {
      this.getRoleList();
      this.getCountAction();
    }
  },
  methods: {
    // 重置
    reset() {
      this.form = {
        roleid: "",
        username: "",
        password: "",
        status: 1,
      };
    },
    //   弹框取消
    cancel() {
      this.$emit("cancel", false);
      this.reset();
    },
    // 调取行动
    ...mapActions({
      getRoleList: "role/getRoleAction",
      getUserList: "user/getUserAction",
      getCountAction:'user/getCountAction'
    }),
    // 添加确定按钮
    add() {
      getUserAdd(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.getUserList();
          this.getCountAction();
          this.cancel();
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    look(uid) {
      // 调取查看接口
      getUserInfo({ uid }).then((res) => {
        if (res.data.code == 200) {
          this.form = res.data.list;
          this.form.uid = uid;
        }
      });
    },
    update() {
      getUserEdit(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.getUserList();
          this.getCountAction();
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
