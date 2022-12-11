import React from 'react';
import loading from "../../component/img/loading.gif"
const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <img src={loading} alt="" className="w-40"></img>
        </div>
    );
};

export default Loading;