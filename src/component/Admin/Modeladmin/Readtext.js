import React from 'react';

const Readtext = ({fulltext}) => {
    return (
        <div>
    
        <input type="checkbox" id="read-text" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="read-text" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold text-justify">Read Full text </h3>
            <p className="py-4">{fulltext}</p>
        </div>
        </div>
        </div>
    );
};

export default Readtext;