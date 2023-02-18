import React from 'react';
import { Allusers } from '../Hook/Allusers';
import Loading from '../Loading/Loading';

const Chat = () => {
    const [allusers,isLoading]=Allusers();
    return (
        <div>
             <h1 className="font-medium mb-3 text-xl">People List</h1>
            <hr className="h-1 bg-slate-200 "/>
            {
                isLoading&&<Loading></Loading>
            }
            <div className="p-5 flex flex-col gap-5">
                {
                    allusers.map(user =>
                        <div className="flex items-center gap-2">
                            <div className="avatar online">
                            <div className="w-8 rounded-full">
                                <img src={user.image} />
                            </div>
                            </div>
                            <h1 className="font-medium">{user.name}</h1>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Chat;