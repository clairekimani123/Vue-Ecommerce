import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [

  { 
    path: "/login",
    name: "Login",
    component: () => import("../pages/auth/LoginPage.vue")
  },

  { 
    path: "/register",
    name: "Register",
    component: () => import("../pages/auth/RegisterPage.vue")
  },


  { 
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue")
  },

  // {
  //   path: "/",
  //   name: "Home",
  //   component: () => import("@/pages/Home.vue"),
  // },

  {
    path: "/customers",
    name: "Customers",
    component: () => import("@/pages/Customer.vue"),
  },

  {
    path: "/suppliers",
    name: "Suppliers",
    component: () => import("@/pages/Supplier.vue"),
  },

  {
    path: "/products",
    name: "Products",
    component: () => import("@/pages/Product.vue"),
  },

  {
    path: "/orders",
    name: "Orders",
    component: () => import("@/pages/Order.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

  
