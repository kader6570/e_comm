// src/pages/ProductDetailPage/ProductInfo.jsx

import React from 'react';
import ProductSpecs from './ProductSpecs';
import { useNavigate } from 'react-router-dom'; // Assurez-vous que cette importation est présente

const ProductInfo = ({ article, marqueNom, specs }) => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <div className="mt-10 lg:mt-0 relative z-10">
            {/* Badge marque avec gradient (inchangé) */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r 
                          from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 
                          rounded-full mb-4">
                <svg className="w-4 h-4 text-indigo-400 mr-2" fill="none" stroke="currentColor" 
                     viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
                    {marqueNom}
                </span>
            </div>

            {/* Titre produit (inchangé) */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white 
                         leading-tight mb-6">
                {article.modele}
            </h2>

            {/* Prix et Statut (inchangé) */}
            <div className="flex items-end justify-between border-b border-gray-700/50 pb-6 mb-6">
                <div>
                    <p className="text-sm text-gray-400 mb-2 font-medium">Prix de vente</p>
                    <p className="text-5xl font-black text-transparent bg-clip-text 
                               bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
	    {/* {article.prix.toLocaleString() */}
	    		Le meilleur du marché !
                    </p>
                    <p className="text-2xl text-gray-300 font-bold -mt-1">FRANCS CFA</p>
                </div>
            </div>
            
            {/* Spécifications */}
            <ProductSpecs specs={specs} />

            {/* Bouton CTA (Mode Vitrine) - Style mis à jour */}
            <div className="space-y-4">
                <button
                    type="button"
                    onClick={handleContactClick}
                    // CLASSES TAILWIND MODIFIÉES POUR LE STYLE LUMINEUX ET EN ACCENT
                    className="w-full py-5 px-8 rounded-2xl text-lg font-bold text-white 
                             bg-gradient-to-r from-indigo-600 to-purple-600 
                             shadow-lg shadow-indigo-500/40 
                             hover:from-indigo-500 hover:to-purple-500
                             active:scale-[0.98] transition-all duration-300 
                             flex items-center justify-center gap-3 relative overflow-hidden"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Contactez-nous pour Commander</span>
                </button>
                
                {/* Message d'information (inchangé) */}
                <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/30 
                              rounded-xl">
                    <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" 
                         stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-sm text-blue-300">
                        <p className="font-bold mb-1">Mode Vitrine Activé</p>
                        <p className="text-blue-200/80">
                            Pour passer commande ou connaître les options de financement, 
                            contactez notre équipe commerciale.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
