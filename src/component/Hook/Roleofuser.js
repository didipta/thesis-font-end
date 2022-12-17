import { useState } from "react";
import { useEffect } from "react";


export const Roleofuser = (user) => {
    const [userdetails,setUserdetails]=useState("");
    const [roleloading,setRoleloading]=useState(true);
    useEffect(()=>{
        if (user) {
            fetch(`https://thesis-node-js.vercel.app/users/${user}`)
        .then(res => res.json())
        .then(data => {
            setUserdetails(data.type)
            setRoleloading(false)
        })
        }
        
    },[user])

    return [userdetails,roleloading]
};
