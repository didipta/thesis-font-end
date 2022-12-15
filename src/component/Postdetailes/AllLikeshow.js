import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';

const AllLikeshow = ({likeuser}) => {
    const {user}=useContext(AuthContext);
    return (
        <div>
        <input type="checkbox" id="like-model" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor="like-model" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <p className="font-bold text-lg p-2">All Likes</p>
        <hr/>
            {
                likeuser.map(x=><div className="flex items-center gap-3 mt-2">
                    <div class="avatar online pr-2">
                    <div class="w-6 rounded-full">
                        <img src={x.useimg} alt="" />
                    </div>
                </div>
                <div><Link to={user.email===x.email?"/home/profile":`/home/selectedprofile/${x.email}`}><p className="text-sm font-semibold text-blue-600">{user.email===x.email?"you":x.username}</p></Link></div>
                </div>)
            }
        </div>
        </div>
        </div>
    );
};

export default AllLikeshow;