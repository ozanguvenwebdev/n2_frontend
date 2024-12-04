import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/todos",
    children: [
      {
        path: "todos",
        name: "Todos",
        component: Dashboard,
      },
      {
        path: "user",
        name: "Users",
        component: UserProfile,
      },
      {
        path: "posts",
        name: "Posts",
        component: TableList,
      },
      {
        path: "albums",
        name: "Albums",
        component: TableList,
      },
      
    ],
  },
];

export default routes;
