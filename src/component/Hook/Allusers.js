import { useQuery } from "@tanstack/react-query";

export const Allusers = () => {
    const {data: allusers = [],refetch,isLoading} = useQuery({
        queryKey: ['allusers'],
        queryFn: async() =>{
            const res = await fetch(`https://thesis-node-js.vercel.app/allusers`,
            {
                headers: {
                  authorization: `bearer ${localStorage.getItem('Thankutoken')}`
                }
              })
            const data = await res.json();
            return data;
           
        }
    });
    return [allusers,isLoading];
};

