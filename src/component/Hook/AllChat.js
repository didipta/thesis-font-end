import { useQuery } from "@tanstack/react-query";


const AllChat = (from,to) => {
    const {data: allchart = [],refetch,isLoading} = useQuery({
        queryKey: ['allchart'],
        queryFn: async() =>{
            const res = await fetch(`https://thesis-node-js.vercel.app/get/chat/${from}/${to}`,
            {
                headers: {
                  authorization: `bearer ${localStorage.getItem('Thankutoken')}`
                }
              })
            const data = await res.json();
            return data;
           
        }
    });
    return [allchart,isLoading,refetch];
};

export default AllChat;