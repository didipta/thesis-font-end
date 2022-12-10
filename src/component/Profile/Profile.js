import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import {faUpload,faCamera} from '@fortawesome/free-solid-svg-icons'
import Allpost from '../Homepage/Allpost';
import { AuthContext } from '../Context/Authprovider';
const Profile = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
           <div className="relative h-96">
            <div className="w-full h-72 overflow-hidden relative">

            <figure>
                    <PhotoProvider>
                    <PhotoView src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                    <img src='https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' className="w-full h-72"></img>
                    </PhotoView>
                    </PhotoProvider>
                    </figure>
                    <input type="file" className='hidden' id="cover-img"></input>
               <label className="bg-white p-2 rounded-md absolute top-0 right-3 text-sm mt-60 cursor-pointer " for="cover-img">
                
                <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon><span className="ml-2 font-medium" >Edit image</span>
               </label>
            </div>
            <div className="absolute bottom-0 ml-6 flex items-center gap-5">
            <div class="avatar relative">
            <div class="  w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 relative">
                <img src={user.photoURL} alt=''/>
                
            </div>
            <input type="file" className='hidden' id="p-img"></input>
            <label className="bg-white rounded-full absolute bottom-0 right-0 text-center cursor-pointer p-2 shadow-md" for="p-img">
               
                <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
               </label>
            </div>
            
            <div>
                <h1 className="font-semibold text-2xl mt-3 mb-2">Dipta saha</h1>
                <p className="text-sm font-medium text-slate-400">dipta@gmail.com</p>
            </div>
            </div>
        </div> 
        <div className="mt-5">
            <Allpost></Allpost>
        </div>
        </div>
    );
};

export default Profile;