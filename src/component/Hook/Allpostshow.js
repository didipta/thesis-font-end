import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


export const Allpostshow = (email) => {
    const {data: allpost = [],refetch,isLoading} = useQuery({
        queryKey: ['allpost'],
        queryFn: async() =>{
            const res = await fetch(`https://thesis-node-js.vercel.app/posts?email=${email}`);
            const data = await res.json();
            return data;
        }
    });
    return [allpost,refetch,isLoading];
};

