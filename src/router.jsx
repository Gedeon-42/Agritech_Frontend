import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([

    {
        path:"/admin",
        element:<
    },
    {
        path:"/",
        element:"Home",
        children:[
            {
                path:"/",
                element:<App/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/product",
                element:<Product/>
            }
        ]
    },
   
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    }
])