import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const Delectcomment = ({ id,commentid,comment}) => {
    const location=useLocation();
    const from=location.state?.from?.pathname;
    const navigator=useNavigate();
    const deletecomment=()=>
    {
        const likearr=[...comment];
        const savelike=likearr.filter(x=>x.id!==commentid);
        const usercomment=[...savelike];
        fetch(`https://thesis-node-js.vercel.app/postcomment?postid=${id}`,
        {
            method:"POST",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('Thankutoken')}`
            },
            body:JSON.stringify(usercomment)
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success("Successfully deleted")
            navigator(from, { replace: true });
             })
    }
    return (
        <div>
        <input type="checkbox" id="delect_comment" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="delect_comment" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold text-red-500">Are you sure </h3>
            <p className="py-3 font-medium">Delect the suggestion!</p>
            <div className="flex gap-4 pl-3 pt-3">
            <label for="delect_comment" class="btn bg-red-600 border-none text-white" onClick={deletecomment}>Yes!</label>
            <label for="delect_comment" class="btn bg-green-600 border-none text-white">No!</label>
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

export default Delectcomment;