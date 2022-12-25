import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import { Allusers } from '../Hook/Allusers';
import Loading from '../Loading/Loading';

const Searchbar = () => {
    const {user}=useContext(AuthContext);
    const [allusers,isLoading]=Allusers()
    const [users,setUsers]=useState([]);
    const handelsearch=(e)=>
    {
        if(e!=="")
        {
            const users=allusers.filter(x=>((x.name).toLowerCase()).match(e.toLowerCase()));
            setUsers(users);
        }
        else{
            setUsers([]);
        }
      
       
    }
    return (
        <>
             {
            isLoading===true?<Loading></Loading>:<div>
        
            <input type="checkbox" id="search-bar" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="search-bar" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Search......!</h3>
                <input type="text" placeholder="Search..." className="input input-bordered w-full mt-3" onChange={(e)=>handelsearch(e.target.value)}/>
                <div>
                <div className="flex flex-col pt-3">
                   {
                    users.map(x=>
                            <div className="flex items-center gap-1 p-2">
                                <div class="avatar online pr-2">
                                <div class="w-8 rounded-full">
                                    <img src={x.image} alt="" />
                                </div>
                            </div> 
                            <Link to={user.email===x.email?"/home/profile":`/home/selectedprofile/${x.email}`}><label htmlFor="search-bar" className="font-medium p-2 text-slate-700 cursor-pointer">{x.name}</label></Link>
                            </div>
                            
                     
                        )
                   }
                      </div>
                </div>
            </div>
            </div>
            </div>
        }
        
        </>
   
    );
};

export default Searchbar;