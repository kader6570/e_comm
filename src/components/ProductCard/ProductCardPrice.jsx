// src/components/ProductCard/ProductCardPrice.jsx

import React from 'react';

const ProductCardPrice = ({ prix }) => {
    return (
        <div className="flex items-end justify-between pt-2">
            {/* Prix */}
            <div>
                <p className="text-xs text-gray-500 font-medium mb-1">Prix</p>
                <p className="text-3xl font-black text-transparent bg-clip-text 
                            bg-gradient-to-r from-indigo-400 to-purple-400
                            group-hover:from-indigo-300 group-hover:to-purple-300 
                            transition-all duration-300">
                    {prix}
                </p>
                <p className="text-sm font-semibold text-gray-400 -mt-1">F.CFA</p>
            </div>
            
            {/* Icône flèche avec animation */}
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center
                          group-hover:bg-indigo-500 transition-all duration-300
                          group-hover:scale-110 shadow-lg group-hover:shadow-indigo-500/50">
                <svg className="w-5 h-5 text-white transition-transform duration-300 
                              group-hover:translate-x-0.5" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" 
                          d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    );
};

export default ProductCardPrice;