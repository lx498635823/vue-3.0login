<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="18">
        <h1 style="font-size: 30px;margin-bottom: 10px;margin-top: -15px;">入口门禁</h1>
        <lable style="font-size: 22px;">车牌号: 12123123</lable>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="ces">查询</el-button>
      </el-col>
    </el-row>
    <hr style="margin-left:-30px; margin-top:15px; margin-bottom:30px" />
    <div class="body">
      <div class="image">
        <div style="margin-left:37px; font-size:20px">实时拍照</div>
        <el-image
          :src="require('../../image/JSP/互联网大数据商务蓝色科技背景海报_画板 1.jpg')"
          style="width: 700px; height: 400px"
          fit="cover"
        ></el-image>
      </div>
      <div class="video">
        <div style="margin-left:37px; font-size:20px">实时监控</div>
        <el-image
          :src="require('../../image/JSP/互联网大数据商务蓝色科技背景海报_画板 1.jpg')"
          style="width: 700px; height: 400px;"
          fit="cover"
        ></el-image>
      </div>
    </div>
    <div class style="width:800px;display:flex;margin-top:20px">
      <div style="width:100px;box-shadow: 0 0 1px #000;">
        <table width="100%">
          <tr>
            <td class="black_title">钢卷号:</td>
          </tr>
          <tr>
            <td class="left_title">库位:</td>
          </tr>
        </table>
      </div>
      <div
        v-for="(item, index) in tableData"
        :key="index"
        style="width:100px;box-shadow: 0 0 1px #000;"
      >
        <table width="100%">
          <table width="100%">
            <tr>
              <td class="black_title1" v-if="item.val1">{{item.val1}}</td>
            </tr>
            <tr>
              <td class="td_content" v-if="item.val2">{{item.val2}}</td>
            </tr>
            <tr>
              <td class="black_title2" v-if="item.val3">{{item.val3}}</td>
            </tr>
            <tr>
              <td class="td_content" v-if="item.val4">{{item.val4}}</td>
            </tr>
            <tr>
              <td class="black_title3" v-if="item.val5">{{item.val5}}</td>
            </tr>
            <tr>
              <td class="td_content" v-if="item.val6">{{item.val6}}</td>
            </tr>
            <tr>
              <td class="black_title4" v-if="item.val7">{{item.val7}}</td>
            </tr>
            <tr>
              <td class="td_content" v-if="item.val8">{{item.val8}}</td>
            </tr>
            <tr>
              <td class="black_title5" v-if="item.val9">{{item.val9}}</td>
            </tr>
            <tr>
              <td class="td_content" v-if="item.val10">{{item.val10}}</td>
            </tr>
          </table>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { Register } from "../../api/login";
import { ref, reactive } from "@vue/composition-api";
export default {
  setup (props, { root }) {
    const url = ref("../../image/JSP/互联网大数据商务蓝色科技背景海报_画板 1.jpg");
    const tableData = reactive(
      [{ val1: 123456, val2: 789456 }, { val3: 789456, val4: 789456 }, { val5: 789456, val6: 789456 }, { val7: 789456, val8: 789456 }, { val9: 789456, val10: 789456 }]
    );
    const ces = () => {
      let data = {
        id: 1,
        name: "王玉杰"
      };
      Register(data);
    };
    return {
      ces,
      url,
      tableData
    };
  }
};
</script>
<style lang="scss" scoped>
.title {
  display: flex;
  width: 100%;
}
.title1 {
  display: row;
  justify-content: space-between;
}
.title2 {
  display: row;
  justify-content: space-between;
}
.body {
  display: flex;
  width: 100%;
}
.image {
  display: row;
  width: 50%;
}
.video {
  display: row;
  width: 50%;
}
.black_title {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid black;
  text-align: center;
}
.black_title1 {
  width: 100%;
  padding-top: 8px;
  padding-bottom: 15px;
  border-bottom: 1px solid black;
  text-align: center;
}
.black_title2 {
  width: 100%;
  padding-top: 5px;
  padding-bottom: 15px;
  border-bottom: 1px solid black;
  text-align: center;
}
.black_title3 {
  width: 100%;
  padding-top: 2px;
  padding-bottom: 15px;
  border-bottom: 1px solid black;
  text-align: center;
}
.black_title4 {
  width: 100%;
  padding-bottom: 13px;
  border-bottom: 1px solid black;
  text-align: center;
}
.black_title5 {
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  text-align: center;
}
.td_content {
  padding-top: 10px;
  text-align: center;
}
.left_title {
  padding-top: 10px;
  text-align: center;
}
</style>
