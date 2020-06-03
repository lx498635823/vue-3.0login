import service from "@/utils/request.js";
/**
 *信息分类添加一级
 */
export function AddFirstCategory(data) {
  //api地址
  return service.request({
    method: "post",
    url: "/news/addFirstCategory/",
    // 如果data:data变量名和传输的数据名相同可以省略为data如下
    data
    // data: qs.stringify(data)
  });
}

/**
 *获取分类
 */
export function GetCategory(data) {
  //api地址
  return service.request({
    method: "post",
    url: "/news/getCategoryAll/",
    // 如果data:data变量名和传输的数据名相同可以省略为data如下
    data
    // data: qs.stringify(data)
  });
}

/**
 *删除分类
 */
export function DeleteCategory(data) {
  //api地址
  return service.request({
    method: "post",
    url: "/news/deleteCategory/",
    // 如果data:data变量名和传输的数据名相同可以省略为data如下
    data
    // data: qs.stringify(data)
  });
}

/**
 *修改分类
 */
export function EditCategory(data) {
  //api地址
  return service.request({
    method: "post",
    url: "/news/editCategory/",
    // 如果data:data变量名和传输的数据名相同可以省略为data如下
    data
    // data: qs.stringify(data)
  });
}
