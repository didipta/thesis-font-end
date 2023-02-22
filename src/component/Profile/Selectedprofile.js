
import React, { useContext } from 'react';
import img from "../img/chat.png"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Allpost from '../Homepage/Allpost';
import { AuthContext } from '../Context/Authprovider';
import { Userdetails } from '../Hook/Userdetails';
import Loading from '../Loading/Loading';
import Smallloading from '../Loading/Smallloading';
import { Allpostshow } from '../Hook/Allpostshow';
import { Link, useLoaderData, useNavigate, useNavigation} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const Selectedprofile = () => {
    const {user}=useContext(AuthContext);
    const userdetails =useLoaderData();
    const navigation = useNavigation();
    const from="/home/profile";
    const navigator=useNavigate();
    if(user.email===userdetails.email)
    {
        navigator(from);
    }
   
    const [allpost,refetch,isLoading]=Allpostshow(userdetails.email);
    console.log(userdetails)
    const [loading,setloading]=useState(false);

    useEffect(()=>{
        setTimeout(()=>
      {
        setloading(true);
      },2000)
       
    })
    return (
        <div>
             {
                navigation.state === "loading"&&<Loading></Loading>
            }
           <div className="relative h-96">
            <div className="w-full h-72 overflow-hidden relative">

            <figure>
                    <PhotoProvider>
                    <PhotoView src={userdetails?.Cover}>
                    <img src={userdetails?.Cover} alt='' className="w-full h-72"></img>
                    </PhotoView>
                    </PhotoProvider>
                    </figure>
            </div>
            <div className="absolute bottom-0 ml-6 flex items-center gap-5">
            <div class="avatar relative">
            <div class="  w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 relative">
                <img src={userdetails?.image} alt=''/>
                
            </div>
            </div>
            <div className="flex justify-around items-center gap-5">
            <div>
                <h1 className="font-semibold text-2xl mt-3 mb-2">{userdetails?.name}</h1>
                <p className="text-sm font-medium text-slate-400">{userdetails?.email}</p>
            </div>
           <Link to={`/home/chatfild/${userdetails?.email}`}><div className="w-10 h-10 rounded-full flex justify-center items-center shadow-lg tooltip tooltip-top" data-tip="Message">
                <img src={img} alt="" className="w-7 h-7"></img>
            </div></Link>
            </div>
            
            </div>
        </div> 
        <div className="mt-5">
       {
        !loading?<Loading></Loading>:<div>
             {
                isLoading&&<Loading></Loading>
            }
            {
            allpost.length!==0?allpost.map(post=><Allpost post={post}></Allpost>):<div className="text-center p-5 font-medium">
                <p>No post available</p>
            </div>
            }
            
        </div>
       }
        </div>
        </div>
    );
};

export default Selectedprofile;