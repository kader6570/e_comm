// src/pages/CategoryPage/MobileFilterButton.jsx

import React from 'react';

const MobileFilterButton = ({ selectedBrand, onClick }) => {
    return (
        <button 
            onClick={onClick}
            className="fixed bottom-6 right-6 lg:hidden 
                     bg-gradient-to-r from-indigo-600 to-purple-600 
                     hover:from-indigo-500 hover:to-purple-500
                     text-white px-6 py-3.5 rounded-full 
                     shadow-2xl shadow-indigo-400/50 
                     transition-all duration-300 hover:scale-105
                     z-40 flex items-center space-x-2 font-bold"
            aria-label="Ouvrir les filtres"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v4.586l-4 4v-4.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>Filtres</span>
            {selectedBrand && (
                <span className="bg-white/20 rounded-full w-6 h-6 flex items-center 
                               justify-center text-xs font-bold">
                    1
                </span>
            )}
        </button>
    );
};

export default MobileFilterButton;