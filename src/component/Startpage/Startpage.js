import React from 'react';
import { Link } from 'react-router-dom';
import Bannerstart from './Bannerstart';

const Startpage = () => {
    return (
        <div className=" h-screen absolute top-0 pt-16 lg:pt-5 max-h-max flex gap-5 flex-col lg:flex-row items-center justify-center w-full p-2 z-[-10000]">
            <Bannerstart></Bannerstart>
            <div className="w-full">
                <div className="text-center lg:text-left">
                    <h1 className=" text-xl font-extrabold text-pink-600 p-1 pb-3">Thanku-Social_media_Website</h1>
                    <p className=" text-lg font-extrabold text-gray-600 p-1 pb-2">Problem Sharing Website</p>
                    <p className=" lg:w-10/12 w-11/12 text-justify m-auto lg:m-0 text-sm font-normal text-gray-400 p-1 pb-3">Thanku is a problem sharing website where you can share your problem and get solution in the form of suggestion.With can travel to defferent places to refresh your mind.You can get various legal benefits here if you want and also listen to different types of mind blowing songs to make your mind happy.With this you can chat live with any other person.</p>
                    <Link to="/login"><button className=" w-auto pl-6 pt-3 pr-6 pb-3 bg-pink-700 rounded-md text-md font-bold text-white m-1 hover:bg-pink-600">Login</button></Link>
                </div>
               
                
            </div>
        </div>
    );
};

export default Startpage;