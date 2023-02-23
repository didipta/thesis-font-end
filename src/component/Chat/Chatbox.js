import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/Authprovider';
import AllChat from '../Hook/AllChat';
import { TimeSince } from '../Hook/TimeSince';
import { Userdetails } from '../Hook/Userdetails';
import Loading from '../Loading/Loading';

const Chatbox = ({userdetails,allchart,isLoading}) => {
    const {user}=useContext(AuthContext);
    const userdetail=Userdetails(user);

    const [loading,setloading]=useState(false);

    useEffect(()=>{
        setTimeout(()=>
      {
        setloading(true);
      },2000)
       
    })
    
    
    console.log(allchart)
    return (
        <div>
            <div>
                {
                    !loading?<Loading></Loading>:<div>
                         {
                isLoading||allchart.length===0?<div>{allchart.length===0?<div>No message available</div>:<Loading></Loading>}</div>:
                <>
                 {
                allchart.map(x=>
                <div>
                    {
                     x.myself===false?   <div>
                     <div className="chat chat-start" key={x}>
                     <div className="chat-image avatar">
                         <div className="w-10 rounded-full">
                         <img src={userdetails.image} alt="" />
                         </div>
                     </div>
                     <div className="chat-header font-medium text-xs pb-2 pl-1">
                         {userdetails.name}
                     </div>
                     <div className="chat-bubble bg-pink-200 text-slate-600 font-medium text-sm flex flex-col gap-2">{x.message}
                     <time className="text-[9px] opacity-50 flex justify-end items-end">sent {TimeSince(new Date(x.date))} ago</time>
                     </div>
                     
                     </div>
                     </div>:
                        <div>
                        <div className="chat chat-end">
                          <div className="chat-header font-medium text-xs pb-2 pr-1">
                         
                            {userdetail.name}
                             
                          </div>
                          <div className="chat-bubble bg-slate-200 text-slate-600 font-medium text-sm flex flex-col gap-2" >{x.message}
                          <time className="text-[9px] opacity-50 flex justify-end items-end">sent {TimeSince(new Date(x.date))} ago</time>
                          </div>
                         
                          </div>
                        </div>
                    }
                    
                    
                </div>  
                    
                    )
            }
     
                </>
            }
                    </div>
                }
            </div>
           

           
      

    
        </div>
    );
};

export default Chatbox;