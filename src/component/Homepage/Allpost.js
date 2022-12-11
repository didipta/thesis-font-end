import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import {faEllipsisV,faHeart,faComment,faShare} from '@fortawesome/free-solid-svg-icons';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { TimeSince } from '../Hook/TimeSince';
import { PostLike } from '../Hook/PostLike';
import { AuthContext } from '../Context/Authprovider';
const Allpost = ({post,refetch}) => {
    const {user}=useContext(AuthContext);
    const [like,setLike]=useState(false)
    console.log(like);
    const handelliKe=(id)=>
    {
        const likearr=[...post.likeuser];
        const savelike=likearr.filter(x=>x!==user.email);
        const userlike=[...savelike];
        if(!likearr.some(x=>x===user.email))
        {
            userlike.push(user.email);
        }
        
        setLike(likearr.some(x=>x===user.email))
        fetch(`http://localhost:5000/postlike?postid=${id}`,
        {
            method:"POST",
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(userlike)
        })
        .then(res=>res.json())
        .then(data=>{
            
                refetch();
             })
    }
    return (
        <div key={post._id}>
            <div className=" shadow-sm shadow-slate-300 rounded-sm p-2 lg:p-5 flex flex-col gap-1 mb-3">
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
                    <li>
                    <a class="justify-between">
                    Edit
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Delete</a></li>
                </ul>
                </div>
                </div>
                </div>
                {
                    post.posttext!==""&&<div className="p-2 text-sm leading-6 text-justify w-full">
                  <p className="pl-2 pr-2">
                      {
                          (post.posttext).length<=290?post.posttext:<>{(post.posttext).slice(0,290)+"..."}<Link to="/home/showpost" className="text-blue-500 text-xs link font-medium">See more</Link></>
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
                <Link to="/home/showpost"><div className="w-full p-3 flex justify-center items-center gap-2">
                   <FontAwesomeIcon icon={faComment} className="text-lg"></FontAwesomeIcon>(15)
                   <p>Comment</p>
                </div></Link>
                <div className="w-full p-3 flex justify-center items-center gap-2">
                   <FontAwesomeIcon icon={faShare} className="text-lg"></FontAwesomeIcon>
                   <p>Share</p>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Allpost;