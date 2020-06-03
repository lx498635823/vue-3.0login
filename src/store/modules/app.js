import {
  setToken,
  setUser,
  getUser,
  removeUser,
  removeToken
} from "@/utils/auth.js";
import {
  Login
} from "@/api/login.js";
//存储数据
const state = {
  isCollapse: JSON.parse(window.sessionStorage.getItem("isCollapse")) || false,
  count: 10,
  toKen: "",
  username: getUser() || ""
};
//获取数据，也可以当成计算属性进行其他处理
const getters = {
  isCollapse: state => state.isCollapse,
  count: state => state.count + 10
};
//修改属性
const mutations = {
  SET_COLLAPSE(state) {
    state.isCollapse = !state.isCollapse;
    window.sessionStorage.setItem(
      "isCollapse",
      JSON.stringify(state.isCollapse)
    );
  },
  SET_TOKEN(state, value) {
    state.toKen = value;
  },
  SET_USERNAME(state, value) {
    state.username = value;
  }
  // SET_COUNT(state, value) {
  //   state.count = value;
  //   console.log(state.count);
  // }
};
//异步
const actions = {
  //登录
  login(content, loginData) {
    return new Promise((resolve, reject) => {
      //接口
      Login(loginData)
        .then(response => {
          let data = response.data;
          console.log(data.data.token);
          resolve(response);
          content.commit("SET_TOKEN", data.data.token);
          content.commit("SET_USERNAME", data.data.username);
          setToken(data.data.token);
          setUser(data.data.username);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  exit(content) {
    return new Promise((resolve, reject) => {
      content.commit("SET_TOKEN", "");
      content.commit("SET_USERNAME", "");
      removeUser();
      removeToken();
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};