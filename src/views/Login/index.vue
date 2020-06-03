<template>
  <div id="login">
    <div class="login-warp">
      <ul class="menu-tab">
        <li class="tittle">登录</li>
      </ul>
      <el-form :model="ruleForm" status-icon ref="zidingyi" class="form" size="medium ">
        <el-form-item prop="username" class="item-form">
          <!-- label中的for可以写input标签中的id会点击label中内容会自动获取input中焦点 -->
          <label for="username">邮箱</label>
          <el-input id="username" type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="password" class="item-form">
          <label for="password">密码</label>
          <el-input
            id="password"
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <el-form-item prop="passwords" class="item-form" v-show="show">
          <label for="passwords">重复密码</label>
          <el-input
            id="passwords"
            type="password"
            v-model="ruleForm.passwords"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <!-- <el-form-item prop="code" class="item-form">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input v-model="ruleForm.code"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button
                type="success"
                class="block"
                :disabled="codeButtonStatus"
                @click="getCode()"
              >{{ getCodeText }}</el-button>
            </el-col>
          </el-row>
        </el-form-item>-->

        <el-form-item>
          <!-- click中传的参数需要和element标签中的ref值相同 -->
          <el-button type="danger" @click="login()" class="margin-top-25 block">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { Register } from "@/api/login.js";
import { ref, reactive, onMounted } from "@vue/composition-api";
import axios from "axios";
export default {
  name: "login",
  //setup内存放data数据，生命周期函数贺自定义函数
  // setup(props, context) {
  /**
   * 相当于2.0中
   * root: (...)  --this.$root
   * parent: (...) --this.$parent
   * refs: (...) --this.$refs
   * attrs: (...) --this.$attrs
   * listeners: (...) --this.$listeners
   * isServer: (...) --this.$isServer
   * ssrContext: (...) --this.$ssrContext
   * emit: (...) --this.$emit
   */
  // console.log(context);
  //解构！！！！！！！省略context
  setup (props, { refs, root }) {
    // //验证用户名
    // let validateUsername = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请输入邮箱"));
    //   }
    //   if (!validateEmail(value)) {
    //     callback(new Error("用户名格式不正确"));
    //   } else {
    //     callback();
    //   }
    // };
    // //验证密码
    // let validatePassword = (rule, value, callback) => {
    //   ruleForm.password = stripscript(value);
    //   if (value === "") {
    //     callback(new Error("请输入密码"));
    //   } else if (validatePass(value)) {
    //     callback(new Error("密码为6-20为的数字字母"));
    //   } else {
    //     callback();
    //   }
    // };
    // //验证重复密码
    // let validatePasswords = (rule, value, callback) => {
    //   if (type.value == "登录") {
    //     callback();
    //   }
    //   ruleForm.passwords = stripscript(value);
    //   if (value === "") {
    //     callback(new Error("请再次输入密码"));
    //   } else if (ruleForm.password != ruleForm.passwords) {
    //     callback(new Error("两次密码不一样"));
    //   } else {
    //     callback();
    //   }
    // };
    // //验证码
    // let validateCode = (rule, value, callback) => {
    //   if (value === "") {
    //     return callback(new Error("请输入验证码"));
    //   } else if (validateC(value)) {
    //     callback(new Error("验证码格式有误"));
    //   } else {
    //     callback();
    //   }
    // };
    //reactive用来声明对象类型数据如object，json等
    const menuTab = reactive([
      { text: "登录", current: true },
      { text: "注册", current: false }
    ]);
    //验证码按钮状态
    const codeButtonStatus = ref(false);
    //登录按钮是否可按
    const show1 = ref(true);
    //定义倒计时
    const timeout = ref();
    //想要获取type的值需要type.value才行，修改也一样，对象属性不需要
    const type = ref("登录");
    const show = ref(false);
    const getCodeText = ref("获取验证码");
    const ruleForm = reactive({
      username: "",
      password: "",
      passwords: "",
      code: ""
    });
    //表单验证
    // const rules = reactive({
    //   username: [{ validator: validateUsername, trigger: "blur" }],
    //   password: [{ validator: validatePassword, trigger: "blur" }],
    //   passwords: [{ validator: validatePasswords, trigger: "blur" }],
    //   code: [{ validator: validateCode, trigger: "blur" }]
    // });
    // 定义函数
    const toggleMenu = data => {
      menuTab.forEach((ele, index) => {
        ele.current = false;
      });
      data.current = true;
      if (data.text === "注册") {
        show.value = true;
        type.value = "注册";
      } else {
        type.value = "登录";
        show.value = false;
      }
      //element中的重置方法，refs后写form表单中的ref值（名称可自定义）
      //json写法，一种是直接.
      // refs.zidingyi.resetFields();
      //另一种是["名称"]
      clearFormData();
      //调用清除定时器方法
      clearCountDown();
    };
    //重置form表单中用户名等内容
    const clearFormData = () => {
      refs["zidingyi"].resetFields();
    };
    // 表单方法（element自带）
    // //提交表单！！！！！
    // const submitForm = formName => {
    //   //解构之后省略context
    //   //正常写法
    //   //refs['zidingyi'].validate(valid => {
    //   //用formName替换掉了
    //   refs[formName].validate(valid => {
    //     if (valid) {
    //       login();
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // };
    // /**
    //  * 注册
    //  */
    // const register = () => {
    //   let requestData = {
    //     username: ruleForm.username,
    //     password: sha1(ruleForm.password),
    //     code: ruleForm.code,
    //     module: "register",
    //     abc: "123456"
    //   };
    //   Register(requestData)
    //     .then(response => {
    //       root.$message({
    //         message: response.data.message,
    //         type: "success"
    //       });
    //       toggleMenu(menuTab[0]);
    //     })
    //     .catch(error => { });
    // };
    /**
     * 登录
     */
    const login = () => {

      let loginData = {
        username: ruleForm.username,
        password: ruleForm.password
      };
      root.$store
        .dispatch("app/login", loginData)
        .then(response => {
          console.log("response123");
          root.$message({
            message: "登陆成功",
            type: "success"
          });
          root.$router.push({
            name: "Console"
          });
        })
        .catch(error => { });
      // Login(loginData)
      //   .then(response => {
      //     root.$message({
      //       message: response.data.message,
      //       type: "success"
      //     });
      //     root.$router.push({
      //       name: "Console"
      //     });
      //   })
      //   .catch(error => {});
    };
    // /**
    //  * 获取验证码
    //  */
    // const getCode = () => {
    //   //前端进行判断是否输入邮箱并提示
    //   if (ruleForm.username == "") {
    //     //this.$message.error("请输入用户名");
    //     root.$message.error("请输入邮箱");
    //     return false;
    //   }
    //   //校验邮箱格式是否正确

    //   if (validateEmail(!ruleForm.username)) {
    //     root.$message.error("邮箱格式不正确");
    //     return false;
    //   }
    //   //接收login（request.js）返回的参数
    //   let formData = {
    //     username: ruleForm.username,
    //     module: type.value == "注册" ? "register" : "login"
    //   };
    //   GetCode(formData)
    //     .then(response => {
    //       root.$message({
    //         message: response.data.message,
    //         type: "success"
    //       });
    //       getCodeText.value = "发送中";
    //       codeButtonStatus.value = true;
    //       show1.value = false;
    //       //调用倒计时方法
    //       countDown(60);
    //       console.log(response);
    //     })
    //     .catch(error => { });
    // };
    //创建倒计时方法
    const countDown = number => {
      //判断倒计时方法时候存在
      if (timeout.value) {
        //如果存在则清除
        clearInterval(timeout.value);
      }
      //setTimeout 只执行一次   对应清除clearTimeout(变量)
      //setInterval 重复执行，需要条件才会停止   对应清除clearInterval(变量)
      //接收number
      let time = number;
      timeout.value = setInterval(() => {
        time--;
        if (time === 0) {
          clearInterval(timeout.value);
          getCodeText.value = "再次发送";
          codeButtonStatus.value = false;
        } else {
          //es6拼接写法
          getCodeText.value = `发送中${time}秒`;
        }
      }, 1000);
    };
    //清楚倒计时
    const clearCountDown = () => {
      //初始话获取验证码
      getCodeText.value = "获取验证码";
      //提前关闭获取验证码的定时器
      clearInterval(timeout.value);
      //获取验证码可用
      codeButtonStatus.value = false;
      //注册和登录按钮变灰
      show1.value = true;
    };
    //生命周期
    //挂在完成后
    onMounted(() => { });
    return {
      toggleMenu,
      type,
      show,
      menuTab,
      ruleForm,
      show1,
      codeButtonStatus,
      getCodeText,
      countDown,
      login
    };
  }
};
</script>
<style lang="scss" scoped>
//登录
.tittle {
  font-size: 30px !important;
  padding-top: 30px;
}
//scoped作用是只在当前文件有效
#login {
  background-color: #344a5f;
  // vh单位代表当前页面可视区域窗口的百分比~！！
  height: 100vh;
}
.login-warp {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    height: 36px;
    font-size: 14px;
    border-radius: 2px;
    color: #ffffff;
    // // 改变鼠标选中时的手势
    // cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.form {
  margin-top: 29px;
  .item-form {
    margin-bottom: 13px;
    label {
      display: block;
      margin-bottom: 3px;
      font-size: 14px;
      color: #fff;
    }
  }
  .block {
    width: 100%;
    display: block;
  }
}
</style>
