import { useEffect, useState } from "react";

export const Comment = (id,comment,email,refetch) => {
    const usercomment=[...comment];
    usercomment.push(email);
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
        
            refetch();
         })
};
