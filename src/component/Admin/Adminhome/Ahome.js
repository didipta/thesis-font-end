import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Allusers} from '../../Hook/Allusers';
import { Allpostshow} from '../../Hook/Allpostshow';
import { Allsongshow} from '../../Hook/Allsongshow';
import {faUser,faBlog,faMusic} from '@fortawesome/free-solid-svg-icons'
const Ahome = () => {
    const [allusers,a]=Allusers();
    const [allpost,c,b]=Allpostshow("");
    const [allsong,i,r]=Allsongshow();
    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
                <div className="flex justify-center items-center gap-4 p-4 bg-pink-600 rounded-md">
                    <div>
                        <FontAwesomeIcon icon={faUser} className="text-xl text-white"></FontAwesomeIcon>
                    </div>
                    <div className="font-semibold text-white">
                    <h1>{allusers.length}</h1>
                    <p>User's</p>
                    </div>
                    
                </div>
                <div className="flex justify-center items-center gap-4 p-4 bg-rose-600 rounded-md">
                    <div>
                        <FontAwesomeIcon icon={faBlog} className="text-xl text-white"></FontAwesomeIcon>
                    </div>
                    <div className="font-semibold text-white">
                    <h1>{allpost.length}</h1>
                    <p>Post's</p>
                    </div>
                    
                </div>
                <div className="flex justify-center items-center gap-4 p-4 bg-red-600 rounded-md">
                    <div>
                        <FontAwesomeIcon icon={faMusic} className="text-xl text-white"></FontAwesomeIcon>
                    </div>
                    <div className="font-semibold text-white">
                    <h1>{allsong.length}</h1>
                    <p>Song's</p>
                    </div>
                    
                </div>
                <div className="flex justify-center items-center gap-4 p-4 bg-pink-600 rounded-md">
                    <div>
                        <FontAwesomeIcon icon={faUser} className="text-xl text-white"></FontAwesomeIcon>
                    </div>
                    <div className="font-semibold text-white">
                    <h1>{allusers.length}</h1>
                    <p>User's</p>
                    </div>
                    
                </div>
                
               
                
                
            </div>
        </div>
    );
};

export default Ahome;