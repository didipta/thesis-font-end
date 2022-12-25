import { useEffect, useState } from "react";

export const Userdetails = (user) => {
    const [userdetails,setUserdetails]=useState({});
    useEffect(()=>{
        fetch(`https://thesis-node-js.vercel.app/users/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setUserdetails(data)
        })
    },[])

    return userdetails;
};

