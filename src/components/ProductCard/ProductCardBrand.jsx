// src/components/ProductCard/ProductCardBrand.jsx

import React from 'react';

const ProductCardBrand = ({ marque }) => {
    return (
        <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 
                           rounded-full text-xs font-bold text-indigo-400 uppercase tracking-wider 
                           group-hover:bg-indigo-500/20 transition-colors duration-300">
                {marque}
            </span>
        </div>
    );
};

export default ProductCardBrand;