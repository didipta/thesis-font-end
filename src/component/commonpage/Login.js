import React, { useContext, useState } from 'react';
import { faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Banner from './Banner';
import Signin from './Signin';
import Signup from './Signup';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../Context/Authprovider';
const Login = () => {
    const { googlelogin}=useContext(AuthContext);
    const [pagechange,Setpagechange]=useState(false);
    const googleprovider=new GoogleAuthProvider();
    const handelgooglesignin=()=>
    {
      googlelogin(googleprovider)
      .then(res=>{
        const user=res.user;
        console.log(user)
    })
}
    return (
        <div>
            <div class="flex flex-col lg:overflow-hidden lg:flex-row  gap-5 lg:p-20 p-5">
            <div class="grid flex-grow lg:w-5/12 hidden lg:block ">
            <Banner></Banner>
            </div> 
            <div class="grid flex-grow  p-5 mt-0 justify-center items-center">
                {
                    !pagechange?<Signin></Signin>:<Signup></Signup>
                }

                <div className="flex flex-col justify-center items-center gap-3 mb-5 mt-3">
                <h1 className="text-xl font-semibold">or</h1>
            <div className="flex flex-col gap-3 items-center">
                <div className="flex gap-2 items-center justify-center flex-wrap">
                    <div className="flex gap-2 items-center btn btn-outline" onClick={handelgooglesignin}>
                        <FontAwesomeIcon icon={faGoogle} className="text-lg text-rose-600"></FontAwesomeIcon>
                        <p className="text-[8px]">Continue with Google</p>
                    </div>
                    <div className="flex gap-2 items-center btn btn-outline">
                        <FontAwesomeIcon icon={faFacebook} className="text-lg text-blue-600"></FontAwesomeIcon>
                        <p className="text-[7.5px]">Continue with Facebook</p>
                    </div>
                </div>
               
            </div>
                </div>
           
           {
            
            !pagechange?<p className="text-xs font-semibold text-gray-600">Need an account?..<label className="text-blue-500 text-sm cursor-pointer" onClick={()=>Setpagechange(true)}>Sign up</label></p>:
            <p className="text-xs font-semibold text-gray-600">Already have an account?..<label className="text-blue-500 text-sm cursor-pointer" onClick={()=>Setpagechange(false)}>Sign In</label></p>
           }
           
            </div>
            </div>
        </div>
    );
};

export default Login;