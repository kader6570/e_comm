// src/components/ProductCard/ProductCardBadge.jsx

import React from 'react';
import { BADGE_TEXT } from './constants';

const ProductCardBadge = () => {
    return (
        <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold 
                           rounded-full shadow-lg border border-green-400/50">
                {BADGE_TEXT.inStock}
            </span>
        </div>
    );
};

export default ProductCardBadge;