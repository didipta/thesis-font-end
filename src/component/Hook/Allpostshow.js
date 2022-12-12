import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Authprovider";


export const Allpostshow = (email) => {
    const {signoutall}=useContext(AuthContext);
    const {data: allpost = [],refetch,isLoading} = useQuery({
        queryKey: ['allpost'],
        queryFn: async() =>{
            const res = await fetch(`https://thesis-node-js.vercel.app/posts?email=${email}`,
            {
                headers: {
                  authorization: `bearer ${localStorage.getItem('Thankutoken')}`
                }
              })
            const data = await res.json();
            return data;
           
        }
    });
    if(allpost.message==='Forbidden access'||allpost.message==='unauthorized access')
    {
                  signoutall();
    }
    return [allpost,refetch,isLoading];
};

