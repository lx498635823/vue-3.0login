import { MessageBox } from "element-ui";
import { ref, reactive, computed } from "@vue/composition-api";
/**
 * 全局方法3.0
 */
export function global() {
  const aaa = ref("111");
  const confirm = data => {
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
      .catch(() => {
        data.catchFn && data.catchFn();
      });
  };
  return {
    confirm,
    aaa
  };
}
