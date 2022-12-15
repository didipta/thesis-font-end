import { useQuery } from "@tanstack/react-query";


export const Allsongshow = () => {
   
    const {data: allsong = [],refetch,isLoading} = useQuery({
        queryKey: ['allsong'],
        queryFn: async() =>{
            const res = await fetch(`https://thesis-node-js.vercel.app/songlink`,
            {
                headers: {
                  authorization: `bearer ${localStorage.getItem('Thankutoken')}`
                }
              })
            const data = await res.json();
            return data;
           
        }
    });
    return [allsong,isLoading,refetch];
};

