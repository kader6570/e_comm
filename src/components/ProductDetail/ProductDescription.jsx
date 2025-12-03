// src/pages/ProductDetailPage/ProductDescription.jsx

import React from 'react';

const ProductDescription = ({ article }) => {
    return (
        <div className="mt-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 
                      backdrop-blur-sm text-gray-200 p-8 md:p-12 rounded-3xl 
                      shadow-2xl border border-gray-700/30 relative overflow-hidden">
            {/* Effet décoratif */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr 
                          from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" 
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    Description Détaillée
                </h3>
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Le <span className="font-bold text-white">{article.modele}</span> redéfinit 
                        les standards de sa catégorie. Doté d'une mémoire vive exceptionnelle de{' '}
                        <span className="font-bold text-indigo-300">{article.ram} Go</span> et 
                        d'un espace de stockage de{' '}
                        <span className="font-bold text-purple-300">{article.stokcage} Go</span>, 
                        il offre une fluidité sans précédent. Son design est un mélange parfait 
                        entre élégance et robustesse, faisant de lui l'outil idéal pour les 
                        professionnels et les passionnés de technologie. Découvrez la puissance 
                        à l'état pur.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;