<template>
  <div id="nav-warp">
    <h1 class="logo"><img src="../../../assets/logo.png" alt="" /></h1>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      router
    >
      <!--v-for和v-if不要一起用, template标签用v-for不会被解析,所以可以吧v-for放在template标签中,但是:key不能放在上面 -->
      <template v-for="(item, index) in routers">
        <el-submenu v-if="!item.hidden" :key="item.id" :index="index + ''">
          <!-- 主级菜单 -->
          <template slot="title">
            <svg-icon :iconClass="item.meta.icon" :className="item.meta.icon" />
            <span slot="title">{{ item.meta.name }}</span>
          </template>
          <!--子菜单  -->
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            :index="subItem.path"
          >
            {{ subItem.meta.name }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { ref, reactive, computed } from "@vue/composition-api";
export default {
  name: "navMenu",
  setup(props, { root }) {
    /**
     *定义data数据
     */
    // const isCollapse = ref(false);
    //获取路由
    const routers = reactive(root.$router.options.routes);
    /**
     *定义函数
     */

    /**
     * 监听导航栏状态
     *
     * isCollapse必须被调用才会被监听，如果上面没有调用绑定过该变量是无效的
     */
    //const isCollapse = computed(() => {
    //   return root.$store.state.isCollapse
    // });
    // 单行代码可以省略花括号和return
    const isCollapse = computed(() => root.$store.state.app.isCollapse);
    // //测试vuex
    // console.log(root.$store.state.count);
    // console.log(root.$store.getters.count);
    // root.$store.commit("SET_COUNT", 100);
    return {
      isCollapse,
      routers
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
.logo {
  // 块级元素想要居中需要margin ：auto 行级元素用text-align：center
  text-align: center;
  img {
    width: 92px;
    margin: 28px auto 25px;
    @include webkit(transition, all 0.3s ease 0s);
  }
}
#nav-warp {
  position: fixed;
  top: 0;
  left: 0;
  // width: $navWidth;
  height: 100vh;
  background-color: #344a5f;
  @include webkit(transition, all 0.3s ease 0s);
  svg {
    font-size: 20px;
    margin-right: 10px;
  }
}
.open {
  #nav-warp {
    width: $navWidth;
  }
}
.close {
  #nav-warp {
    width: $navWidthMin;
  }
  .logo img {
    width: 60%;
  }
}
</style>
