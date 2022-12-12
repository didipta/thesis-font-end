import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import {faEllipsisV,faHeart,faComment,faShare} from '@fortawesome/free-solid-svg-icons';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData, useLocation, useNavigate, useRevalidator } from 'react-router-dom';
import { TimeSince } from '../Hook/TimeSince';
import { AuthContext } from '../Context/Authprovider';
import { PostLike } from '../Hook/PostLike';
import { useReducer } from 'react';
import { Userdetails } from '../Hook/Userdetails';
import { useForm } from 'react-hook-form';
import { Comment } from '../Hook/Comment';
const Postdetails = () => {
    const post = useLoaderData();
    const location=useLocation();
    const from=location.state?.from?.pathname;
    const navigator=useNavigate();
    const {user}=useContext(AuthContext);
    const userdetails=Userdetails(user);
    const { register,formState: { errors }, handleSubmit } = useForm();
    const ref=()=>{
        navigator(from, { replace: true });
    }
   
    const handelliKe=(id)=>
    {
        PostLike(id,post.likeuser,user.email,ref);
        
    }
    const onSubmit = (data,e) =>
    {
        const comment={
            username:userdetails.name,
            useremail:userdetails.email,
            userimage:userdetails.image,
            commecttext:data.commecttext,
            date:new Date()
        }
        Comment(post._id,post.Comment,comment,ref)
        e.target.reset();
    }
    return (
        <div>
            <div className=" shadow-sm p-2 lg:p-5 flex flex-col gap-1 mb-3">
            <div className="flex justify-between">
                <div className="flex items-center gap-1" >
                <div class="avatar online pr-2">
                    <div class="w-8 rounded-full">
                        <img src={post.userimage} alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-1"> 
                <h1 className="font-semibold">{post.username}</h1>
                <div className="text-[10px] font-semibold flex items-center gap-3">
                    <p className="rounded-lg text-slate-600">Public</p>
                    <small className="text-slate-400">{TimeSince(new Date(post.date))} ago</small>
                </div>
                </div>
                
                
                </div>
                <div>
                <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <FontAwesomeIcon icon={faEllipsisV} className="text-lg"></FontAwesomeIcon>
                </label>
                <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                {post.useremail===user.email&&<>
                    <li>
                     <a class="justify-between">
                     Edit
                     </a>
                     </li>
                     <li><a>Delete</a></li>
                   </>
                     
                   }
                    <li><a>Settings</a></li>
                </ul>
                </div>
                </div>
                </div>
                {
                    post.posttext!==""&&<div className="p-2 text-sm leading-6 text-justify w-full">
                  <p className="pl-2 pr-2">
                      {
                          post.posttext
                      }
                   
                    </p>
                  </div>
                }
                
                {
                post.postimg!==""&&
                <div className="overflow-hidden h-80 p-3">
                    <figure>
                        <PhotoProvider>
                        <PhotoView src={post.postimg}>
                        <img src={post.postimg} alt='' className="w-full h-96"></img>
                        </PhotoView>
                        </PhotoProvider>
                        </figure>
                    
                </div>
                }
              <div className="flex items-center justify-evenly text-sm mt-2 pl-2 pr-2">
                <div className="w-full p-3 flex justify-center items-center gap-2">
                   <button className="text-lg" onClick={()=>handelliKe(post._id)}><FontAwesomeIcon icon={faHeart} className={post.likeuser.some(x=>x===user.email)?"text-pink-400":"text-slate-700"} ></FontAwesomeIcon></button>({post.likeuser.length})
                   <p>Love</p>
                </div>
                <Link to={`/home/showpost/${post._id}`}><div className="w-full p-3 flex justify-center items-center gap-2">
                   <FontAwesomeIcon icon={faComment} className="text-lg"></FontAwesomeIcon>({post.Comment.length})
                   <p>suggestion</p>
                </div></Link>
                <div className="w-full p-3 flex justify-center items-center gap-2">
                   <FontAwesomeIcon icon={faShare} className="text-lg"></FontAwesomeIcon>
                   <p>Share</p>
                </div>
               </div>
               <div className="flex items-center gap-4 mt-5">
                <div class="avatar online">
                <div class="w-10 rounded-full">
                    <img src={userdetails.image} />
                </div>
                </div>
                <div>
                    <form className=" w-full flex items-center bg-slate-200 rounded-3xl font-medium p-2" onSubmit={handleSubmit(onSubmit)}>
                    <textarea type="text" cols="90" rows="1" {...register("commecttext", { required: "Suggestion is required" })}   className="w-full outline-none bg-slate-200 p-2 resize-none   text-sm " placeholder="Please Sheare your suggestion...."/>
                    <button className="bg-pink-500 btn-sm border-none text-white rounded-xl">Send</button>
                    </form>
                    
                </div>
               </div>
               {errors.commecttext && <p role="alert" className="text-red-400 text-xs ml-20">{errors.commecttext?.message}</p>}
               <div>
                {
                   post.Comment.map((post)=><div className="flex p-2 relative mt-4">
                    <div class="avatar absolute">
                    <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={post.userimage} alt="" />
                    </div>
                    </div>

                    <div className="flex flex-col gap-0 ml-12">
                    <div className="font-semibold text-sm flex items-center gap-3">
                      <p>{post.username}</p>
                      <p className="font-semibold text-[10px] text-slate-400">{TimeSince(new Date(post.date))}</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-justify">{post.commecttext}</p>
                    </div>
                    </div>
                    
                   </div>) 
                }
               </div>
            </div>
        </div>
    );
};

export default Postdetails;