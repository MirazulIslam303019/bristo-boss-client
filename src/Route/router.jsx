import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderMenu from "../Pages/Order/Order/OrderMenu";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";

import Deshboard from "../Layout/Deshboard";
import Cart from "../Pages/Deshboard/Cart/Cart";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<OrderMenu></OrderMenu>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        }

      ]
    },
    {
      path:'deshboard',
      element:<Deshboard></Deshboard>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        }
      ]
    }
  ]);



export default router;