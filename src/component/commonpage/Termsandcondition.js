import React from 'react';

const Termsandcondition = () => {
    return (
        <div>
        
        <input type="checkbox" id="Terms_condition" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="Terms_condition" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">Your Terms and Condition!</h3>
            <p className="py-4">1) Here you can share any mental problem of yours.</p>
            <p className="py-4">2) If any negative post or suggestion is given then that post or suggestion willl be deleted and warning will be given. </p>
            <p className="py-4">3) <span className="text-red-600">Warning</span> will be given twice after which the account will be blocked.</p>
            <p className="py-4">4) Please we all try to change the mind state of other users with good suggestions.</p>
        </div>
        </div>
        </div>
    );
};

export default Termsandcondition;