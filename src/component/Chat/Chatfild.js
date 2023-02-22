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
import {faRefresh} from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading/Loading';
import img from "../img/2343805.png"
const Chatfild = () => {
    const {user}=useContext(AuthContext);
    const userdetail=Userdetails(user);
    const [message,setMessage]=useState("");
    const userdetails =useLoaderData();
    const [allchart,isLoading,refetch]=AllChat(userdetail._id,userdetails._id);
    refetch();
    const [allmessage,Setallmessage]=useState([]);
    useEffect(()=>{
        Setallmessage(allchart);
    },[allchart])
    console.log(allmessage);
    const socket=useRef();
    const [arrivalmessage,setarrivalmessage]=useState({});
    const [load,setload]=useState(false);
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
    const handelsend=()=>
    {
        const msg={
            from:userdetail._id,
            to:userdetails._id,
            message:message,
            date:new Date(),
        }
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
    return (
        <div className=" relative h-screen">
            <div className="flex p-4 justify-between items-center shadow-lg">

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
                
                <div className="h-[84vh] overflow-scroll p-3 mt-1">
                   <Chatbox userdetails={userdetails} allchart={allmessage} isLoading={isLoading}></Chatbox>
                </div>
    
                <div className="w-full shadow-xl pl-4 pr-4 pt-0 pb-3 absolute bottom-0 rounded-2xl bg-slate-100">
                <label className=' flex items-center gap-3 mt-3'>
                <input type="text" placeholder="Message" className="border-none outline-none w-full min-w-xs bg-slate-100" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <button className="" onClick={handelsend} className="bg-slate-400 pl-4 pr-4 pt-1 pb-1 rounded-xl"><img src={img} alt="" className="w-10"></img></button>
                </label>
                
                
                </div>
                
        </div>
    );
};

export default Chatfild;