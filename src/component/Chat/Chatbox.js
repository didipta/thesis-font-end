import React from 'react';
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
    
    
    console.log(allchart)
    return (
        <div>
            {
                isLoading||allchart.length===0?<Loading></Loading>:
                <>
                 {
                allchart.map(x=>
                <div>
                    {
                     x.myself===false?   <div>
                     <div className="chat chat-start">
                     <div className="chat-image avatar">
                         <div className="w-10 rounded-full">
                         <img src={userdetails.image} alt="" />
                         </div>
                     </div>
                     <div className="chat-header font-medium text-xs pb-2 pl-4">
                         {userdetails.name}
                         <time className="text-xs opacity-50 ml-2">{TimeSince(new Date(x.date))}</time>
                     </div>
                     <div className="chat-bubble bg-pink-200 text-slate-600 font-medium text-sm">{x.message}</div>
                     
                     </div>
                     </div>:
                        <div>
                        <div className="chat chat-end">
                          <div className="chat-header font-medium text-xs pb-2 pr-4">
                              {userdetail.name}
                              <time className="text-xs opacity-50 ml-2">{TimeSince(new Date(x.date))}</time>
                          </div>
                          <div className="chat-bubble bg-slate-200 text-slate-600 font-medium text-sm" >{x.message}</div>
                          </div>
                        </div>
                    }
                    
                    
                </div>  
                    
                    )
            }
     
                </>
            }

           
      

    
        </div>
    );
};

export default Chatbox;