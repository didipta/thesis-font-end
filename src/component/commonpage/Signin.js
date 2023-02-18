import React, { useContext, useState } from 'react';
import { faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/Authprovider';
import { useNavigate } from 'react-router-dom';
import Usetoken from '../Hook/Usetoken';
import { Userdetails } from '../Hook/Userdetails';
import swal from 'sweetalert';
import Forgetpass from './Forgetpass';
import Smallloading from '../Loading/Smallloading';
const Signin = () => {
    const { siginwithemailpassword,setLoading,signoutall}=useContext(AuthContext);
    const[pass,setPass]=useState(false);
    const { register,formState: { errors }, handleSubmit } = useForm();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token,userdetailsrole] = Usetoken(loginUserEmail);
    const [loadingd,setLoadingd]=useState(false);
    const navigator=useNavigate();
    const [message,setMessage]=useState("");
    console.log(message)
    if (token) {
        if(userdetailsrole==="user")
        {
           
            navigator('/home');
        }
        else if(userdetailsrole==="Admin")
        {
            
            navigator('/Admin');
        }
     
    }
    const onSubmit = (data,e) =>
    {
        signoutall();
        setLoadingd(true);
        localStorage.removeItem('Thankutoken');
        siginwithemailpassword(data.Email,data.Password)
        .then(res=>{
          const user=res.user;
          if(user.emailVerified===true)
          {
            const userdetails={
                name:user.displayName,
                email:user.email,
                image:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                type:"user",
                phone:"phone number not save",
                Cover:"https://images.livemint.com/img/2022/02/13/600x338/Whatsapp_1644717760662_1644717769022.png"
            }
            fetch("https://thesis-node-js.vercel.app/users", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userdetails)
            })
            .then(res => res.json())
            .then(data =>{
              
                setLoading(false)
                setLoginUserEmail(user.email)
                setLoadingd(false)

               
            })
            .catch(e=>
              {
              })
          }
          else
          {
            swal("Email Verification!", "Please check your gmail inbox or spam folder!");
            e.target.reset();
            signoutall();
          }
          
      })
      .catch(e=>
        {
          setMessage("Please Check your Email or password")
          setLoadingd(false)
        })
      
    }
    return (
        <div>
             <form className="w-full flex flex-col justify-center items-center gap-4 overflow-x-auto" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl font-bold text-rose-400">Welcome to the website :)</h1>
            <input type="email" {...register("Email", { required: "email is required" })} placeholder="Enter your email" class="input input-bordered input-error w-full max-w-xs" />
            <div className="w-full max-w-xs relative flex items-center justify-end">
            <input type={!pass?"password":"text"} {...register("Password", { required: "password is required" })} placeholder="Enter your password" class="input input-bordered input-error w-full max-w-xs" />
            {
                pass?<FontAwesomeIcon icon={faEyeSlash} className="absolute mr-3" onClick={()=>setPass(false)}></FontAwesomeIcon>
                :<FontAwesomeIcon icon={faEye} className="absolute mr-3" onClick={()=>setPass(true)}></FontAwesomeIcon>
                
            }
            
            </div>
            <label className="font-medium text-xs cursor-pointer link text-blue-700 w-full max-w-xs" htmlFor="forget">Forget password</label>
            {
             message!==""&&<label className="font-medium text-xs  text-red-500 w-full max-w-xs">{message}</label>
            }
            <button className="btn bg-rose-500 border-none text-white">
            {!loadingd?"Login":<Smallloading></Smallloading>}
                
                </button>
            </form>
            <Forgetpass></Forgetpass>
        </div>
    );
};

export default Signin;