const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/links",
  },
  {
    path: "/links",
    name: "links",
    component: () => import("../views/LinksView.vue"),
  },
];

export default routes;
