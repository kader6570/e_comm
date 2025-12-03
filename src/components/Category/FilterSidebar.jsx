// src/pages/CategoryPage/FilterSidebar.jsx

import React from 'react';
import { SORT_OPTIONS } from './constants';

const FilterSidebar = ({ 
    marques, 
    selectedBrand, 
    sortOrder, 
    onBrandSelect, 
    onSortChange, 
    onClose 
}) => {
    return (
        <aside className="w-full p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                        text-gray-200 rounded-2xl shadow-2xl h-full overflow-y-auto lg:h-fit 
                        sticky lg:top-24 border border-gray-700/50">
            
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-700/50">
                <h3 className="text-2xl font-black text-transparent bg-clip-text 
                             bg-gradient-to-r from-white to-indigo-300">
                    Raffiner la Recherche
                </h3>
                <button 
                    onClick={onClose} 
                    className="text-gray-400 hover:text-red-400 lg:hidden p-2 rounded-full 
                             hover:bg-red-500/10 transition-all duration-300"
                    aria-label="Fermer les filtres"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            {/* Section Marques */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-black text-indigo-400 uppercase tracking-wider 
                                    flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        Marques
                    </label>
                    {selectedBrand && (
                        <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
                            1 filtre actif
                        </span>
                    )}
                </div>
                <ul className="space-y-2 text-base">
                    <li>
                        <button 
                            onClick={() => onBrandSelect(null)}
                            className={`w-full text-left p-3 rounded-xl transition-all duration-300 
                                     border flex items-center justify-between group ${
                                selectedBrand === null 
                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/30' 
                                    : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:border-indigo-500/30'
                            }`}
                        >
                            <span>Toutes les marques</span>
                            {selectedBrand === null && (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </button>
                    </li>
                    {marques.map(marque => (
                        <li key={marque.nom_marque}>
                            <button 
                                onClick={() => onBrandSelect(marque.nom_marque)}
                                className={`w-full text-left p-3 rounded-xl transition-all duration-300 
                                         border flex items-center justify-between group ${
                                    selectedBrand === marque.nom_marque 
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/30' 
                                        : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:bg-gray-700/50 hover:border-indigo-500/30'
                                }`}
                            >
                                <span>{marque.nom_marque}</span>
                                {selectedBrand === marque.nom_marque && (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                              d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Section Tri */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
                <label className="block text-sm font-black text-indigo-400 mb-3 uppercase 
                               tracking-wider flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                    </svg>
                    Trier par
                </label>
                <select 
                    value={sortOrder}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="w-full p-3 border border-gray-700/50 rounded-xl 
                             bg-gray-800/50 text-gray-200 
                             focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                             shadow-inner cursor-pointer transition-all duration-300
                             hover:bg-gray-700/50"
                >
                    <option value={SORT_OPTIONS.POPULAR}>Popularité (Recommandé)</option>
                    <option value={SORT_OPTIONS.PRICE_ASC}>Prix : Le moins cher</option>
                    <option value={SORT_OPTIONS.PRICE_DESC}>Prix : Le plus cher</option>
                </select>
            </div>

            {/* Bouton Réinitialiser */}
            {selectedBrand && (
                <button
                    onClick={() => onBrandSelect(null)}
                    className="w-full mt-6 py-3 bg-gray-700/50 hover:bg-red-500/20 
                             text-gray-300 hover:text-red-400 rounded-xl 
                             border border-gray-600/50 hover:border-red-500/50
                             transition-all duration-300 font-semibold
                             flex items-center justify-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Réinitialiser les filtres
                </button>
            )}
        </aside>
    );
};

export default FilterSidebar;