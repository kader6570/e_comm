// src/components/Header/SearchInput.jsx

import React from "react";
import { MIN_SEARCH_LENGTH } from './constants';

const SearchInput = ({ searchTerm, setSearchTerm, searchLoading, onSubmit, onClose }) => {
  return (
    <form onSubmit={onSubmit} className="relative">
      <div className="flex items-center space-x-3">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Rechercher un modèle ou une marque..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 pl-14 pr-4 py-4 text-lg bg-gray-800/80 text-white rounded-2xl 
                   border-2 border-gray-700 focus:border-indigo-500 focus:ring-2 
                   focus:ring-indigo-500/20 transition-all duration-300 shadow-inner
                   placeholder:text-gray-500"
          autoFocus
          aria-label="Champ de recherche"
        />
        
        <button
          type="submit"
          className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 
                   hover:from-indigo-500 hover:to-purple-500
                   text-white rounded-2xl font-bold transition-all duration-300 
                   shadow-lg hover:shadow-xl hover:shadow-indigo-500/30
                   disabled:opacity-50 disabled:cursor-not-allowed
                   flex items-center justify-center min-w-[60px]"
          aria-label="Lancer la recherche"
          disabled={searchLoading || searchTerm.length < MIN_SEARCH_LENGTH}
        >
          {searchLoading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent 
                          rounded-full animate-spin"></div>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          )}
        </button>

        <button 
          type="button"
          onClick={onClose}
          className="p-4 text-gray-400 hover:text-red-400 hover:bg-red-500/10 
                   rounded-2xl transition-all duration-300"
          aria-label="Fermer la recherche"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {searchTerm.length > 0 && searchTerm.length < MIN_SEARCH_LENGTH && (
        <p className="text-sm text-gray-400 mt-2 ml-2">
          Tapez au moins {MIN_SEARCH_LENGTH} caractères pour rechercher
        </p>
      )}
    </form>
  );
};

export default SearchInput;