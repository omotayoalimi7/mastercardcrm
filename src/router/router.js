import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/auth/Login";
import Dashboard from "../views/Dashboard";
import ViewCompany from "../views/ViewCompany";
import NewCompany from "../views/NewCompany";
import Profile from "../views/Profile";
import NewUser from "../views/NewUser";


Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
      path: "/viewcompany",
      name: "viewcompany",
      component: ViewCompany
    },
    {
      path: "/newcompany",
      name: "newcompany",
      component: NewCompany
    },
    {
      path: "/newsuperadmin",
      name: "newsuperadmin",
      component: NewUser
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
  {
    path: "/",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
