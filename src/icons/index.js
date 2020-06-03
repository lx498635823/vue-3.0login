import Vue from "vue";

import SvgIcon from "./SvgIcon.vue";
//创建全局组件
Vue.component("svg-icon", SvgIcon);

/**
 * require.context
 * 读取指定目录的所有文件
 * 三个参数
 * 1.指定目录
 * 2.是否遍历所有子级目录
 * 3.定义遍历文件的规则
 */
//解析图片文件
const req = require.context("./svg", false, /\.svg$/); //$在正则中表示结尾，读取结尾为.svg的文件
/**
 * es5写法
 * const requireAll = function(requireContext){
 *   return requireContext.keys().map(requireContext);
 * }
 *
 */

const requireAll = requireContext => {
  return requireContext.keys().map(requireContext);
};
requireAll(req);
