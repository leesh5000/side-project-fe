import React from "react";

const PlusButton = ( ) => {
    return (
        <button className="fixed bottom-4 right-4 w-12 h-12 bg-slate-800 rounded-full flex flex-col items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-xs">모임</span>
        </button>
    );
};

export default PlusButton;