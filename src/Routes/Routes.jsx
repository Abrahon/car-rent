import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Car from "../pages/Home/Car/Car";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Car></Car>
            }
        ]
    }
])