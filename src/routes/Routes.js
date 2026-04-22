import Home from "../pages/home/Home";
import NotFound from "../components/notFound/NotFound";
// import OnlineCourses from "../pages/onlineCourses/OnlineCourses";
import Kurslar from "../pages/kurslar/Kurslar";
import Teachers from "../pages/ustozlar/Teachers";
import Online from "../pages/onlineCourses/Online";

export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: 'online',
    element: <Online />
  },
  {
    path: "kurslar",
    element: <Kurslar />
  },
  {
    path: "ustozlar",
    element: <Teachers   />
  },
  {
    path: "*",
    element: <NotFound />
  }
];