import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faVideoCamera,faPhotoFilm,faFaceSmile} from '@fortawesome/free-solid-svg-icons'
import Allpost from './Allpost';
import Creactpost from './Creactpost';
import { useState } from 'react';
const Postpart = () => {
    const[posttext,setposttext]=useState("");
    return (
        <div className="flex flex-col gap-4">
           <div className="shadow-lg p-3 lg:p-5">
             <div className="flex items-center gap-4 mb-3">
             <div class="avatar online pr-2">
            <div class="w-12 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
            </div>
             </div>
             <label htmlFor="creact-post" className="bg-slate-400 w-full p-2 rounded-xl text-zinc-300 overflow-hidden cursor-pointer">
                <p className="w-96">{posttext===""?"What's on your mind?Please share....":posttext}</p>
                </label>
             <label className="block cursor-pointer lg:hidden" htmlFor="creact-post">
                    <FontAwesomeIcon icon={faPhotoFilm} className="text-lg text-green-500"></FontAwesomeIcon>
                </label>
             </div>
             <div className="lg:flex items-center flex-wrap gap-1 justify-evenly text-sm hidden">
                <div className="flex gap-2 items-center p-3">
                    <FontAwesomeIcon icon={faVideoCamera} className="text-lg text-rose-500"></FontAwesomeIcon>
                    <p>Live Video</p>
                </div>
                <label className="flex gap-2 items-center p-3 cursor-pointer"  htmlFor="creact-post">
                    
                    <FontAwesomeIcon icon={faPhotoFilm}  className="text-lg text-green-500"></FontAwesomeIcon>
                    <p>Photo/Video</p>
                </label>
                <div className="flex gap-2 items-center p-3">
                    <FontAwesomeIcon icon={faFaceSmile} className="text-lg text-yellow-500"></FontAwesomeIcon>
                    <p>Feeling/activity</p>
                </div>
             </div>
           </div>
           <div className="p-0 lg:p-5">
            <Allpost></Allpost>
            <Allpost></Allpost>
            <Allpost></Allpost>
            <Allpost></Allpost>
            <Allpost></Allpost>
            <Allpost></Allpost>
           </div>

           <Creactpost
           setposttext={setposttext}
           >

           </Creactpost>
        </div>
    );
};

export default Postpart;