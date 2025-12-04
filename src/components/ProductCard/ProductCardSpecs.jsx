// src/components/ProductCard/ProductCardSpecs.jsx

import React from 'react';

const ProductCardSpecs = ({ ram, stockage }) => {
    return (
        <div className="flex items-center justify-between gap-3 py-3 px-4 
                      bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/30">
            {/* RAM */}
            <div className="flex items-center gap-2 flex-1">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                </div>
                <div>
                    <p className="text-xs text-gray-500 font-medium">RAM</p>
                    <p className="text-sm font-bold text-indigo-300">{stockage} Go</p>
                </div>
            </div>
            
            {/* Séparateur */}
            <div className="w-px h-10 bg-gray-700"></div>
            
            {/* Stockage */}
            <div className="flex items-center gap-2 flex-1">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                </div>
                <div>
                    <p className="text-xs text-gray-500 font-medium">Stockage</p>
                    <p className="text-sm font-bold text-purple-300">{ram} Go</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCardSpecs;