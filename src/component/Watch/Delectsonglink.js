import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Delectsonglink = ({songlingid,refetch}) => {
    const deletecomment=()=>
    {
        fetch(`https://thesis-node-js.vercel.app/songlink/${songlingid}`, {
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
        <input type="checkbox" id="delect_songlink" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="delect_songlink" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold text-red-500">Are you sure </h3>
            <p className="py-3 font-medium">Delect the song Link!</p>
            <div className="flex gap-4 pl-3 pt-3">
            <label for="delect_songlink" class="btn bg-red-600 border-none text-white" onClick={deletecomment}>Yes!</label>
            <label for="delect_songlink" class="btn bg-green-600 border-none text-white">No!</label>
            </div>
           
        </div>
        </div>
        <Toaster
            className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
        </div>
    );
};

export default Delectsonglink;