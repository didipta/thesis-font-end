import { useEffect, useState } from "react";

export const PostLike = (id,like,email,refetch) => {
    console.log(id,like,email);
    const [userlike,setuseLike]=useState([]);
    const likearr=[...like];
    likearr.push(email);
    const savelike=likearr.filter(x=>x!==email);
    setuseLike(savelike)
    fetch(`http://localhost:5000/postlike?postid=${id}`,
    {
        method:"POST",
        body:userlike
    })
    .then(res=>res.json())
    .then(data=>{
            refetch();
         })
};

