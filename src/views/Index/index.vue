<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="select()">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { ref, reactive, onMounted } from "@vue/composition-api";
import { Select } from "@/api/login.js";
import { getToken, getUser } from "@/utils/auth.js";
import local from "@/utils/local.js";
export default {
  name: "index",

  setup(props, { refs, root }) {
    const formInline = reactive({
      user: "",
      region: ""
    });
    const select = () => {
      let data = formInline.user;
      let token = local.get("token");
      let username = local.get("username");
      console.log(token);
      console.log(username);
      Select(data, token, username)
        .then(response => {
          console.log(response);
        })
        .catch(error => {});
    };
    return {
      formInline,
      select
    };
  }
};
</script>
