// src/pages/CategoryPage/ErrorDisplay.jsx

import React from 'react';

const ErrorDisplay = ({ error }) => {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 max-w-md text-center">
                <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" 
                     stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-red-400 mb-2">Erreur de chargement</h3>
                <p className="text-gray-400 mb-4">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl 
                             font-semibold transition-all duration-300 
                             flex items-center justify-center gap-2 mx-auto"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Réessayer
                </button>
            </div>
        </div>
    );
};

export default ErrorDisplay;