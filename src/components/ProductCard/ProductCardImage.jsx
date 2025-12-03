// src/components/ProductCard/ProductCardImage.jsx

import React from 'react';
import { FALLBACK_IMAGES } from './constants';

const ProductCardImage = ({ thumbnailUrl, modele }) => {
    return (
        <div className="relative h-56 overflow-hidden flex items-center justify-center 
                        bg-gradient-to-br from-gray-800/50 to-gray-900/50 
                        backdrop-blur-sm rounded-t-2xl p-6 border-b border-gray-700/30">
            {/* Effet de grille en arrière-plan */}
            <div className="absolute inset-0 opacity-5"
                 style={{
                     backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
                     backgroundSize: '20px 20px'
                 }}>
            </div>
            
            {/* Image optimisée */}
            <img
                src={thumbnailUrl}
                alt={modele}
                loading="lazy"
                decoding="async"
                className="relative z-10 h-44 object-contain group-hover:scale-110 
                         transition-transform duration-700 filter drop-shadow-2xl"
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = FALLBACK_IMAGES.error;
                }}
            />
            
            {/* Reflet lumineux au survol */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
    );
};

export default ProductCardImage;