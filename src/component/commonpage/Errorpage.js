import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import error from "../../component/img/404error.gif"
const Errorpage = () => {
    const location=useLocation();
    const from=location.state?.from?.pathname;
    const navigator=useNavigate();
    const loca=()=>
    {
        navigator(-1);
    }
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center p-5">
           <img src={error} alt=""></img> 
           <button class="btn " onClick={loca}>Back</button>
        </div>
    );
};

export default Errorpage;