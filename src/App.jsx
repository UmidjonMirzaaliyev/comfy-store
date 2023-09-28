import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  Cart,
  Products,
  SingleCardProduct,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Register,
  Checkout,
} from "./pages";
// components
import { ErrorElement } from "./components";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleCardProduct";
import { loader as productsLoader } from "./pages/Products";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,

      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
          errorElement: <ErrorElement />,
        },
        { path: "about", element: <About /> },
        { path: "orders", element: <Orders /> },
        {
          path: "products",
          element: <Products />,
          loader: productsLoader,
          errorElement: <ErrorElement />,
        },
        { path: "checkout", element: <Checkout /> },
        { path: "cart", element: <Cart /> },
        {
          path: "products/:id",
          element: <SingleCardProduct />,
          errorElement: <ErrorElement />,
          loader: singleProductLoader,
        },
      ],
      errorElement: <Error />,
    },
    { path: "/login", element: <Login />, errorElement: <Error /> },
    { path: "/register", element: <Register />, errorElement: <Error /> },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
