<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="18">
        <h1 style="font-size: 30px;margin-bottom: 10px;">1跨停车位</h1>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="ces">刷新</el-button>
      </el-col>
    </el-row>
    <hr style="margin-left:-30px; margin-top:15px; margin-bottom:30px" />
    <!-- 1车位 -->
    <div>
      <el-row :gutter="0">
        <el-col :span="1">
          <div style="width:100%-2px;height:170px;border:2px solid black;">
            <div style="text-align: center;margin-top:60px">1车位</div>
            <div style="text-align: center;">有车</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div
            style="width:100%-2px;height:170px;border-top:2px solid black;2px solid black;border-bottom:2px solid black;border-right:2px solid black;"
          >
            <el-row :gutter="0">
              <el-col :span="4">
                <div
                  style="text-align: center;width:50px;height:32px;border-bottom:2px solid black;border-right:2px solid;line-height:32px;"
                >1</div>
                <div
                  style="text-align: center;width:50px;height:32px;border-bottom:2px solid black;border-right:2px solid;line-height:32px"
                >2</div>
                <div
                  style="text-align: center;width:50px;height:32px;border-bottom:2px solid black;border-right:2px solid;line-height:32px"
                >3</div>
                <div
                  style="text-align: center;width:50px;height:32px;border-bottom:2px solid black;border-right:2px solid;line-height:32px"
                >4</div>
                <div
                  style="text-align: center;width:50px;height:34px;border-right:2px solid;line-height:34px"
                >5</div>
              </el-col>
              <el-col :span="20">
                <div
                  style="text-align:center;width:277px;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px"
                >钢卷号顺序</div>
                <div
                  style="text-align:center;width:277px;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px"
                >顺序1</div>
                <div
                  style="text-align:center;width:277px;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px"
                >顺序11</div>
                <div
                  style="text-align:center;width:277px;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px"
                >顺序111</div>
                <div
                  style="text-align:center;width:277px;height:34px;line-height:34px;margin-left:-3px"
                >顺序1111</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="18">
          <div>
            <div
              style="text-align:center;width:100%;height:66px;line-height:66px;margin-left:-3px;border-top:2px solid black;border-bottom:2px solid black;border-right:2px solid black;"
            >
              <label>车牌号:</label>
              <label>冀B5个8</label>
            </div>
          </div>
          <div>
            <el-row :gutter="0">
              <el-col :span="5">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >钢卷号</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
              <el-col :span="5">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >垛位号</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
              <el-col :span="4">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >重量</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
              <el-col :span="5">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >合同号</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
              <el-col :span="5">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >操作状态</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 2车位 -->
    <div style="margin-top:50px">
      <el-row :gutter="0">
        <el-col :span="1">
          <div style="width:100%-2px;height:170px;border:2px solid black;">
            <div style="text-align: center;margin-top:60px">1车位</div>
            <div style="text-align: center;">有车</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div
            style="width:100%-2px;height:170px;border-top:2px solid black;2px solid black;border-bottom:2px solid black;border-right:2px solid black;"
          >
            <el-row :gutter="0">
              <el-col :span="4">
                <div
                  style="text-align: center;width:50px;height:32px;border-bottom:2px solid black;border-right:2px solid;line-height:32px;"
                >1</div>
                <div
                  style="text-align: center;width:50px;height:32px;border-bottom:2px solid black;border-right:2px solid;line-height:32px"
                >2</div>
                <div
                  style="text-align: center;width:50px;height:32px;border-bottom:2px solid black;border-right:2px solid;line-height:32px"
                >3</div>
                <div
                  style="text-align: center;width:50px;height:32px;border-bottom:2px solid black;border-right:2px solid;line-height:32px"
                >4</div>
                <div
                  style="text-align: center;width:50px;height:34px;border-right:2px solid;line-height:34px"
                >5</div>
              </el-col>
              <el-col :span="20">
                <div
                  style="text-align:center;width:277px;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px"
                >钢卷号顺序</div>
                <div
                  style="text-align:center;width:277px;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px"
                >顺序1</div>
                <div
                  style="text-align:center;width:277px;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px"
                >顺序11</div>
                <div
                  style="text-align:center;width:277px;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px"
                >顺序111</div>
                <div
                  style="text-align:center;width:277px;height:34px;line-height:34px;margin-left:-3px"
                >顺序1111</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="18">
          <div>
            <div
              style="text-align:center;width:100%;height:66px;line-height:66px;margin-left:-3px;border-top:2px solid black;border-bottom:2px solid black;border-right:2px solid black;"
            >
              <label>车牌号:</label>
              <label>冀B6个8</label>
            </div>
          </div>
          <div>
            <el-row :gutter="0">
              <el-col :span="5">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >钢卷号</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
              <el-col :span="5">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >垛位号</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
              <el-col :span="4">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >重量</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
              <el-col :span="5">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >合同号</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
              <el-col :span="5">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >操作状态</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top:50px">
      <el-row :gutter="0">
        <el-col :span="1">
          <div style="width:100%-2px;height:170px;border:2px solid black;">
            <div style="text-align: center;margin-top:60px">1车位</div>
            <div style="text-align: center;">有车</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div
            style="width:100%-2px;height:170px;border-top:2px solid black;2px solid black;border-bottom:2px solid black;border-right:2px solid black;"
          >
            <el-row :gutter="0">
              <el-col :span="4">
                <div
                  style="text-align: center;width:50px;height:32px;border-bottom:2px solid black;border-right:2px solid;line-height:32px;"
                >1</div>
                <div
                  style="text-align: center;width:50px;height:32px;border-bottom:2px solid black;border-right:2px solid;line-height:32px"
                >2</div>
                <div
                  style="text-align: center;width:50px;height:32px;border-bottom:2px solid black;border-right:2px solid;line-height:32px"
                >3</div>
                <div
                  style="text-align: center;width:50px;height:32px;border-bottom:2px solid black;border-right:2px solid;line-height:32px"
                >4</div>
                <div
                  style="text-align: center;width:50px;height:34px;border-right:2px solid;line-height:34px"
                >5</div>
              </el-col>
              <el-col :span="20">
                <div
                  style="text-align:center;width:277px;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px"
                >钢卷号顺序</div>
                <div
                  style="text-align:center;width:277px;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px"
                >顺序1</div>
                <div
                  style="text-align:center;width:277px;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px"
                >顺序11</div>
                <div
                  style="text-align:center;width:277px;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px"
                >顺序111</div>
                <div
                  style="text-align:center;width:277px;height:34px;line-height:34px;margin-left:-3px"
                >顺序1111</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="18">
          <div>
            <div
              style="text-align:center;width:100%;height:66px;line-height:66px;margin-left:-3px;border-top:2px solid black;border-bottom:2px solid black;border-right:2px solid black;"
            >
              <label>车牌号:</label>
              <label>冀B7个8</label>
            </div>
          </div>
          <div>
            <el-row :gutter="0">
              <el-col :span="5">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >钢卷号</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
              <el-col :span="5">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >垛位号</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
              <el-col :span="4">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >重量</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
              <el-col :span="5">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >合同号</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
              <el-col :span="5">
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >操作状态</div>
                <div
                  style="text-align:center;width:100%;height:32px;border-bottom:2px solid black;line-height:32px;margin-left:-3px;border-right:2px solid black;"
                >顺序1</div>
                <div
                  style="text-align:center;width:100%;height:34px;line-height:34px;margin-left:-3px;border-bottom:2px solid black;border-right:2px solid black;"
                >顺序1111</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
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
        id: 1
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