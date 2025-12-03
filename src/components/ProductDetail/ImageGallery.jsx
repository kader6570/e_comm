// src/pages/ProductDetailPage/ImageGallery.jsx

import React from 'react';

const ImageGallery = ({ 
    mainImage, 
    modele, 
    imageLoading, 
    setImageLoading, 
    imageThumbnails, 
    onThumbnailClick 
}) => {
    return (
        <div className="flex flex-col gap-6 relative z-10">
            {/* Image principale */}
            <div className="relative flex justify-center items-center bg-gray-800/30 
                          backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 
                          shadow-inner min-h-[450px]">
                {/* Badge "En Stock" */}
                <div className="absolute top-4 right-4 z-10">
                    <span className="px-4 py-2 bg-green-500/90 backdrop-blur-sm text-white 
                                   text-sm font-bold rounded-full shadow-lg border border-green-400/50
                                   flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        En Stock Immédiat
                    </span>
                </div>

                {/* Grille décorative en arrière-plan */}
                <div className="absolute inset-0 opacity-5"
                     style={{
                         backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
                         backgroundSize: '30px 30px'
                     }}>
                </div>

                {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 
                                      rounded-full animate-spin"></div>
                    </div>
                )}
                
                <img 
                    src={mainImage}
                    alt={modele} 
                    className={`relative z-10 w-full max-h-[500px] object-contain rounded-lg 
                              transition-all duration-700 hover:scale-105 filter drop-shadow-2xl
                              ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setImageLoading(false)}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/static/images/error_fallback.png';
                        setImageLoading(false);
                    }}
                />
                
                {/* Reflet lumineux */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent 
                              via-white/5 to-transparent opacity-0 hover:opacity-100 
                              transition-opacity duration-500 pointer-events-none rounded-2xl">
                </div>
            </div>
            
            {/* Barre de Miniatures */}
            {imageThumbnails.length > 1 && (
                <div className="flex gap-3 justify-center">
                    {imageThumbnails.map((src, index) => (
                        <button
                            key={index}
                            onClick={() => onThumbnailClick(src)}
                            className={`relative w-20 h-20 rounded-xl cursor-pointer overflow-hidden 
                                     transition-all duration-300 group
                                     ${mainImage === src 
                                         ? 'ring-4 ring-indigo-500 shadow-lg shadow-indigo-500/50' 
                                         : 'ring-2 ring-gray-700/50 hover:ring-indigo-400/50'
                                     }`}
                        >
                            <img 
                                src={src} 
                                alt={`Vue ${index + 1}`} 
                                className="object-cover h-full w-full group-hover:scale-110 
                                         transition-transform duration-300"
                            />
                            {/* Overlay au survol */}
                            <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 
                                          transition-colors duration-300"></div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;