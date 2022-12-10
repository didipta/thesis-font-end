import React, { useState } from 'react';
import { faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Signup = () => {
    const[pass,setPass]=useState(false);
    const [click,setClick]=useState(false);
    return (
        <div>
            <form className="w-full flex flex-col justify-center items-center gap-4 overflow-x-auto">
            <h1 className="text-xl font-bold text-rose-400">Create Account :)</h1>
            <input type="text" placeholder="Enter your name" class="input input-bordered input-error w-full max-w-xs" />
            <input type="text" placeholder="Enter your phone number" class="input input-bordered input-error w-full max-w-xs" />
            <input type="email" placeholder="Enter your email" class="input input-bordered input-error w-full max-w-xs" />
            <div className="w-full max-w-xs relative flex items-center justify-end">
            <input type={!pass?"password":"text"} placeholder="Enter your password" class="input input-bordered input-error w-full max-w-xs" />
            {
                pass?<FontAwesomeIcon icon={faEyeSlash} className="absolute mr-3" onClick={()=>setPass(false)}></FontAwesomeIcon>
                :<FontAwesomeIcon icon={faEye} className="absolute mr-3" onClick={()=>setPass(true)}></FontAwesomeIcon>
                
            }
            
            </div>
            <div className="  text-sm font-semibold flex justify-center items-center gap-2"><input type="checkbox"  class="checkbox checkbox-sm" onClick={(e)=>setClick(e.target.checked)}/><div className="">Accept <a to="condition" className="text-sky-600 text-xs">Terms and condition</a></div></div>
            <button className="btn bg-rose-500 border-none text-white" disabled={click?false:true}>Submit</button>
            
            </form>
        </div>
    );
};

export default Signup;