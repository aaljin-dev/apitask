import { createBrowserRouter } from "react-router-dom";
import Home from "../../Component/home/Home";
import Post from "../../Component/post/Post";
import ErrorPage from "../../Component/error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "post/:id",
    element: <Post />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);
