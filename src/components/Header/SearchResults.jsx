// src/components/Header/SearchResults.jsx

import React from "react";
import { MIN_SEARCH_LENGTH } from './constants';

const SearchResults = ({ 
  searchTerm, 
  searchResults, 
  searchLoading, 
  searchError,
  onResultClick, 
  onViewAll,
  getThumbnailUrl 
}) => {
  // Aucun résultat à afficher
  if (searchTerm.length < MIN_SEARCH_LENGTH) return null;

  // Afficher les résultats
  if (searchResults.length > 0) {
    return (
      <div className="mt-6 p-6 bg-gray-800/80 backdrop-blur-sm rounded-2xl 
                    shadow-xl border border-gray-700/50 animate-fadeIn">
        <h4 className="text-sm font-bold text-indigo-400 mb-4 uppercase tracking-wider 
                     flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M5 13l4 4L19 7" />
          </svg>
          Résultats (Top {searchResults.length})
        </h4>
        
        <ul className="space-y-2">
          {searchResults.map(article => (
            <li key={article.id}>
              <button
                onClick={() => onResultClick(article.id)}
                className="w-full flex items-center justify-between p-4 
                         bg-gray-900/50 hover:bg-gray-700/50 rounded-xl
                         border border-gray-700/30 hover:border-indigo-500/30
                         transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  {(article.image_thumbnail || article.image) && (
                    <div className="w-12 h-12 rounded-lg bg-gray-800 flex-shrink-0 
                                  overflow-hidden border border-gray-700">
                      <img 
                        src={getThumbnailUrl(article)}
                        alt={article.modele}
                        loading="lazy"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/static/images/error_fallback.png';
                        }}
                      />
                    </div>
                  )}
                  <div className="text-left min-w-0 flex-1">
                    <p className="font-semibold text-white truncate 
                                group-hover:text-indigo-300 transition-colors">
                      {article.modele}
                    </p>
                    <p className="text-sm text-gray-400">
                      {article.marque?.nom_marque || 'N/A'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-indigo-400">
                    {typeof article.prix === 'number' 
                      ? article.prix.toLocaleString() 
                      : article.prix} F.CFA
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 
                                transition-colors" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </li>
          ))}
        </ul>
        
        <div className="text-center mt-4 pt-4 border-t border-gray-700/50">
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 text-sm text-indigo-400 
                     hover:text-indigo-300 font-semibold transition-colors"
          >
            Voir tous les résultats
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // Aucun résultat trouvé
  if (!searchLoading && !searchError) {
    return (
      <div className="mt-6 p-8 bg-gray-800/50 rounded-2xl border border-gray-700/30 text-center">
        <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" 
             stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-gray-400 font-medium">Aucun produit trouvé pour "{searchTerm}"</p>
      </div>
    );
  }

  return null;
};

export default SearchResults;