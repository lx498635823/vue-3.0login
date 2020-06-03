<template>
  <div id="header-warp">
    <div class="full-left header-icon" @click="navStatus">
      <svg-icon iconClass="menu" class="menu" />
    </div>
    <div class="full-right">
      <div class="full-left user-info">{{ username }}</div>
      <div class="full-left header-icon" @click="exit">
        <svg-icon iconClass="exit" class="exit" />
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/composition-api";
export default {
  name: "layoutHeader",
  setup (props, { root }) {
    const username = computed(() => root.$store.state.app.username);
    console.log(username);
    console.log(root.$store.state.app.username);
    const navStatus = () => {
      root.$store.commit("app/SET_COLLAPSE");
    };
    //退出
    const exit = () => {
      root.$store
        .dispatch("app/exit")
        .then(() => {
          root.$router.push({
            name: "Login"
          });
        })
        .catch(error => { });
    };
    return {
      navStatus,
      username,
      exit
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#header-warp {
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  left: $navWidth;
  height: $navHeigth;
  background-color: #fff;
  line-height: 75px;
  @include webkit(box-shadow, 0 3px 16px 0 rgba(0, 0, 0, 0.1));
  @include webkit(transition, all 0.3s ease 0s);
}
.open {
  #header-warp {
    left: $navWidth;
  }
}
.close {
  #header-warp {
    left: $navWidthMin;
  }
}
.header-icon {
  padding: 0 32px;
  svg {
    margin-bottom: -8px;
    font-size: 25px;
    cursor: pointer;
  }
}
.user-info {
  height: 100%;
  padding: 0 32px;
  border-right: 1px solid #ededed;
}
</style>
