// src/pages/ProductDetailPage/LoadingState.jsx

import React from 'react';
import Header from '../../components/Header';

const LoadingState = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <Header />
            <div className="flex flex-col justify-center items-center h-[calc(100vh-80px)]">
                <div className="relative">
                    {/* Cercle animé principal */}
                    <div className="w-20 h-20 border-4 border-indigo-500/30 border-t-indigo-500 
                                  rounded-full animate-spin"></div>
                    {/* Cercle intérieur */}
                    <div className="absolute inset-0 w-20 h-20 border-4 border-purple-500/30 
                                  border-b-purple-500 rounded-full animate-spin 
                                  [animation-direction:reverse] [animation-duration:1.5s]"></div>
                </div>
                <p className="mt-6 text-xl font-bold text-transparent bg-clip-text 
                            bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse">
                    Chargement des spécifications techniques...
                </p>
            </div>
        </div>
    );
};

export default LoadingState;