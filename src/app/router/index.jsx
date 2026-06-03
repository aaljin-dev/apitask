import { createBrowserRouter } from "react-router-dom";
import Home from "../../Component/home/Home";
import Post from "../../Component/post/Post";

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
    element: <Error />,
  },
]);
