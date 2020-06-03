<template>
  <div id="main-warp">
    <div class="main-content">
      <div class="content">
        <!-- 可以放router，会显示children的第一个,会对应当前router的children -->
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#main-warp {
  height: 100vh;
  // position: fixed;
  // left: $navWidth;
  // top: $navHeigth;
  // bottom: 0;
  // right: 0;
  // -webkit-box-sizing: border;
  // border: 30px solid #f7f7f7;
  // border-bottom: none;
}
.main-content {
  width: 100%;
  height: 100%;
  padding-right: 30px;
  padding-top: $layoutHeader + 30;
  padding-left: $navWidth + 30;
  @include webkit(box-sizing, border-box);
  @include webkit(transition, all 0.3s ease 0s);
}
.open {
  .main-content {
    padding-left: $navWidth + 30;
  }
}
.close {
  .main-content {
    padding-left: $navWidthMin + 30;
  }
}
.content {
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-left: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
}
</style>
