import React, { useState } from 'react';
import { faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Banner from './Banner';
const Login = () => {
    const[pass,setPass]=useState(false);
    return (
        <div>
            <div class="flex flex-col lg:overflow-hidden lg:flex-row h-[80vh] lg:p-20 p-5">
            <div class="grid flex-grow card  place-items-center lg:w-5/12 hidden lg:block">
            <Banner></Banner>
            </div> 
            <div class="grid flex-grow card  place-items-center p-5">
            
            <form className="w-full flex flex-col justify-center items-center gap-4 overflow-x-auto">
            <h1 className="text-xl font-bold text-rose-400">Welcome to the website :)</h1>
            <input type="text" placeholder="Enter your email" class="input input-bordered input-error w-full max-w-xs" />
            <div className="w-full max-w-xs relative flex items-center justify-end">
            <input type={!pass?"password":"text"} placeholder="Enter your password" class="input input-bordered input-error w-full max-w-xs" />
            {
                pass?<FontAwesomeIcon icon={faEyeSlash} className="absolute mr-3" onClick={()=>setPass(false)}></FontAwesomeIcon>
                :<FontAwesomeIcon icon={faEye} className="absolute mr-3" onClick={()=>setPass(true)}></FontAwesomeIcon>
                
            }
            
            </div>
            
            <button className="btn bg-rose-500 border-none text-white">Login</button>
            <h1 className="text-xl font-semibold">or</h1>
            <div className="flex flex-col gap-3 items-center">
                <div className="flex gap-2 items-center justify-center flex-wrap">
                    <div className="flex gap-2 items-center btn btn-outline">
                        <FontAwesomeIcon icon={faGoogle} className="text-lg text-rose-600"></FontAwesomeIcon>
                        <p className="text-[8px]">Continue with Google</p>
                    </div>
                    <div className="flex gap-2 items-center btn btn-outline">
                        <FontAwesomeIcon icon={faFacebook} className="text-lg text-blue-600"></FontAwesomeIcon>
                        <p className="text-[7.5px]">Continue with Facebook</p>
                    </div>
                </div>
                <p className="text-xs font-semibold text-gray-600">Need an account?..<a className="text-blue-500 text-sm">Sign up</a></p>
            </div>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Login;