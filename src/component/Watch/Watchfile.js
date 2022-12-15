import React from 'react';

const Watchfile = () => {
    return (
        <div>
            <div className="mb-3 p-3">
                <h1 className="font-semibold text-lg p-2">Youtube Song</h1>
                <hr/>
            </div>
            <div className="grid lg:grid-cols-2 items-center gap-4 p-3">
            <iframe className="w-full h-48 shadow-lg rounded-md" src="https://www.youtube.com/embed/PdaZJ7l0Lso"></iframe>
            <iframe className="w-full h-48 shadow-lg rounded-md" src="https://www.youtube.com/embed/tasc11VSTmw"></iframe>
            <iframe className="w-full h-48 shadow-lg rounded-md" src="https://www.youtube.com/embed/TWSL9WVSpbw"></iframe>
            <iframe className="w-full h-48 shadow-lg rounded-md" src="https://www.youtube.com/embed/6ixhN9umyp4"></iframe>
            
            
           
            </div>
        </div>
    );
};

export default Watchfile;