import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    
    component: () => 
    
    import( "../views/AboutView.vue"),
  },
  {
    path: "/shops",
    name: "shops",
    component: () => import("../views/ShopsView.vue"),
    props: true,
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
    props: true,
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
