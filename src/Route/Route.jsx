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
import PorductDetails from  "../Pages/ProductDetails/ProductDetails"
import GoogleProduct from "../Pages/GoogleProduct/GoogleProduct"
import IntelProduct from "../Pages/IntelProduct/IntelProduct"
import HuaweiProduct from "../Pages/HuaweiProduct/HuaweiProduct"



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [

        {
            path :"/",
            element :<Home></Home>
        },
        {
          path : "/addproduct",
          element : <AddProduct></AddProduct>
        },
        {
          path : "/mycart",
          element : <MyCart></MyCart>,
          loader : () => fetch ("http://localhost:5000/mycart")

        },
        {
          path: "/Apple",
          element:<AppleProduct ></AppleProduct>,
          loader : () => fetch('http://localhost:5000/apple')
        },
        {
          path: "/samsung",
          element :<SamsungProduct></SamsungProduct>,
          loader : () => fetch("http://localhost:5000/samsung")
        },
        {
          path: "/sony",
          element : <SonyProduct></SonyProduct> ,
          loader : () => fetch("http://localhost:5000/sony")
        },
        {
          path: "/google",
          element : <GoogleProduct></GoogleProduct> ,
          loader : () => fetch("http://localhost:5000/google")
        },
        {
          path: "/intel",
          element : <IntelProduct></IntelProduct>,
          loader : () => fetch("http://localhost:5000/intel")
        },
        {
          path: "/huawei",
          element : <HuaweiProduct></HuaweiProduct>,
          loader : () => fetch("http://localhost:5000/huawei")
        },
        {
          path: "/Apple/details/:productId",
          element: <PorductDetails></PorductDetails>,
          loader : () => fetch('http://localhost:5000/apple')
        },
        {
          path: "/samsung/details/:productId",
          element :<PorductDetails></PorductDetails>,
          loader : () => fetch("http://localhost:5000/samsung")
        },
        {
          path: "/sony/details/:productId",
          element : <PorductDetails></PorductDetails> ,
          loader : () => fetch("http://localhost:5000/sony")
        },
        {
          path: "/google/details/:productId",
          element :<PorductDetails></PorductDetails>,
          loader : () => fetch("http://localhost:5000/google")
        },
        {
          path: "/intel/details/:productId",
          element :<PorductDetails></PorductDetails>,
          loader : () => fetch("http://localhost:5000/intel")
        },
        {
          path: "/huawei/details/:productId",
          element :<PorductDetails></PorductDetails>,
          loader : () => fetch("http://localhost:5000/huawei")
        },
        
       
      ]
    },
  ]);

 

export default router;