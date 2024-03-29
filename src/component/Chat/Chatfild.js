import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import AllChat from '../Hook/AllChat';
import { Userdetails } from '../Hook/Userdetails';
import Chatbox from './Chatbox';
import { io } from 'socket.io-client';
import { useRef } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRefresh,faIcons} from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading/Loading';
import img from "../img/2343805.png"
import EmojiPicker from 'emoji-picker-react';
import { useForm } from 'react-hook-form';
const Chatfild = () => {
    const {user}=useContext(AuthContext);
    const userdetail=Userdetails(user);
    const [message,setMessage]=useState("");
    const { register, handleSubmit } = useForm();
    const userdetails =useLoaderData();
    const [allchart,isLoading,refetch]=AllChat(userdetail._id,userdetails._id);
    refetch();
    const [allmessage,Setallmessage]=useState([]);
    useEffect(()=>{
        Setallmessage(allchart);
    },[allchart])
    console.log(message);
    const socket=useRef();
    const [arrivalmessage,setarrivalmessage]=useState({});
    const [load,setload]=useState(false);
    const [emoji,setemoji]=useState(false);
    const [fix,setFix]=useState(false);
    const Refresh=()=>
    {
        setload(true)
        refetch();
        setload(false)
    }

    useEffect(()=>{
        refetch();
    },[userdetail._id,userdetails._id])


    useEffect(()=>{
        if(userdetails!=="")
        {
            socket.current=io("https://socketio-production-bc70.up.railway.app/");
            socket.current.emit("addUser",userdetail._id);
        }
    },[userdetail._id]);

    console.log(socket);
    const onSubmit=(data,e)=>
    {
       sendmsgtext();
       e.target.reset();
    }
    

    const sendmsgtext=()=>
    {
        const msg={
            from:userdetail._id,
            to:userdetails._id,
            message:message,
            date:new Date(),
        }
        const newsendmsg={
            myself:true,message:message,date:new Date()
        }
        Setallmessage([...allmessage,newsendmsg]);
        socket.current.emit("send-msg",{
            to:userdetails._id,
            from:userdetail._id,
            message:message
        });

        fetch("https://thesis-node-js.vercel.app/msg", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('Thankutoken')}`
            },
            body: JSON.stringify(msg)
        })
        .then(res => res.json())
        .then(data =>{
            refetch();
        })
        .catch(e=>
          {
          })

          setMessage("");
    }
    useEffect(()=>{
        if(socket.current)
        {
            socket.current.on("msg-receive",(msg)=>{
                console.log(msg)
                setarrivalmessage({myself:false,message:msg,date:new Date()})
            })
        }
    },[socket.current])


    useEffect(()=>{
       arrivalmessage && Setallmessage((pre)=>[...pre],arrivalmessage)
     },[arrivalmessage])



     const setfixed=()=>{
        if(window.scrollY>2)
        {
            setFix(true);
        }
        else
        {
            setFix(false)
        }
     }
     window.addEventListener("scroll",setfixed);
    return (
        <div className={fix&&" h-full fixed w-full top-0 max-w-3xl min-w-2xl z-[1000] bg-white"}>
         <div className="relative h-full flex flex-col p-2">
            <div className="flex p-4 justify-between items-center shadow-lg z-[1000] ">

            <Link to={`/home/selectedprofile/${userdetails.email}`}><div className="flex items-center gap-3">
                <div className="avatar online">
                <div className="w-8 rounded-full">
                <img src={userdetails.image} alt=""></img>
                </div>
                </div>
                    <p className="font-medium">{userdetails.name}</p>
                </div></Link>

                <div className="tooltip cursor-pointer tooltip-left" data-tip="Message Refresh" onClick={Refresh}>
                   {load?<div className="w-12"><Loading></Loading></div>:<FontAwesomeIcon icon={faRefresh} className="text-pink-600 font-semibold"></FontAwesomeIcon>} 
                </div>

            </div>
                
                <div className=" h-[80vh] w-full  overflow-y-auto mt-1">
                   <Chatbox userdetails={userdetails} allchart={allmessage} isLoading={isLoading}></Chatbox>
                </div>
    
                <form className="w-full shadow-xl pl-4 pr-4 pt-0 pb-3  rounded-2xl bg-slate-100" onSubmit={handleSubmit(onSubmit)}>
                <label className=' flex items-center gap-3 mt-3'>
                    <FontAwesomeIcon icon={faIcons} className={`  cursor-pointer ${!emoji?"text-stone-400":"text-stone-800"}`} onClick={()=>setemoji(!emoji)}></FontAwesomeIcon>
                <input type="text" onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="Message" className="border-none outline-none w-full min-w-xs bg-slate-100" />
                <button className="bg-slate-300 pl-4 pr-4 pt-1 pb-1 rounded-xl"><img src={img} alt="" className="w-7"></img></button>
                </label>
                {
                    emoji&&  <div className="p-3">
                    <EmojiPicker width="100%" onEmojiClick={(emoji)=>setMessage(message+emoji.emoji)}/>
                    </div>
                }
              
                
                
                </form>
                
        </div>
        </div>
        
    );
};

export default Chatfild;