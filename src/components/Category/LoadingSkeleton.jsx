// src/pages/CategoryPage/LoadingSkeleton.jsx

import React from 'react';

const LoadingSkeleton = () => {
    return (
        <div className="animate-pulse p-6 h-[480px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                      rounded-2xl shadow-xl border border-gray-700/50">
            <div className="bg-gray-700/50 h-56 w-full rounded-xl mb-6"></div>
            <div className="space-y-3">
                <div className="bg-gray-600/50 h-4 w-1/3 rounded-md"></div>
                <div className="bg-gray-600/50 h-6 w-3/4 rounded-md"></div>
                <div className="bg-gray-600/50 h-4 w-1/2 rounded-md"></div>
                <div className="bg-gray-600/50 h-10 w-full rounded-xl mt-4"></div>
            </div>
        </div>
    );
};

export default LoadingSkeleton;