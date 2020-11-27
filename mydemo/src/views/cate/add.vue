<template>
  <div>
    <el-dialog
      :title="addInfo.isAdd ? '添加菜单' : '编辑菜单'"
      :visible.sync="addInfo.isShow"
      center
      :before-close="cancel"
    >
      <el-form :model="form" :rules="rules" ref="formDialog">
        <el-form-item prop="pid" label="上级分类" :label-width="formLabelWidth">
          <el-select v-model="form.pid" placeholder="请选择">
            <el-option :value="0" label="顶级分类"></el-option>
            <!-- 下拉框循环菜单列表 -->
            <el-option
              v-for="item in cateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          prop="catename"
          label="分类名称"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.catename" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="图片" :label-width="formLabelWidth">
          <el-upload
            action="#"
            list-type="picture-card"
            :on-preview="onPreview"
            :on-remove="onRemove"
            :auto-upload="false"
            :on-change="onChange"
            :file-list="fileList"
            :limit="1"
            :on-exceed="onExceed"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
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
import { getCateAdd, getCateInfo, getCateEdit } from "../../util/axios";
// 引入辅助性函数
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {
        pid: 0, //上级分类编号 默认是0 是顶级
        catename: "",
        img: "",
        status: 1,
      },
      formLabelWidth: "120px",
      dialogImageUrl: "",
      dialogVisible: false,
      imgUrl: "",
      fileList: [],
      rules: {
        catename: [
          { required: true, message: "请输入分类名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        pid: [{ required: true, message: "请选择上级分类", trigger: "blur" }],
      },
      value: true,
    };
  },
  computed: {
    // 获取菜单列表的值
    ...mapGetters({
      cateList: "cate/getCateList",
    }),
  },
  props: ["addInfo"],
  methods: {
    // 当图片上传是触发的文件
    onChange(file) {
      this.imgUrl = file.raw;
    },
    // 图片预览
    onPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    onRemove(file, fileList) {},
    onExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择1个文件，本次选择了${files.length}个文件，共选择了${
          files.length + fileList.length
        }个文件`
      );
    },
    //封装一个重置事件
    reset() {
      this.form = {
        pid: 0, //上级分类编号 默认是0 是顶级
        catename: "",
        img: "",
        status: 1,
      };
      this.fileList = [];
    },
    ...mapActions({
      getCateList: "cate/getCateListAction",
    }),
    // 取消事件
    cancel() {
      this.$emit("quxiao", false);
      // 调取重置事件
      this.reset();
      console.log(this.fileList, 222);
    },
    // 查看一条事件
    look(id) {
      // 调取查看列表
      getCateInfo({ id }).then((res) => {
        if (res.data.code == 200) {
          console.log(res);
          this.form = res.data.list;
          //当前表单没有id 创建一个id，给确定提交用
          this.form.id = id;
          //把图片格式进行转化
          this.fileList = this.form.img
            ? [{ url: `${this.$imgUrl}${this.form.img}` }]
            : [];
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
    update(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = this.form;
          let file = new FormData();
          //必须通过append 去添加它的属性
          for (let i in data) {
            file.append(i, data[i]);
          }

          this.imgUrl = this.imgUrl ? this.imgUrl : this.form.img;
          file.append("img", this.imgUrl);
          getCateEdit(file).then((res) => {
            console.log(res, "修改响应");
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              //关闭弹框
              this.cancel();

              //重新获取列表
              this.getCateList();
            } else {
              this.$message.error(res.data.msg);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //添加事件
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //添加逻辑
          // console.log(this.form, "表单提交");
          //我们的参数不能用form表单，我们要FormData对象形式
          //把普通表单改成FormData
          let data = this.form;
          let file = new FormData();
          //必须通过append 去添加它的属性
          for (let i in data) {
            file.append(i, data[i]);
          }
          //添加img参数
          file.append("img", this.imgUrl);
          //直接打印FormData不好用，要用get去取值
          //console.log(file.get('catename'),'文件')

          //调取添加接口
          getCateAdd(file).then((res) => {
            console.log(res, "添加响应");
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              //关闭弹框
              this.cancel();
              // this.fileList = [];
              //重新获取列表
              this.getCateList();
            } else {
              this.$message.error(res.data.msg);
            }
          });
        } else {
          console.log("error submit!!");
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
