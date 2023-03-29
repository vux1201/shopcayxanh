import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/user/home/HomeView.vue"),
  },
  // giới thiệu
  {
    path: "/introduce",
    name: "introduce",
    component: () => import("../views/user/introduce/IntroduceView.vue"),
  },
  //dịch vụ
  {
    path: "/service",
    name: "service",
    component: () => import("../views/user/service/service.vue"),
  },
  //kiến thức cây ảnh
  {
    path: "/bonsai-knowledge",
    name: "bonsai-knowledge",
    component: () => import("../views/user/service/bonsai-knowledge.vue"),
  },
  //video
  {
    path: "/video-demo",
    name: "video-demo",
    component: () => import("../views/user/service/video-demo.vue"),
  },
  //hướng dẫn mua hàng
  {
    path: "/shopping-guide",
    name: "shopping-guide",
    component: () => import("../views/user/service/shopping-guide.vue"),
  },
  //đổi trả sản phẩm
  {
    path: "/product-return",
    name: "product-return",
    component: () => import("../views/user/service/product-return.vue"),
  },
  //liên hệ
  {
    path: "/contactView",
    name: "contactView",
    component: () => import("../views/user/service/contactView.vue"),
  },
  //khuyến mãi
  {
    path: "/promotion",
    name: "promotion",
    component: () => import("../views/user/service/promotion.vue"),
  },
  //admin login
  {
    path: "/adminLogin",
    name: "adminLogin",
    component: () => import("../views/admin/AdminApp/Login/adminLogin.vue"),
  },
  // quan ly don hang
  {
    path: "/order-management",
    name: "order-management",
    component: () =>
      import("../views/admin/AdminApp/management/order-management.vue"),
  },
  // quan ly nguoi dung
  {
    path: "/user-management",
    name: "user-management",
    component: () =>
      import("../views/admin/AdminApp/management/user-management.vue"),
  },
  // quan ly san pham
  {
    path: "/product-management",
    name: "product-management",
    component: () =>
      import("../views/admin/AdminApp/management/product-management.vue"),
  },
  // cai dat admin
  {
    path: "/AccountSettings",
    name: "AccountSettings",
    component: () =>
      import("../views/admin/AdminApp/management/AccountSettings.vue"),
  },
  //user
  {
    path: "/login",
    name: "loginView",
    component: () => import("../views/user/login/login/loginView.vue"),
  },
  // doi mat khau
  {
    path: "/forgot-password",
    name: "loginforgot-passwordView",
    component: () => import("../views/user/login/login/forgot-password.vue"),
  },
  // tao tai khoan
  {
    path: "/signup",
    name: "signupView",
    component: () => import("../views/user/login/signup/signupView.vue"),
  },
  // gio hang
  {
    path: "/cartView",
    name: "cartView",
    component: () => import("../views/user/cart/cartView.vue"),
  },
  //xem sản phẩm
  {
    path: "/productView",
    name: "productView",
    component: () => import("../views/user/products/productView.vue"),
    children: [
      {
        path: "/productView/:id",
        name: "productView",
        component: () => import("../views/user/products/productView.vue"),
      },
    ],
  },
  //danh mục sản phẩm
  {
    path: "/categoryView",
    name: "categoryView",
    component: () => import("../views/admin/categories/categoryView.vue"),
    children: [
      {
        path: "/categoryView/:class",
        name: "categoryView",
        // component: () => import("../views/admin/categories/categoryView.vue"),
      },
    ],
  },
  //thong tin ca nhan
  {
    path: "/user-profile",
    name: "user-profile",
    component: () =>
      import("../views/user/account-information/userProfile.vue"),
  },
  //don hang
  {
    path: "/myOrder",
    name: "myOrder",
    component: () => import("../views/user/account-information/myOrder.vue"),
  },
  // chi tiet don hang
  {
    path: "/order-details",
    name: "order-details",
    component: () =>
      import("../views/user/account-information/order-details.vue"),
  },
  // doi mat khau
  {
    path: "/changePassword",
    name: "changePassword",
    component: () =>
      import("../views/user/account-information/changePassword.vue"),
  },
  // dat hang
  {
    path: "/orderView",
    name: "orderView",
    component: () => import("../views/user/order&payment/orderView.vue"),
  },
  // thong tin giao hang
  {
    path: "/shipment-details",
    name: "shipment-details",
    component: () => import("../views/user/order&payment/shipment-details.vue"),
  },
  // thanh toan
  {
    path: "/paymentView",
    name: "paymentView",
    component: () => import("../views/user/order&payment/payment.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
