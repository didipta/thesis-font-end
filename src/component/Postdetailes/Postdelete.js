import React from 'react';
import { toast } from 'react-hot-toast';

const Postdelete = ({postid,refetch}) => {
    const heandeldelete=()=>
    {
        fetch(`https://thesis-node-js.vercel.app/postdelete/${postid}`, {
            method:"DELETE", 
            headers: {
                authorization: `bearer ${localStorage.getItem('Thankutoken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
           
                toast.success('Delete successful.')
                refetch();
        })
    }
    return (
        <div>
        <input type="checkbox" id={postid} className="modal-toggle" />
        <div className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Becareful !</h3>
            <p className="py-4">Are you sure Delete the post!</p>
            <div className="modal-action ">
            <label htmlFor={postid} className="btn bg-red-500 border-none text-white" onClick={heandeldelete}>Yes!</label>
            <label htmlFor={postid} className="btn bg-green-500 border-none text-white">No!</label>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Postdelete;