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
    const [arrivalmessage,setarrivalmessage]=useState(null);


    useEffect(()=>{
        refetch();
    },[])


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
                setarrivalmessage({myself:false,message:msg})
            })
        }
    },[arrivalmessage])

    useEffect(()=>{
       arrivalmessage && Setallmessage((pre)=>[...pre],arrivalmessage)
     },[arrivalmessage])
    return (
        <div className=" relative h-[90vh]">
                <Link to={`/home/selectedprofile/${userdetails.email}`}><div className="flex items-center gap-3 p-5 shadow-lg">
                <div className="avatar online">
                <div className="w-8 rounded-full">
                <img src={userdetails.image} alt=""></img>
                </div>
                </div>
                    <p className="font-medium">{userdetails.name}</p>
                </div></Link>
                <div className="h-[65vh] overflow-scroll p-3 mt-3">
                   <Chatbox userdetails={userdetails} allchart={allmessage} isLoading={isLoading}></Chatbox>
                </div>
    
                <div className="w-full shadow-xl p-3 h-20 absolute bottom-2 rounded-2xl">
                <label className=' flex items-center gap-3 mt-3'>
                <input type="text" placeholder="Message" className="border-none outline-none w-full min-w-xs" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <button className="btn btn-sm" onClick={handelsend}>send</button>
                </label>
                
                
                </div>
                
        </div>
    );
};

export default Chatfild;