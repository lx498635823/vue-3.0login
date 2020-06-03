<template>
  <!-- 新增弹窗 -->
  <el-dialog
    title="新增"
    :visible.sync="newDialog"
    @close="close"
    width="520px"
  >
    <el-form :model="form">
      <el-form-item label="类型" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" :label-width="formLabelWidth">
        <el-input
          v-model="form.name"
          autocomplete="off"
          placeholder="请输入标题"
        ></el-input>
      </el-form-item>
      <el-form-item label="概括" :label-width="formLabelWidth">
        <el-input
          v-model="form.name"
          autocomplete="off"
          type="textarea"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="close">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { ref, reactive, watch } from "@vue/composition-api";
export default {
  name: "info",
  //单项数据流， 父级  => 子级 不能反向修改
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const newDialog = ref(false);
    const form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: ""
    });
    const formLabelWidth = ref("70px");
    //watch
    watch(() => {
      newDialog.value = props.flag;
    });
    //函数
    const close = () => {
      newDialog.value = false;
      //如果只需要修改父子件传的值则可以通过父组件添加修饰器直接updata修改
      emit("update:flag", false);
      //如果回调时需要做逻辑处理就不能在父组件事用sync修饰器了
      //emit("close", false);
    };
    return {
      // 基本类型变量
      newDialog,
      formLabelWidth,
      //object类型变量
      form,
      //函数
      close
    };
  }

  // watch: {
  //   flag: {
  //     handler(newValue, oldValue) {
  //       this.newDialog = newValue;
  //     }
  //   }
  // }
};
</script>
<style scoped></style>
