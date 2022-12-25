import { createBrowserRouter } from "react-router-dom";
import Adminhome from "../Admin/Adminhome";
import AdminLayout from "../Admin/AdminLayout";
import Allpost from "../Admin/Allpost";
import Errorpage from "../commonpage/Errorpage";
import Login from "../commonpage/Login";
import Home from "../Homepage/Home";
import Postpart from "../Homepage/Postpart";
import Main from "../Layout/Main";
import Mindfresh from "../Mindfresh.js/Mindfresh";
import Postdetails from "../Postdetailes/Postdetails";
import Profile from "../Profile/Profile";
import Selectedprofile from "../Profile/Selectedprofile";
import Watchfile from "../Watch/Watchfile";
import Adminprivetroute from "./Adminprivetroute";
import Privetrouter from "./Privetrouter";

export const routers=createBrowserRouter([

    {
        path:"/",
        element:<Main></Main>,
        errorElement:<Errorpage></Errorpage>,
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
                        loader: ({params}) => fetch(`https://thesis-node-js.vercel.app/posts/${params.id}`,
                        {
                            headers: {
                                authorization: `bearer ${localStorage.getItem('Thankutoken')}`
                              }
                        }
                        ),
                        element:<Postdetails></Postdetails>
                    },
                    {
                        path:"/home/profile",
                        element:<Profile></Profile>
                    }
                    ,
                    {
                        path:"/home/selectedprofile/:email",
                        element:<Selectedprofile></Selectedprofile>,
                        loader: ({params}) => fetch(`https://thesis-node-js.vercel.app/users/${params.email}`)
                    }
                    ,
                    {
                        path:"/home/mindfresh",
                        element:<Mindfresh></Mindfresh>
                    }
                    ,
                    {
                        path:"/home/watch",
                        element:<Watchfile></Watchfile>
                    }
                ]
            }
        
        ]
    }
    ,
    {
        path:"/Admin",
        element:<Adminprivetroute><AdminLayout></AdminLayout></Adminprivetroute>,
        children:[
            {
                path:"/Admin/songadd",
                element:<Adminhome></Adminhome>
            },
            {
                path:"/Admin/Allpost",
                element:<Allpost></Allpost>
            }
        ]
    }
   
])