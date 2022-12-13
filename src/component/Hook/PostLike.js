import { useEffect, useState } from "react";

export const PostLike = (id,like,newlike,refetch) => {
        const likearr=[...like];
        const savelike=likearr.filter(x=>x.email!==newlike.email);
        const userlike=[...savelike];
        if(!likearr.some(x=>x.email===newlike.email))
        {
            userlike.push(newlike);
        }
        fetch(`https://thesis-node-js.vercel.app/postlike?postid=${id}`,
        {
            method:"POST",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('Thankutoken')}`
            },
            body:JSON.stringify(userlike)
        })
        .then(res=>res.json())
        .then(data=>{
            
                refetch();
             })
};

