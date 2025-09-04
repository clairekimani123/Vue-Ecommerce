import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/auth/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../pages/auth/RegisterPage.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/customers",
    name: "Customers",
    component: () => import("@/pages/Customer.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/suppliers",
    name: "Suppliers",
    component: () => import("@/pages/Supplier.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/pages/Product.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("@/pages/Order.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, _ , next) => {
  const isAuthenticated = !!localStorage.getItem("token"); 

  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else if ((to.path === "/login" || to.path === "/register") && isAuthenticated) {
   
    next("/");
  } else {
    next();
  }
});

export default router;
