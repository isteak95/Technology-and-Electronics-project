import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Pages/MainLayOut/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import AppleProduct from "../Pages/AppleProduct/AppleProduct";
import SamsungProduct from "../Pages/SamsungProduct/SamsungProduct";
import SonyProduct from "../Pages/SonyProduct/SonyProduct"
import PorductDetails from "../Pages/ProductDetails/ProductDetails"
import GoogleProduct from "../Pages/GoogleProduct/GoogleProduct"
import IntelProduct from "../Pages/IntelProduct/IntelProduct"
import HuaweiProduct from "../Pages/HuaweiProduct/HuaweiProduct"
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PryvateRoute from "../pryvateRoute/privateRoute";





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [

      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addproduct",
        element: <PryvateRoute>
          <AddProduct></AddProduct>
        </PryvateRoute>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },

      {
        path: "/mycart",
        element: <PryvateRoute><MyCart></MyCart></PryvateRoute>,
        loader: () => fetch("http://localhost:5000/mycart")

      },
      {
        path: "/Apple",
        element: <AppleProduct ></AppleProduct>,
        loader: () => fetch('http://localhost:5000/apple')
      },
      {
        path: "/samsung",
        element: <SamsungProduct></SamsungProduct>,
        loader: () => fetch("http://localhost:5000/samsung")
      },
      {
        path: "/sony",
        element: <SonyProduct></SonyProduct>,
        loader: () => fetch("http://localhost:5000/sony")
      },
      {
        path: "/google",
        element: <GoogleProduct></GoogleProduct>,
        loader: () => fetch("http://localhost:5000/google")
      },
      {
        path: "/intel",
        element: <IntelProduct></IntelProduct>,
        loader: () => fetch("http://localhost:5000/intel")
      },
      {
        path: "/huawei",
        element: <HuaweiProduct></HuaweiProduct>,
        loader: () => fetch("http://localhost:5000/huawei")
      },
      {
        path: "/Apple/details/:productId",
        element: <PryvateRoute><PorductDetails></PorductDetails></PryvateRoute>,
        loader: () => fetch('http://localhost:5000/apple')
      },
      {
        path: "/samsung/details/:productId",
        element: <PryvateRoute><PorductDetails></PorductDetails></PryvateRoute>,
        loader: () => fetch("http://localhost:5000/samsung")
      },
      {
        path: "/sony/details/:productId",
        element: <PryvateRoute><PorductDetails></PorductDetails></PryvateRoute>,
        loader: () => fetch("http://localhost:5000/sony")
      },
      {
        path: "/google/details/:productId",
        element: <PryvateRoute><PorductDetails></PorductDetails></PryvateRoute>,
        loader: () => fetch("http://localhost:5000/google")
      },
      {
        path: "/intel/details/:productId",
        element: <PryvateRoute><PorductDetails></PorductDetails></PryvateRoute>,
        loader: () => fetch("http://localhost:5000/intel")
      },
      {
        path: "/huawei/details/:productId",
        element: <PryvateRoute><PorductDetails></PorductDetails></PryvateRoute>,
        loader: () => fetch("http://localhost:5000/huawei")
      },
      {
        path: "apple/update/:id",
        element: <PryvateRoute><UpdateProduct></UpdateProduct></PryvateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/apple/${params.id}`)
      },
      {
        path: "sony/update/:id",
        element: <PryvateRoute><UpdateProduct></UpdateProduct></PryvateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/sony/${params.id}`)
      },
      {
        path: "samsung/update/:id",
        element: <PryvateRoute><UpdateProduct></UpdateProduct></PryvateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/samsung/${params.id}`)
      },
      {
        path: "google/update/:id",
        element: <PryvateRoute><UpdateProduct></UpdateProduct></PryvateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/google/${params.id}`)
      },
      {
        path: "intel/update/:id",
        element: <PryvateRoute><UpdateProduct></UpdateProduct></PryvateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/intel/${params.id}`)
      },
      {
        path: "huawei/update/:id",
        element: <PryvateRoute><UpdateProduct></UpdateProduct></PryvateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/huawei/${params.id}`)
      }


    ]
  },
]);



export default router;