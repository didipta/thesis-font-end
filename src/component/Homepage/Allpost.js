import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import {faEllipsisV,faHeart,faComment,faShare} from '@fortawesome/free-solid-svg-icons';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
const Allpost = () => {
    return (
        <div>
            <div className=" shadow-lg p-2 lg:p-5 flex flex-col gap-1 mb-3">
                <div className="flex justify-between">
                <div className="flex items-center gap-1" >
                <div class="avatar online pr-2">
                    <div class="w-8 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className="flex flex-col gap-1"> 
                <h1 className="font-semibold">Dipta saha</h1>
                <div className="text-[10px] font-semibold">
                    <p className="rounded-lg">Public</p>
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
                <div className="p-2 text-sm leading-6 text-justify">
                  <p>
                  Mental health is a way of thinking that affects your thoughts and actions. It helps determine how you handle stress and relate to others. It is important at every life stage, from childhood and adolescence through adulthood.....<Link to="/home/showpost" className="text-blue-500 text-xs link font-medium">See more</Link>
                  </p>
                </div>
                <div className="overflow-hidden h-80 p-3">
                <figure>
                    <PhotoProvider>
                    <PhotoView src="https://onecms-res.cloudinary.com/image/upload/s--hZVHD4cG--/f_auto%2Cq_auto/v1/mediacorp/tdy/image/2022/07/14/20220714_istock_stress.jpg?itok=KQNipIQQ">
                    <img src='https://onecms-res.cloudinary.com/image/upload/s--hZVHD4cG--/f_auto%2Cq_auto/v1/mediacorp/tdy/image/2022/07/14/20220714_istock_stress.jpg?itok=KQNipIQQ' alt='' className="w-full h-96"></img>
                    </PhotoView>
                    </PhotoProvider>
                    </figure>
                    
                </div>
               <div className="flex items-center justify-evenly text-sm mt-2">
                <div className="w-full p-3 flex justify-center items-center gap-2">
                   <FontAwesomeIcon icon={faHeart} className="text-lg"></FontAwesomeIcon>(10)
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