import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import SkillCards from "../Components/SkillCards/SkillCards";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import AuthLayout from "../Layouts/AuthLayout";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import CategoryBar from "../Components/CategoryBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />, // Navbar + Footer always shown
    children: [
      { index: true, element: <Home /> },
      {
        index: true,
        Component: CategoryBar,
      },
    ],
  },
  {
    path: "skillscards/:category",
    element: <SkillCards />,
    loader: ({ params }) =>
      fetch("/skill.json").then((res) =>
        res.json().then((data) => ({
          skills: data.filter((skill) => skill.category === params.category),
        }))
      ),
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/signup",
        Component: SignUp,
      },
      {
        path: "/auth/signin",
        Component: SignIn,
      },
      {
        path: "/auth/aboutus",
        Component: AboutUs,
      },
      {
        path: "/auth/profile",
        Component: Profile,
      },
    ],
  },

  { path: "*", element: <p>404 Not Found</p> },
]);

export default router;
