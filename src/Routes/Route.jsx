import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategorySkill from "../Pages/CategorySkill";
import SkillCards from "../Components/SkillCards/SkillCards";
 

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home, // renders at "/"
      },
    ],
  },
  {
    path: "/skillscards/:category",
    element: <SkillCards />,
    loader: ({ params }) =>
      fetch("/skill.json").then((res) => {
        if (!res.ok) throw new Error("Failed to fetch skills");
        return res.json().then((data) => {
          const filteredSkills = data.filter(
            (skill) => skill.category === decodeURIComponent(params.category)
          );
          console.log("Loader filtered skills:", filteredSkills); // Debug
          return { skills: filteredSkills };
        });
      }),
    errorElement: (
      <p className="text-red-500">Error loading skills. Please try again.</p>
    ),
  },

  {
    path: "*", // not /* when using Component API
    Component: () => <p>Error 404</p>,
  },
]);

export default router;
