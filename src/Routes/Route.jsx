import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategorySkill from "../Pages/CategorySkill";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: '',
        Component: Home, // renders at "/"
      },
      {
        path: "category/:id",
        Component: CategorySkill, // renders at "/category/:id"
        loader: () => fetch("/skill.json"),
      },
    ]
  },
  {
    path: "*", // not /* when using Component API
    Component: () => <p>Error 404</p>,
  },
]);

export default router;
