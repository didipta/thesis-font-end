import { createBrowserRouter } from "react-router-dom";
import Adminhome from "../Admin/Adminhome";
import Ahome from "../Admin/Adminhome/Ahome";
import AdminLayout from "../Admin/AdminLayout";
import Allpost from "../Admin/Allpost";
import Chat from "../Chat/Chat";
import Chatfild from "../Chat/Chatfild";
import Errorpage from "../commonpage/Errorpage";
import Login from "../commonpage/Login";
import Home from "../Homepage/Home";
import Postpart from "../Homepage/Postpart";
import Main from "../Layout/Main";
import Legalaid from "../Legalaid/Legalaid";
import Mindfresh from "../Mindfresh.js/Mindfresh";
import Otherinfo from "../otherinfo/Otherinfo";
import Postdetails from "../Postdetailes/Postdetails";
import Profile from "../Profile/Profile";
import Selectedprofile from "../Profile/Selectedprofile";
import Startpage from "../Startpage/Startpage";
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
                element:<Startpage></Startpage>
            },
            {
                path:'/login',
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
                    },
                    {
                        path:"/home/otherinfo",
                        element:<Otherinfo></Otherinfo>
                    },
                    {
                        path:"/home/legaleaid",
                        element:<Legalaid></Legalaid>
                    },
                    {
                        path:"/home/chat",
                        element:<Chat></Chat>
                    },
                    {
                        path:"/home/chatfild/:email",
                        element:<Chatfild></Chatfild>,
                        loader: ({params}) => fetch(`https://thesis-node-js.vercel.app/users/${params.email}`)
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
               path:"/Admin",
               element:<Ahome></Ahome>

            },
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