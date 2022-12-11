import { createBrowserRouter } from "react-router-dom";
import Login from "../commonpage/Login";
import Home from "../Homepage/Home";
import Postpart from "../Homepage/Postpart";
import Main from "../Layout/Main";
import Postdetails from "../Postdetailes/Postdetails";
import Profile from "../Profile/Profile";
import Privetrouter from "./Privetrouter";

export const routers=createBrowserRouter([

    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Login></Login>
            },
            {
                path:"/home",
                element:<Privetrouter><Home></Home></Privetrouter>,
                children:[
                    {
                        path:"/home",
                        element:<Postpart></Postpart>
                    },
                    {
                        path:"/home/showpost/:id",
                        loader: ({params}) => fetch(`https://thesis-node-js.vercel.app/posts/${params.id}`),
                        element:<Postdetails></Postdetails>
                    },
                    {
                        path:"/home/profile",
                        element:<Profile></Profile>
                    }
                    
                ]
            }
        ]
    }
])