import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import {faEllipsisV,faHeart,faComment,faShare} from '@fortawesome/free-solid-svg-icons';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { TimeSince } from '../Hook/TimeSince';
import { PostLike } from '../Hook/PostLike';
import { AuthContext } from '../Context/Authprovider';
import { Userdetails } from '../Hook/Userdetails';
import Postdelete from '../Postdetailes/Postdelete';
const Allpost = ({post,refetch}) => {
    const {user}=useContext(AuthContext);
    const userdetails=Userdetails(user);
   
    const handelliKe=(id)=>
    {
        const newlike={
            id:post.likeuser.length,
            email:user.email,
            useimg:userdetails.image,
            username:userdetails.name

        }
       
        PostLike(id,post.likeuser,newlike,refetch);
        
    }
    return (
        <div key={post._id}>
            <div className=" shadow-sm shadow-slate-300 rounded-sm p-2 lg:p-5 flex flex-col gap-1 mb-3 overflow-x-auto">
                <div className="flex justify-between">
               <Link to={user.email===post.useremail?"/home/profile":`/home/selectedprofile/${post.useremail}`}><div className="flex items-center gap-1" >
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
                
                
                </div></Link>
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
                     <li><label htmlFor={post._id} className="font-medium text-red-500">Delete</label></li>
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
                          (post.posttext).length<=290?post.posttext:<>{(post.posttext).slice(0,290)+"..."}<Link to={`/home/showpost/${post._id}`} className="text-blue-500 text-xs link font-medium">See more</Link></>
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
               <div className="flex items-center justify-evenly text-sm mt-2 gap-4">
                <div className=" pl-4 pr-4 p-1 rounded-md flex justify-center items-center gap-2 hover:bg-slate-200 cursor-pointer" onClick={()=>handelliKe(post._id)}>
                   <button className="text-lg" ><FontAwesomeIcon icon={faHeart} className={post.likeuser.some(x=>x.email===user.email)?"text-pink-400":"text-slate-700"} ></FontAwesomeIcon></button>({(post.likeuser.length)})
                   <p>Love</p>
                </div>
                <div className="pl-4 pr-4 p-2 rounded-md flex justify-center items-center gap-2 hover:bg-slate-200">
                 <FontAwesomeIcon icon={faComment} className="text-lg"></FontAwesomeIcon>({post.Comment.length})
                 <Link to={`/home/showpost/${post._id}`}><p>suggestion</p></Link>
                </div>
               </div>
            </div>
            <Postdelete
            postid={post._id}
            refetch={refetch}
            >

            </Postdelete>
        </div>
    );
};

export default Allpost;