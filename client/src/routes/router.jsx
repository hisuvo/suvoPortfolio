import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Works from "../pages/Works";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h2>This is error element</h2>,
    children: [
      { index: true, element: <Home /> },
      { path: "/works", element: <Works /> },
      { path: "/about-me", element: <About /> },
      { path: "/contacts", element: <Contact /> },
    ],
  },
]);

export default router;
