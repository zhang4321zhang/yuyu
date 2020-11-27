<template>
  <div>
    <el-dialog
      :title="addInfo.isAdd ? '添加菜单' : '编辑菜单'"
      :visible.sync="addInfo.isShow"
      center
      :before-close="cancel"
    >
      <el-form :model="form" :rules="rules" ref="formDialog">
        <el-form-item
          prop="title"
          label="菜单名称"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="pid" label="上级菜单" :label-width="formLabelWidth">
          <el-select
            v-model="form.pid"
            placeholder="请选择"
            @change="changeMenu"
          >
            <el-option label="顶级菜单" :value="0"></el-option>
            <!-- 下拉框循环菜单列表 -->
            <el-option
              v-for="item in MenuList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="菜单类型" :label-width="formLabelWidth">
          <el-radio v-model="form.type" :label="1" disabled>目录</el-radio>
          <el-radio v-model="form.type" :label="2" disabled>菜单</el-radio>
        </el-form-item>

        <el-form-item
          label="菜单图标"
          :label-width="formLabelWidth"
          v-if="form.type === 1"
        >
          <el-select v-model="form.icon" placeholder="请选择">
            <!-- 下拉框循环菜单列表 -->
            <el-option
              v-for="item in iconList"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="菜单地址" :label-width="formLabelWidth" v-else>
          <el-select v-model="form.url" placeholder="请选择">
            <!-- 下拉框循环菜单列表 -->
            <el-option
              v-for="item in indexRoutes"
              :key="item.path"
              :label="item.name"
              :value="item.path"
            >
            </el-option>
          </el-select>
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
        <el-button
          v-if="addInfo.isAdd"
          @click="add('formDialog')"
          type="primary"
          >添 加</el-button
        >
        <el-button v-else @click="update('formDialog')" type="primary"
          >编 辑</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 引入封装好的接口
import { getMenuAdd, getMenuInfo, getMenuEdit } from "../../util/axios";
// 引入辅助性函数
import { mapActions, mapGetters } from "vuex";
// 引入封装好的二级路由
import { indexRoutes } from "../../router";
export default {
  data() {
    return {
      form: {
        title: "", //标题
        pid: 0, //上级分类编号 默认是0 是顶级
        icon: "", //图标
        type: 1, //类型 1目录2菜单
        url: "", //菜单地址
        status: 1, //状态 1正常2禁用
      },
      formLabelWidth: "120px",
      indexRoutes: indexRoutes,
      iconList: [
        "el-icon-user",
        "el-icon-s-goods",
        "el-icon-message-solid",
        "el-icon-s-flag",
      ],
      rules: {
        title: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        pid: [{ required: true, message: "请输入菜单名称", trigger: "blur" }],
      },
      value: true,
    };
  },
  computed: {
    // 获取菜单列表的值
    ...mapGetters({
      MenuList: "menu/getMenuList",
    }),
  },
  props: ["addInfo"],
  methods: {
    //封装一个重置事件
    reset() {
      this.form = {
        title: "", //标题
        pid: 0, //上级分类编号 默认是0 是顶级
        icon: "", //图标
        type: 1, //类型 1目录2菜单
        url: "", //菜单地址
        status: 1, //状态 1正常2禁用
      };
    },
    ...mapActions({
      getMenuList: "menu/getMenuListAction",
    }),
    // 取消事件
    cancel() {
      this.$emit("quxiao", false);
      // 调取重置事件
      this.reset();
    },
    // 查看一条事件
    look(id) {
      // 调取查看列表
      getMenuInfo({id}).then(res => {
        if (res.data.code == 200) {
          this.form = res.data.list;
          this.form.id = id;
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    update(formName){
      this.$refs[formName].validate(valid => {
        if (valid) {
          getMenuEdit(this.form).then(res => {
            // console.log(res);
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              // 关闭弹窗
              this.cancel();
              // 重新获取列表
              this.getMenuList();
            } else {
              this.$message.error(res.data.msg);
            }
          });
        } else {
          console.log("error submit");
          return false;
        }
      });
    },
    //添加事件
    add(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          getMenuAdd(this.form).then(res => {
            // console.log(res);
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              // 关闭弹窗
              this.cancel();
              // 重新获取列表
              this.getMenuList();
            } else {
              this.$message.error(res.data.msg);
            }
          });
        } else {
          console.log("error submit");
          return false;
        }
      });
    },
    // 下拉菜单修改触发的事件
    changeMenu() {
      // 通过用户是否选择顶级菜单来渲染菜单类型
      if (this.form.pid == 0) {
        this.form.type = 1;
      } else {
        this.form.type = 2;
      }
    },
  },
};
</script>

<style lang="" scoped>
</style>
