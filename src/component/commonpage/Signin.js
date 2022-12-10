import React, { useState } from 'react';
import { faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Signin = () => {
    const[pass,setPass]=useState(false);
    
    return (
        <div>
             <form className="w-full flex flex-col justify-center items-center gap-4 overflow-x-auto">
            <h1 className="text-xl font-bold text-rose-400">Welcome to the website :)</h1>
            <input type="email" placeholder="Enter your email" class="input input-bordered input-error w-full max-w-xs" />
            <div className="w-full max-w-xs relative flex items-center justify-end">
            <input type={!pass?"password":"text"} placeholder="Enter your password" class="input input-bordered input-error w-full max-w-xs" />
            {
                pass?<FontAwesomeIcon icon={faEyeSlash} className="absolute mr-3" onClick={()=>setPass(false)}></FontAwesomeIcon>
                :<FontAwesomeIcon icon={faEye} className="absolute mr-3" onClick={()=>setPass(true)}></FontAwesomeIcon>
                
            }
            
            </div>
            
            <button className="btn bg-rose-500 border-none text-white">Login</button>
            </form>
        </div>
    );
};

export default Signin;