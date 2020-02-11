import DetailsPage from "./components/DetailsPage.vue";
import TodoDetails from "./components/TodoDetails.vue";
import HomePage from "./components/HomePage.vue";

export const routes = [
  {
    path: "",
    component: HomePage,
    name: "homePage"
  },
  {
    path: "/details",
    component: DetailsPage,
    children: [
      {
        path: ":id",
        component: TodoDetails,
        name: "detailsOfTodo",
        props: true
      }
    ]
  },
  { path: "*", redirect: "/" }
];
