<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
import { ref, computed } from "@vue/composition-api";
export default {
  name: "svgIcon",
  //简单写法
  // props: ["iconClass", "className"],
  props: {
    iconClass: {
      type: String, //定义接收的值的类型
      default: "" //设置默认值如果为传参则为默认值
      // required: true, //设置是否必须传参如果为true则必须传值
      // validator: value => {
      //   //设置校验规则
      //   return value > 0;
      // }
    },
    className: {
      type: String, //定义接收的值的类型
      default: "" //设置默认值如果为传参则为默认值
    }
  },
  setup(props) {
    /**
     * computed 监听属性变化并且计算属性
     */
    const iconName = computed(() => `#icon-${props.iconClass}`);
    const svgClass = computed(() => {
      if (props.className) {
        return `svg-icon ${props.className}`;
      } else {
        return `svg-icon`;
      }
    });
    return {
      iconName,
      svgClass
    };
  }
};
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  // 设置这个才能改变颜色
  fill: currentColor;
}
</style>
