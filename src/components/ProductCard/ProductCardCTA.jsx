// src/components/ProductCard/ProductCardCTA.jsx

import React from 'react';
import { CTA_TEXT } from './constants';

const ProductCardCTA = ({ onClick }) => {
    return (
        <button 
            className="w-full mt-4 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 
                     hover:from-indigo-500 hover:to-purple-500
                     text-white text-sm font-bold rounded-xl 
                     shadow-lg shadow-indigo-600/30 hover:shadow-xl hover:shadow-indigo-500/40
                     transition-all duration-300 
                     border border-indigo-500/50
                     relative overflow-hidden group/btn"
            onClick={onClick}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {CTA_TEXT}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </span>
            {/* Effet de brillance au survol */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                          -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
        </button>
    );
};

export default ProductCardCTA;