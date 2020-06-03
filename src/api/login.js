import service from "@/utils/request.js";
import {
  getToken
} from "@/utils/auth.js";
import qs from "qs";
/**
 * 获取验证码
 */
export function GetCode(data) {
  // var username = 10008025;
  // var password = 123456;
  // var data = {
  //   username: username,
  //   password: password
  // };
  //api地址
  return service.request({
    method: "post",
    url: "/getSms/",
    // 如果data:data变量名和传输的数据名相同可以省略为data如下
    data
    // data: qs.stringify(data)
  });
}
/**
 * 注册
 */
export function Register(data) {
  return service.request({
    method: "get",
    url: "/api/Products/Get",
    // 如果data:data变量名和传输的数据名相同可以省略为data如下
    data
    // data: qs.stringify(data)
  });
}
/**
 * 登录
 */
export function Login(data) {
  return service.request({
    method: "post",
    //测试
    // url: "/ac/login/mobileLogin.action",
    // header: {
    //   "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    // },
    url: "/ac/login/mobileLogin.action",
    // 如果data:data变量名和传输的数据名相同可以省略为data如下
    data: qs.stringify(data)
    // data: qs.stringify(data)
  });
}