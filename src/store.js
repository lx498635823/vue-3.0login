// import Vue from "vue";
// import Vuex from "vuex";
// // import { Login } from "@/api/login.js";
// import { Promise } from "core-js";
// Vue.use(Vuex);

// export default new Vuex.Store({
//   //存储数据
//   state: {
//     isCollapse:
//       JSON.parse(window.sessionStorage.getItem("isCollapse")) || false,
//     count: 10
//   },
//   //获取数据，也可以当成计算属性进行其他处理
//   getters: {
//     count: state => state.count + 10
//   },
//   //修改属性
//   mutations: {
//     SET_COLLAPSE(state) {
//       state.isCollapse = !state.isCollapse;
//       window.sessionStorage.setItem(
//         "isCollapse",
//         JSON.stringify(state.isCollapse)
//       );
//     }
//     // SET_COUNT(state, value) {
//     //   state.count = value;
//     //   console.log(state.count);
//     // }
//   },
//   //异步
//   actions: {
//     //登录
//     login(content, loginData) {
//       return new Promise((resolve, reject) => {
//         //接口
//         Login(loginData)
//           .then(response => {
//             resolve(response);
//           })
//           .catch(error => {
//             reject(error);
//           });
//       });
//     }
//   },
//   modules: {}
// });
