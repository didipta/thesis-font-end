import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Authprovider";

export const Usetoken = email => {
    const [token, setToken] = useState('');
    const [userdetailsrole,setUserdetails]=useState({});
    useEffect(() => {
        if (email) {
            fetch(`https://thesis-node-js.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('Thankutoken', data.accessToken);
                        fetch(`https://thesis-node-js.vercel.app/users/${email}`)
                            .then(res => res.json())
                            .then(data => {
                                setUserdetails(data.type)
                               
                            })
                        setToken(data.accessToken);
                    }
                });
        }
    }, [email]);
    return [token,userdetailsrole];
}

export default Usetoken;