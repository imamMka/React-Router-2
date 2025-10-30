import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import DashboardUser from "../pages/dashboard/dasboardUser/dashboardUser";
import AddUser from "@/pages/dashboard/dasboardUser/addUser";
import DetailUser from "@/pages/dashboard/dasboardUser/detailUser";
import NotFound from "../pages/404notfound";

export default function Route() {
  const router = createBrowserRouter(
    [
    { path: "/", element: <Login /> },
    { path: "*", element: <NotFound/> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard/user", element: <DashboardUser /> },
    { path: "/dashboard/user/add", element: <AddUser /> },
    { path: "/dashboard/user/:id", element: <DetailUser /> },
    // { path: "/dashboard/product", element: <DashboardProduct /> },
    ]
);
  return <RouterProvider router={router} />;
}