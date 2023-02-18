import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Chatfild = () => {
    const userdetails =useLoaderData();
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
            <div className="h-[65vh] m-2 overflow-scroll flex justify-center items-center">
               <h1>coming soon..............</h1>
            </div>

            <div className="w-full shadow-lg p-5 h-20 absolute bottom-2">
            <label className=' flex items-center gap-3 mt-3'>
            <input type="text" placeholder="Message" className="border-none outline-none w-full min-w-xs" />
            <button className="btn btn-sm">send</button>
            </label>
            
            
            </div>
           
        </div>
    );
};

export default Chatfild;