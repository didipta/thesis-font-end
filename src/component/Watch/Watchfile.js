import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Allsongshow } from '../Hook/Allsongshow';
import Loading from '../Loading/Loading';

const Watchfile = () => {
   const [allsong,isLoading,refetch]=Allsongshow();
    return (
        <div>
           
            <div className="mb-3 p-3">
                <h1 className="font-semibold text-lg p-2"><span className="text-red-400 text-xl">Youtube</span> Song</h1>
                <hr/>
            </div>
            {
                isLoading&&<Loading></Loading>
            }
            <div className="grid lg:grid-cols-2 items-center gap-4 p-3">
                {
                    allsong.map(x=>
                        <iframe className="w-full h-48 shadow-lg rounded-md" src={x.linkUrl}></iframe>
                        )
                }
           
            
            
           
            </div>
        </div>
    );
};

export default Watchfile;