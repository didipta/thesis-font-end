import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import {faEarth,faVideoCamera,faPhotoFilm,faFaceSmile,faDeleteLeft} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Webcam from 'react-webcam';
import { AuthContext } from '../Context/Authprovider';
import { Userdetails } from '../Hook/Userdetails';
import { useForm } from 'react-hook-form';
import Smallloading from '../Loading/Smallloading';
import { toast, Toaster } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
const Creactpost = ({setposttext,refetch}) => {
    const [textarea,setTeaxtarea]=useState("");
    const [image,setImage]=useState("");
    const [loading,setLoading]=useState(false);
    const {user}=useContext(AuthContext);
    const userdetails=Userdetails(user);
    const { register, handleSubmit} = useForm();
    const Api=process.env.REACT_APP_imgbb_key;
    setposttext(textarea);
    const onSubmit = (data,e) =>
    {
          setLoading(true);
          const postadd={
            username:userdetails.name,
            useremail:userdetails.email,
            userimage:userdetails.image,
            posttext:textarea,
            postimg:"",
            date:new Date(),
            likeuser:[],
            Comment:[]
          }
          
          if(image!=="")
          {
            const imagepost=data.postimg[0];
            const formdata=new FormData();
            formdata.append('image',imagepost);
             const url=`https://api.imgbb.com/1/upload?key=${Api}`;
             fetch(url,{
              method:"POST",
              body:formdata
             })
             .then(res=>res.json())
             .then(image=>{
                if(image.success){
                   
                    postadd.postimg=image.data.url;
                    setpost(postadd);
                    e.target.reset();
                    setTeaxtarea("")
                    setImage("")
                    
                    
                }
                
          })
        }
        else
        {
            setpost(postadd);
            e.target.reset();
            setTeaxtarea("")
            
            
        }
       
          
          
    }
    const setpost=(post)=>{
        fetch("https://thesis-node-js.vercel.app/posts", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('Thankutoken')}`
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data =>{
            toast.success("Your post Successfully add")
            setLoading(false);
            refetch();
           
        })
        .catch(e=>
          {
            toast.error("Something wrong")
            setLoading(false);
          })
    }
    return (
        <div>
            <input type="checkbox" id="creact-post" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="creact-post" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center font-semibold mb-3">Creact Post</h1>
                <hr className="h-1 bg-slate-200"/>
                <div className="flex items-center gap-1 mt-5" >
                <div class="avatar online pr-2">
                    <div class="w-10 rounded-full">
                        <img src={userdetails?.image} alt="" />
                    </div>
                </div>
                <div>
                <h1 className="font-semibold">{userdetails?.name}</h1>
                <div class="badge badge-sm"><FontAwesomeIcon icon={faEarth} className="mr-2"></FontAwesomeIcon> Public</div>
                </div>
                
                </div>
                <div className="mt-3">
                    <textarea type="text" {...register("posttext")} onChange={(e)=>setTeaxtarea(e.target.value)} cols="20" rows="3"   className="w-full outline-none p-5 resize-none" placeholder="What's on your mind?Please share...."/>
                   <input type="file" className="w-0 h-0" id="img" accept="image/* , video/*" {...register("postimg")} onChange={(e)=>{setImage(e.target.files[0])}}></input>
                </div>
                {
                    image!==""&& <div className="w-full h-52 p-5 overflow-y-auto relative">
                     <img src={window.URL.createObjectURL(image)} alt="" className='w-96 h-96'></img>
                     <p className="absolute top-0 font-semibold cursor-pointer right-5 text-2xl" onClick={()=>setImage("")}>X</p>
                    </div>
                }
               
                <div className="flex items-center flex-wrap gap-1 justify-evenly text-sm">
                <div className="flex gap-2 items-center p-3 cursor-pointer">
                    <FontAwesomeIcon icon={faVideoCamera} className="text-lg text-rose-500"></FontAwesomeIcon>
                    <p>Live Video</p>
                </div>
                <label className="flex gap-2 items-center p-3 cursor-pointer" for="img">
                    <FontAwesomeIcon icon={faPhotoFilm} className="text-lg text-green-500"></FontAwesomeIcon>
                    <p>Photo/Video</p>
                </label>
                <div className="flex gap-2 items-center p-3">
                    <FontAwesomeIcon icon={faFaceSmile} className="text-lg text-yellow-500"></FontAwesomeIcon>
                    <p>Feeling/activity</p>
                </div>
             </div>
                <div className="mt-3">
                    <button className="w-full p-3 btn overflow-hidden" disabled={image!==""||textarea!==""?false:true}>
                       {!loading?"post":<Smallloading></Smallloading>}
                    </button>
                </div>
            </form>
        </div>
        </div>
        <Toaster
            className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
        </div>
    );
};

export default Creactpost;