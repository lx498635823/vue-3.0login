import Vue from "vue";
import VueRouter from "vue-router";
//import Login from "../views/Login/index.vue";
Vue.use(VueRouter);

//引入布局组件
import Layout from "@/views/Layout/index.vue";

const routes = [{
    path: "/",
    // 重定向直接在path后面添加，默认连接到这里
    redirect: "login",
    hidden: true,
    meta: {
      name: "主页"
    }
  },
  {
    path: "/login",
    name: "Login",
    //component: Login
    //或者这样写
    hidden: false,
    meta: {
      name: "登录"
    },
    component: () => import("../views/Login/index.vue")
  },
  {
    path: "/view",
    name: "View",
    meta: {
      name: "可视化"
    },
    component: () => import("../views/view/index.vue")
  },
  {
    path: "/console",
    name: "Console",
    //因为path是console，所以下面的children地址无法加载导致内容区无内容，重定向到index就可以了
    redirect: "index",
    //component: Login
    //或者这样写
    meta: {
      name: "控制台",
      icon: "console"
    },
    component: Layout,
    children: [{
      path: "/index",
      name: "Index",
      meta: {
        name: "首页"
      },
      component: () => import("../views/Console/index.vue")
    }]
  },

  /** 
   *车位信息管理 
   */
  {
    path: "/parking",
    name: "Parking",
    meta: {
      name: "车位信息管理",
      icon: "user"
    },
    component: Layout,
    children: [{
      path: "/parkingInformation",
      name: "ParkingInformation",
      meta: {
        name: "1跨停车位"
      },
      component: () => import("../views/ParkingInformation/index.vue")
    }]
  },
  /** 
   *车辆信息 
   */
  {
    path: "/car",
    name: "Car",
    meta: {
      name: "车辆信息",
      icon: "user"
    },
    component: Layout,
    children: [{
      path: "/carSort",
      name: "CarSort",
      meta: {
        name: "车辆排序"
      },
      component: () => import("../views/CarSort/index.vue")
    }]
  },
  /**
   * 门禁信息管理
   */
  {
    path: "/control",
    name: "Control",
    meta: {
      name: "门禁信息管理",
      icon: "info"
    },
    component: Layout,
    children: [{
        path: "/accessControl",
        name: "AccessControl",
        meta: {
          name: "入口门禁"
        },
        component: () => import("../views/Control/accessControl.vue")
      },
      {
        path: "/eAccessControl",
        name: "EAccessControl",
        meta: {
          name: "出口门禁"
        },
        component: () => import("../views/Control/eAccessControl.vue")
      }
    ]
  },
  /**
   * 用户管理
   */
  {
    path: "/user",
    name: "User",
    meta: {
      name: "用户管理",
      icon: "user"
    },
    component: Layout,
    children: [{
      path: "/userIndex",
      name: "UserIndex",
      meta: {
        name: "用户列表"
      },
      component: () => import("../views/User/index.vue")
    }]
  }
  // 测试
  //{
  //   path: "/index",
  //   name: "Index",
  //   //component: Login
  //   //或者这样写
  //   component: () => import("../views/Index/index.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;