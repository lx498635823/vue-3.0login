/**
 * 全局方法
 */
import { MessageBox } from "element-ui";
export default {
  install(Vue, options) {
    // Vue.prototype.aaa = function() {
    //   console.log("123132");
    // };
    Vue.prototype.confirm = data => {
      MessageBox.confirm(data.content, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          //判断是否传入函数，如果传入则执行
          //下面这种写法如果&&前面为true则会执行后面如果为false则不会执行
          data.fn && data.fn();
          // if (data.fn) {
          //   data.fn();
          // }
        })
        .catch(() => {});
    };
  }
};
