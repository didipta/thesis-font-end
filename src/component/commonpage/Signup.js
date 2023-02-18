import React, { useContext, useState } from 'react';
import { faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Termsandcondition from './Termsandcondition';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { AuthContext } from '../Context/Authprovider';
import { toast, Toaster } from 'react-hot-toast';
import Smallloading from '../Loading/Smallloading';

const Signup = () => {
    const { createuser,upadateuserprofile,signoutall,EmailVerification}=useContext(AuthContext);
    const { register,formState: { errors }, handleSubmit } = useForm();
    const[pass,setPass]=useState(false);
    const [click,setClick]=useState(false);
    const [loadingd,setLoadingd]=useState(false);
    const onSubmit = (data,e) =>
    {
        signoutall();
        setLoadingd(true);
        localStorage.removeItem('Thankutoken');
        createuser(data.Email,data.Password)
         .then(res=>
             {
                console.log(res);
                 heandelupdateprofile(data.name,data.phonenumber)
                 EmailVerification();
                 toast.success("your Account is Registered")
                 swal("Email Verification!", "Please check your gmail inbox or spam folder!");

                 signoutall();
                 e.target.reset();
                 setLoadingd(false)
             })
             .catch(error =>{
                swal("Email Same!", "This email already have an account!");
                e.target.reset();
             })
       

            
    }
   
    const heandelupdateprofile=(name,number)=>
    {
        const profile={
            displayName:name,
            phoneNumber:number
        }
        upadateuserprofile(profile)
        .then(res=>
            {
              
            })
        .catch(e=>
            {
                
            })
        
    }
    return (
        <div>
            <form className="w-full flex flex-col justify-center items-center gap-4 overflow-x-auto" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl font-bold text-rose-400">Create Account :)</h1>
            <input type="text" placeholder="Enter your name" {...register("name", { required: "name is required" })} class="input input-bordered input-error w-full max-w-xs" />
            {errors.name && <p role="alert" className="text-red-400 text-xs">{errors.name?.message}</p>}
            <input type="text" {...register("phonenumber", { required: "Phonenumber is required" })} placeholder="Enter your phone number"  class="input input-bordered input-error w-full max-w-xs" />
            {errors.phonenumber && <p role="alert" className="text-red-400 text-xs">{errors.phonenumber?.message}</p>}
            <input type="email" {...register("Email", { required: "email is required" })} placeholder="Enter your email" class="input input-bordered input-error w-full max-w-xs" />
            {errors.Email && <p role="alert" className="text-red-400 text-xs">{errors.Email?.message}</p>}
            <div className="w-full max-w-xs relative flex items-center justify-end">
            <input type={!pass?"password":"text"}
            {...register("Password",{ required: "Password is required",
            minLength: { value: 6, message: "Password must be 6 characters long" },
            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' } 
          
          })}
            placeholder="Enter your password" class="input input-bordered input-error w-full max-w-xs" />
            {
                pass?<FontAwesomeIcon icon={faEyeSlash} className="absolute mr-3" onClick={()=>setPass(false)}></FontAwesomeIcon>
                :<FontAwesomeIcon icon={faEye} className="absolute mr-3" onClick={()=>setPass(true)}></FontAwesomeIcon>
                
            }
            
            </div>
            {errors.Password && <p role="alert" className="text-red-400 text-xs">{errors.Password?.message}</p>}
            <div className="  text-sm font-semibold flex justify-center items-center gap-2"><input type="checkbox"  class="checkbox checkbox-sm" onClick={(e)=>setClick(e.target.checked)}/><div className="">Accept <label htmlFor="Terms_condition"  className="text-sky-600 text-xs link">Terms and condition</label></div></div>
            <button className="btn bg-rose-500 border-none text-white" disabled={click?false:true}>
            {!loadingd?"Submit":<Smallloading></Smallloading>}
                </button>

            </form>
            <Termsandcondition></Termsandcondition>
            <Toaster
            className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
        </div>
    );
};

export default Signup;