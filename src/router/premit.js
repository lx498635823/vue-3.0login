import router from "./index";
import {
  getToken,
  removeToken,
  removeUser
} from "../utils/auth";
import store from "../store/index";
//创建白名单
//indexOf方法，判断数组中是否存在指定的某个对象，如果不存在，则返回-1
const whiteRouter = ["/login"];
//路由守卫
// router.beforeEach((to, from, next) => {
//   if (getToken()) {
//     if (to.path === "/login") {
//       removeToken();
//       removeUser();
//       store.commit("app/SET_TOKEN", "");
//       store.commit("app/SET_USERNAME", "");
//       next();
//     } else {
//       next();
//       console.log("存在");
//     }
//   } else {
//     console.log("不存在");
//     if (whiteRouter.indexOf(to.path) !== -1) {
//       //判断页面是否需要登陆状态
//       console.log("存在");
//       next();
//     } else {
//       console.log("123123");
//       next("/login");
//     }
//   }
// });