import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import { Allusers } from '../Hook/Allusers';
import Loading from '../Loading/Loading';

const Chat = () => {
    const {user}=useContext(AuthContext);
    const [allusers,isLoading]=Allusers();
    return (
        <div>
             <h1 className="font-medium mb-3 text-xl pl-4">People List</h1>
            <hr className="h-1 bg-slate-200 "/>
            {
                isLoading&&<Loading></Loading>
            }
            <div className="p-5 flex flex-col gap-5">
                {
                    allusers.filter(u=>u.email!==user.email).map(user =>
                        <Link to={`/home/chatfild/${user?.email}`}><div className="flex items-center gap-2 bg-pink-100 p-3 rounded-2xl">
                            <div className="avatar online">
                            <div className="w-8 rounded-full">
                                <img src={user.image} />
                            </div>
                            </div>
                            <div>
                            <h1 className="font-medium">{user.name}</h1>
                            <p className="text-xs text-slate-400">Open Your message</p>
                            </div>
                           
                        </div></Link>
                        )
                }
            </div>
        </div>
    );
};

export default Chat;