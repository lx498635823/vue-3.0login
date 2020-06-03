<template>
  <!-- 新增弹窗 -->
  <el-dialog
    title="新增"
    :visible.sync="newDialog"
    @close="close"
    width="520px"
  >
    <el-form :model="form">
      <el-form-item label="标题" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="类别" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="概括" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "info",
  data() {
    return {
      newDialog: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "70px"
    };
  },
  methods: {
    close() {
      // this.newDialog = false;
      //如果只需要修改父子件传的值则可以通过父组件添加修饰器直接updata修改
      this.$emit("update:flag", false);
      //如果回调时需要做逻辑处理就不能在父组件事用sync修饰器了
      this.$emit("close", false);
    }
  },
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    flag: {
      handler(newValue, oldValue) {
        this.newDialog = newValue;
      }
    }
  }
};
</script>
<style scoped></style>
