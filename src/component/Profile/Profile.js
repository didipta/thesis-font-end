import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import {faUpload,faCamera} from '@fortawesome/free-solid-svg-icons'
import Allpost from '../Homepage/Allpost';
import { AuthContext } from '../Context/Authprovider';
import { Userdetails } from '../Hook/Userdetails';
import Loading from '../Loading/Loading';
import Smallloading from '../Loading/Smallloading';
import { Allpostshow } from '../Hook/Allpostshow';
import { useState } from 'react';
import { useEffect } from 'react';
const Profile = () => {
    const {user}=useContext(AuthContext);
    const userdetails=Userdetails(user);
    const [allpost,refetch,isLoading]=Allpostshow(user.email);
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
           <div className="relative h-96">
            <div className="w-full h-72 overflow-hidden relative">

            <figure>
                    <PhotoProvider>
                    <PhotoView src={userdetails?.Cover}>
                    <img src={userdetails?.Cover} alt='' className="w-full h-72"></img>
                    </PhotoView>
                    </PhotoProvider>
                    </figure>
                    <input type="file" className='hidden' id="cover-img"></input>
               <label className="bg-white p-2 rounded-md absolute top-0 right-3 text-sm mt-60 cursor-pointer shadow-md" for="cover-img">
                
                <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon><span className="ml-2 font-medium " >Edit image</span>
               </label>
            </div>
            <div className="absolute bottom-0 ml-6 flex items-center gap-5">
            <div class="avatar relative">
            <div class="  w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 relative">
                <img src={userdetails?.image} alt=''/>
                
            </div>
            <input type="file" className='hidden' id="p-img"></input>
            <label className="bg-white rounded-full absolute bottom-0 right-0 text-center cursor-pointer p-2 shadow-md" for="p-img">
               
                <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
               </label>
            </div>
            
            <div>
                <h1 className="font-semibold text-2xl mt-3 mb-2">{userdetails?.name}</h1>
                <p className="text-sm font-medium text-slate-400">{userdetails?.email}</p>
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

export default Profile;