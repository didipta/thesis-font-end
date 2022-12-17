import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { TimeSince } from '../../Hook/TimeSince';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
const Showcomment = ({allcomment}) => {
    return (
        <div>
           
        

      
        <input type="checkbox" id="All-comment" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="All-comment" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">All Comment show!</h3>
            {
                  allcomment.map((postc)=><div className="flex p-2 relative mt-4">
                    <div class="avatar absolute">
                    <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={postc.userimage} alt="" />
                    </div>
                    </div>

                    <div className="flex flex-col gap-0 ml-12">
                    <div className="font-semibold text-sm flex items-center gap-3">
                   <p>{postc.username}</p>
                      <p className="font-semibold text-[10px] text-slate-400">{TimeSince(new Date(postc.date))} ago</p>

                      {
                        <label htmlFor="delect_comment">
                            <FontAwesomeIcon icon={faTrash} className="text-xs text-slate-500 cursor-pointer" ></FontAwesomeIcon>
                        </label>
                      }
                     
                    </div>
                    <div>
                        <p className="text-xs font-medium text-justify">{postc.commecttext}</p>
                    </div>
                    </div>
                    
                   </div>) 
                }
        </div>
        </div>
        </div>
    );
};

export default Showcomment;