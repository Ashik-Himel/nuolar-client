import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { ErrorPage } from "../pages/ErrorPage";
import { Home } from "../pages/Home";
import { Shop } from "../pages/Shop";
import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Cart } from "../pages/Cart";
import { PrivateRouteAlt } from "../manageRoutes/PrivateRouteAlt";
import { Register } from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/login',
        element: <PrivateRouteAlt><Login /></PrivateRouteAlt>
      },
      {
        path: '/register',
        element: <PrivateRouteAlt><Register /></PrivateRouteAlt>
      }
    ]
  }
])