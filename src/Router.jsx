import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./ErrorPage";
import Shop from "./components/shop/Shop";
import ShoppingCart from "./components/ShoppingCart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:name",
      element: <App />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
