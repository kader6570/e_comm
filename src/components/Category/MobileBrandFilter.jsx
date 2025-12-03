// src/pages/CategoryPage/MobileBrandFilter.jsx

import React from 'react';

const MobileBrandFilter = ({ marques, selectedBrand, onBrandSelect }) => {
    return (
        <div className="lg:hidden mb-6">
            <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" 
                     viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="text-sm font-bold text-gray-700">Filtrer par marque :</span>
            </div>
            <div className="overflow-x-auto whitespace-nowrap pb-2 -mx-1">
                <button 
                    onClick={() => onBrandSelect(null)}
                    className={`inline-block py-2 px-4 mx-1 rounded-full text-sm 
                             font-semibold transition-all duration-300 ${
                        selectedBrand === null 
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                            : 'bg-white text-gray-700 hover:bg-gray-100 shadow border border-gray-200'
                    }`}
                >
                    Tout
                </button>
                {marques.map(marque => (
                    <button 
                        key={marque.nom_marque}
                        onClick={() => onBrandSelect(marque.nom_marque)}
                        className={`inline-block py-2 px-4 mx-1 rounded-full text-sm 
                                 font-semibold transition-all duration-300 ${
                            selectedBrand === marque.nom_marque 
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                                : 'bg-white text-gray-700 hover:bg-gray-100 shadow border border-gray-200'
                        }`}
                    >
                        {marque.nom_marque}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MobileBrandFilter;