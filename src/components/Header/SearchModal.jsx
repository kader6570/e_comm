// src/components/Header/SearchModal.jsx

import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { MIN_SEARCH_LENGTH, MAX_SEARCH_RESULTS } from './constants';
import { getThumbnailUrl } from './utils';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

const SearchModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const handleSearch = useCallback(async (e) => {
    e.preventDefault();
    if (searchTerm.length < MIN_SEARCH_LENGTH) return;
    
    setSearchLoading(true);
    setSearchError(null);
    
    try {
      const response = await api.get(`recherche/?q=${searchTerm}`);
      const results = response.data.results || response.data;
      setSearchResults(results.slice(0, MAX_SEARCH_RESULTS));
    } catch (error) {
      console.error("Erreur lors de la recherche:", error);
      setSearchError("Impossible d'effectuer la recherche");
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  }, [searchTerm]);

  const handleResultClick = (articleId) => {
    onClose();
    navigate(`/product/${articleId}`);
  };

  const handleViewAll = () => {
    onClose();
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <div 
      className="fixed top-20 left-0 w-full bg-gray-900/98 backdrop-blur-xl 
                 shadow-2xl border-b border-indigo-500/30 z-40 py-8 px-4 md:px-12 
                 animate-slideDown"
      role="dialog"
      aria-label="Recherche de produits"
    >
      <div className="max-w-4xl mx-auto">
        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchLoading={searchLoading}
          onSubmit={handleSearch}
          onClose={onClose}
        />

        {searchError && (
          <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
            <p className="text-red-400 text-center font-medium">{searchError}</p>
          </div>
        )}

        <SearchResults
          searchTerm={searchTerm}
          searchResults={searchResults}
          searchLoading={searchLoading}
          searchError={searchError}
          onResultClick={handleResultClick}
          onViewAll={handleViewAll}
          getThumbnailUrl={getThumbnailUrl}
        />
      </div>
    </div>
  );
};

export default SearchModal;