<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-row :gutter="14">
        <el-col :span="4">
          <div class="label-warp type">
            <label>类型:</label>
            <div class="warp-content">
              <el-select v-model="typeValue" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </el-col>

        <el-col :span="7">
          <div class="label-warp date">
            <label>日期:<i style="width:15px;display:inline-block;"></i></label>
            <div class="warp-content">
              <el-date-picker
                v-model="dateValue"
                type="datetimerange"
                align="right"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00', '08:00:00']"
              >
              </el-date-picker>
            </div>
          </div>
        </el-col>

        <el-col :span="3">
          <div class="label-warp keyWork">
            <label for=""
              >关键字:<i style="width:15px;display:inline-block;"></i
            ></label>
            <div class="warp-content">
              <el-select v-model="selectKey" style="width:100%">
                <el-option
                  v-for="item in selectOptions"
                  :label="item.label"
                  :value="item.value"
                  :key="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
        </el-col>
        <el-col :span="3">
          <el-input
            v-model="selectWork"
            placeholder="请输入"
            style="width:100%"
          >
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="danger" style="width:100%">搜索</el-button>
        </el-col>
        <el-col :span="3">
          <i style="width:1px;display:inline-block;"></i>
        </el-col>
        <el-col :span="2">
          <el-button
            type="danger"
            class="full-right"
            style="width:100%"
            @click="newDialog = true"
            >新增</el-button
          >
        </el-col>
      </el-row>
      <!-- 表格数据 -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="selection" width="45"> </el-table-column>
        <el-table-column prop="title" label="标题" width="830">
        </el-table-column>
        <el-table-column prop="category" label="类型" width="130">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="237">
        </el-table-column>
        <el-table-column prop="user" label="管理员" width="115">
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="danger" size="small" @click="deleteItem">
              删除
            </el-button>
            <el-button type="success" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <!-- 底部批量删除和分页 -->
    <el-row>
      <el-col :span="12">
        <el-button type="medium" @click="deleteAll">批量删除</el-button>
      </el-col>
      <el-col :span="12">
        <el-pagination
          class="full-right"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 30, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1000"
        >
        </el-pagination>
      </el-col>
    </el-row>
    <!-- <DialogInfo :flag="newDialog" @close="closeInfo" /> -->
    <DialogInfo :flag.sync="newDialog" />
  </div>
</template>
<script>
import DialogInfo from "./infoDialog/info.vue";
//全局方法弹窗是否确认删除
import { global } from "../../utils/global";
import { ref, reactive, computed } from "@vue/composition-api";
export default {
  name: "Info",
  components: { DialogInfo },
  setup(props, { root }) {
    /**
     * 3.0的全局方法可对{}中的变量进行watch监听并左右些操作不用在定义的组件中进行操作
     */
    //调用global中的comfirm方法（解构的方法）
    const { confirm } = global();
    //可将方法和变量等进行重命名，调用时只用aaa()即可
    //const { confirm: aaa } = global();
    /**
     * 数据
     */
    const newDialog = ref(false);
    const typeValue = ref("");
    const dateValue = ref("");
    const selectKey = ref("id");
    const selectWork = ref("");
    const formInline = ref();
    const tableData = reactive([
      {
        date: "2016-05-02",
        category: "",
        user: "王小虎",
        title: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄"
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄"
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄"
      }
    ]);
    const options = reactive([
      {
        value: "选项1",
        label: "黄金糕"
      },
      {
        value: "选项2",
        label: "双皮奶"
      },
      {
        value: "选项3",
        label: "蚵仔煎"
      },
      {
        value: "选项4",
        label: "龙须面"
      },
      {
        value: "选项5",
        label: "北京烤鸭"
      }
    ]);
    const selectOptions = reactive([
      {
        value: "id",
        label: "ID"
      },
      { value: "title", label: "标题" }
    ]);
    /**
     * 方法
     * */
    //分页
    const handleSizeChange = val => {};
    const handleCurrentChange = val => {};
    const closeInfo = value => {
      newDialog.value = value;
    };
    //删除调用3.0方法
    const deleteItem = () => {
      confirm({
        content: "是否确认删除此信息",
        fn: confirmDelete
      });
    };
    //批量删除调用3.0方法
    const deleteAll = () => {
      confirm({
        content: "是否确认删除选中的多条信息",
        fn: confirmDelete
      });
    };
    //确认删除
    const confirmDelete = () => {
      console.log("321321");
    };
    //删除调用2.0方法
    // const deleteItem = () => {
    //   // root.aaa();
    //   root.confirm({
    //     content: "是否确认删除此信息",
    //     fn: confirmDelete
    //   });
    // };
    //批量删除调用2.0方法
    // const deleteAll = () => {
    //   root.confirm({
    //     content: "是否确认删除选中的多条信息",
    //     //传输方法
    //     fn: confirmDelete
    //   });
    // };
    //确认删除调用2.0方法
    // const confirmDelete = () => {
    //   console.log("321321");
    // };
    return {
      //ref
      formInline,
      newDialog,
      typeValue,
      dateValue,
      selectKey,
      selectWork,
      tableData,
      //reactive
      options,
      selectOptions,
      //方法
      handleSizeChange,
      handleCurrentChange,
      closeInfo,
      deleteItem,
      deleteAll,
      confirmDelete
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/config.scss";
.label-warp {
  &.type {
    @include labelDom(left, 60, 40);
  }
  &.date {
    @include labelDom(right, 93, 40);
  }
  &.keyWork {
    @include labelDom(right, 99, 40);
  }
}
</style>
