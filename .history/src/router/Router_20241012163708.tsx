import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Find_jobs from "../pages/Find_jobs"
import Header from "../components/Header";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";


const notPages = ["/error", "/auth/signin", "/auth/signup", "auth/reset_password"]


// Layout component with conditional Navbar
const Layout = () => {
  const location = useLocation(); // Get the current route location

  return (
    <>
      {/* Conditionally render the Navbar if the current path is not the error page */}
      {!notPages.includes(location.pathname) && <Header />}
      <Outlet /> {/* Renders the child route's component */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap with layout for routes with Navbar
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/find_jobs",
        element: <Find_jobs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/auth",
        // element: <Blog />,
        children: [
          {
            path: "/auth/signin",
            element: <Signin />,
          },
          {
            path: "/auth/signup",
            element: <Signup />,
          },
          {
            path: "/auth/signup",
            element: <Fog />,
          },
        ],
      },
    ],
  },
  {
    path: "*", // Error route
    element: <Error />,
  },
]);

export const Router = () => {
  return (
    <>
      {/* No need for useLocation here */}
      <RouterProvider router={router} />
    </>
  );
};
