<template>
  <div id="category">
    <el-button type="danger" @click="addFirst">添加一级分类</el-button>
    <hr style="margin-left:-30px; margin-top:30px; margin-bottom:30px" />
    <div>
      <el-row :gutter="30">
        <el-col :span="8">
          <div class="category-warp">
            <div class="category" v-for="item in category.item" :key="item.id">
              <h4>
                <svg-icon icon-class="plus"></svg-icon>
                {{ item.category_name }}
                <div class="button-group">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="editCategory({categoryName: item,type: 'category_frist_edit'})"
                    round
                  >编辑</el-button>
                  <el-button size="mini" type="success" round>添加子级</el-button>
                  <el-button size="mini" round @click="deleteItem(item.id)">删除</el-button>
                </div>
              </h4>
              <!-- 子级分类 -->
              <ul v-if="item.children">
                <li v-for="childrenItem in item.children" :key="childrenItem.id">
                  {{ childrenItem.category_name }}
                  <div class="button-group">
                    <el-button size="mini" type="danger" round>编辑</el-button>
                    <el-button size="mini" round>删除</el-button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <h4 class="menu-title">一级分类编辑</h4>
          <el-form label-width="142px" class="w410" ref="categoryFrom" style="margin-top:20px">
            <el-form-item label="一级分类名称" v-if="first_input">
              <el-input v-model="form.categoryName" :disabled="first_disable"></el-input>
            </el-form-item>
            <el-form-item label="二级分类名称" v-if="sec_input">
              <el-input v-model="form.seCategoryName" :disabled="children_disable"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="danger"
                @click="submit"
                :loading="submit_type"
                :disabled="button_disable"
              >立即创建</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import {
  AddFirstCategory,
  GetCategory,
  DeleteCategory,
  EditCategory
} from "../../api/news";
import { ref, reactive, onMounted } from "@vue/composition-api";
import { global } from "../../utils/global";
export default {
  name: "category",
  setup (props, { refs, root }) {
    //调用global中的comfirm方法（解构的方法）
    const { confirm } = global();
    /**
     *基础类型
     */
    const first_input = ref(true);
    const sec_input = ref(true);
    const submit_type = ref(false);
    const first_disable = ref(true);
    const children_disable = ref(true);
    const button_disable = ref(true);
    const deleteId = ref("");
    /**
     *对象类型
     */
    const form = reactive({
      categoryName: "",
      seCategoryName: ""
    });
    const category = reactive({
      item: []
    });
    /**
     * 函数
     */
    //提交
    const submit = () => { };
    //添加一级分类
    const addFirstCategory = () => {
      AddFirstCategory({ categoryName: form.categoryName })
        .then(response => {
          if (!form.categoryName) {
            root.$message({ message: "分类名称不能为空", type: "error" });
            return;
          }
          submit_type.value = true;
          if (response.data.resCode == 0) {
            root.$message({ message: response.data.message, type: "success" });
          }
          category.item.push(response.data.data);
          //将创建按钮的加载状态去掉
          submit_type.value = false;
          form.categoryName = "";
          form.seCategoryName = "";
        })
        .catch(error => {
          //将创建按钮的加载状态去掉，以防接口调用失败在catch中调用一次
          submit_type.value = false;
          form.categoryName = "";
          form.seCategoryName = "";
        });
    };
    //添加一级分类
    const addFirst = () => {
      first_input.value = true;
      sec_input.value = false;
      first_disable.value = false;
      button_disable.value = false;
    };
    //获取分类列表
    const getCategory = () => {
      GetCategory({})
        .then(response => {
          console.log(response.data.data);
          category.item = response.data.data;
        })
        .catch(error => { });
    };
    //删除一级分类
    const deleteCategory = () => {
      DeleteCategory({ categoryId: deleteId.value })
        .then(response => {
          root.$message({ message: response.data.message, type: "success" });
          //es6方法findindex可以回去element值对应在数组中的下标，填入的值为函数（element为findindex前面的数组，名字随意写，但是.的东西需要数组中存在）
          //也可以这样写但是要return
          // let index = category.item.findIndex(element => {
          //   return element.id == deleteId.value;
          // });
          let index = category.item.findIndex(
            element => element.id == deleteId.value
          );
          /**
           * splice("下标"，删除几个，传输的内容替换道数组中)
           * 两个参数是删除，3个是替换/插入（删除0个）
           */
          category.item.splice(index, 1);
        })
        .catch(error => { });
    };
    //是否确认删除调用3.0方法
    const deleteItem = data => {
      deleteId.value = data;
      confirm({
        content: "是否确认删除此信息",
        fn: deleteCategory,
        catchFn: () => {
          deleteId.value = "";
        }
      });
    };
    //修改
    const editCategory = item => {
      first_input.value = true;
      sec_input.value = false;
      first_disable.value = false;
      button_disable.value = false;
      form.categoryName = item.item.categoryName;
      console.log(item.type);
      let data = {
        id: item.item.id,
        categoryName: form.categoryName
      };
      confirm({
        content: "是否确认修改此信息",
        fn: deleteCategory,
        catchFn: () => {
          deleteId.value = "";
        }
      });
      EditCategory(data)
        .then(response => {
          if (response.data.resCode == 0) {
            root.$message({ message: response.data.message, type: "success" });
          }
        })
        .catch(error => { });
    };

    /**
     *挂载完成
     */
    onMounted(() => {
      getCategory();
    });
    return {
      //基础类型
      first_input,
      sec_input,
      submit_type,
      first_disable,
      children_disable,
      button_disable,
      //对象类型
      form,
      category,
      //函数
      submit,
      addFirst,
      getCategory,
      deleteCategory,
      deleteItem,
      editCategory
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/config.scss";
.category-warp {
  div:first-child {
    &:before {
      top: 20px;
    }
  }
  div:last-child {
    &:before {
      bottom: 21px;
    }
  }
}
.menu-title {
  line-height: 44px;
  padding-left: 22px;
  background-color: #f3f3f3;
}
.category {
  cursor: pointer;
  line-height: 44px;
  position: relative;
  &:active {
    li {
      display: none;
    }
  }
  &:before {
    content: "";
    position: absolute;
    left: 20px;
    top: 0px;
    bottom: 0px;
    width: 32px;
    border-left: 1px dotted #000;
  }
  h4 {
    padding-left: 40px;
    position: relative;
  }
  svg {
    position: absolute;
    top: 14px;
    left: 12px;
    background-color: #fff;
    font-size: 17px;
  }
  li {
    position: relative;
    padding-left: 38px;
    margin-left: 22px;
    &:before {
      content: "";
      position: absolute;
      left: 0px;
      top: 22px;
      width: 32px;
      border-bottom: 1px dotted #000;
    }
  }
  li,
  h4 {
    @include webkit(transition, all 0.3s ease 0s);
    &:hover {
      background-color: #f3f3f3;
      .button-group {
        display: block;
      }
    }
  }
  .button-group {
    display: none;
    position: absolute;
    z-index: 2;
    top: -1px;
    right: 11px;
    button {
      font-size: 13px;
    }
  }
  .w410 {
    width: 410px;
    padding-top: 26px;
  }
}
</style>
