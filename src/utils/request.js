/**
 * .evn.production对应生产环境，.evn.development对应开发环境，内部定义的变量都是固定VUE_APP_开头接变量名然后等于值
 * 在其它页面也可以使用该变量
 * 使用方法process.evn.变量名
 * 如下
 * 如果环境内的值发生改变需要重启项目
 */
// console.log(process.evn.VUE_APP_ABC);
/**
 * 用于定义拦截器
 */
import axios from "axios";
import {
  getToken,
  getUser
} from "@/utils/auth.js";
import {
  Message
} from "element-ui";
const BASEURL = process.env.NODE_ENV === "production" ? "" : "/devApi";
//创建axios同时赋给变量service
const service = axios.create({
  baseURL: BASEURL,
  timeout: 8000
  // headers: {
  //   "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  // }
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // // 在发送请求之前做些什么
    //后台需要前端这边传相关的信息（在消息头中）
    //token，username等
    let token = getToken();
    let username = getUser();
    if (token && username) {
      //   // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = token;
      config.headers["X-Username"] = username;
    }
    //添加完成后需要return
    // config.headers["Tokey"] = token;
    // config.headers["UserName"] = username;
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    //promise.reject必然会跑.catch
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    //对响应数据做点什么
    let data = response.data;
    // 如果resCode不为零则数据异常（后端提供~也可以直接在前端进行判定避免能源浪费）
    // if (data.resCode != 0) {
    // Message.error(data.message);
    //将响应异常抛出，和下面error方法一样
    // promise.reject必然会跑.catch;
    // return Promise.reject(data);
    // } else {
    //如果没有异常，则正常返还response
    return response;
    // 如果是Promise.resolve必然会跑.then
    // return Promise.resolve;
    // }
    //测试
    // return response;
  },
  function (error) {
    // 对响应错误做点什么
    //promise.reject必然会跑.catch
    return Promise.reject(error);
  }
);

export default service;