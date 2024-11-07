import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import ErrorPage from "../ErrorPage/errorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [],
  },
]);
