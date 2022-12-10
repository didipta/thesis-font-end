import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faEarth,faVideoCamera,faPhotoFilm,faFaceSmile,faDeleteLeft} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Webcam from 'react-webcam';
const Creactpost = ({setposttext}) => {
    const [textarea,setTeaxtarea]=useState("");
    const [image,setImage]=useState("");
    setposttext(textarea);
    console.log(image);
    const videoConstraints={
        width:1280,
        height:720,
        facingMode:"user"
    }
    const webcameComponent=()=><Webcam
    audio={false}
    height={720}
    screenshotFormat="image/jpeg"
    width={1280}
    videoConstraints={videoConstraints}
    ></Webcam>
    return (
        <div>
            <input type="checkbox" id="creact-post" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="creact-post" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div>
                <h1 className="text-center font-semibold mb-3">Creact Post</h1>
                <hr className="h-1 bg-slate-200"/>
                <div className="flex items-center gap-1 mt-5" >
                <div class="avatar online pr-2">
                    <div class="w-10 rounded-full">
                        <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                </div>
                <div>
                <h1 className="font-semibold">Dipta saha</h1>
                <div class="badge badge-sm"><FontAwesomeIcon icon={faEarth} className="mr-2"></FontAwesomeIcon> Public</div>
                </div>
                
                </div>
                <div className="mt-3">
                    <textarea type="text" onChange={(e)=>setTeaxtarea(e.target.value)} className="w-full outline-none p-5 resize-none" placeholder="What's on your mind?Please share...."/>
                   <input type="file" className="w-0 h-0" id="img" accept="image/* , video/*" onChange={(e)=>{setImage(e.target.files[0])}}></input>
                </div>
                {
                    image!==""&& <div className="w-full h-52 p-5 overflow-y-auto relative">
                     <img src={window.URL.createObjectURL(image)} alt="" className='w-96 h-96'></img>
                     <p className="absolute top-0 font-semibold cursor-pointer right-5 text-2xl" onClick={()=>setImage("")}>X</p>
                    </div>
                }
               
                <div className="flex items-center flex-wrap gap-1 justify-evenly text-sm">
                <div className="flex gap-2 items-center p-3 cursor-pointer" onClick={webcameComponent}>
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
                    <button className="w-full p-3 btn" disabled={image!==""||textarea!==""?false:true}>
                        Post
                    </button>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Creactpost;