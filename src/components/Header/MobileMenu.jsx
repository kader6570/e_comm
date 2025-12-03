// src/components/Header/MobileMenu.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { formatCategoryUrl } from './utils';

const MobileMenu = ({ categories, loading, error, onClose }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${formatCategoryUrl(categoryName)}`);
    onClose();
  };

  return (
    <>
      <div 
        className="fixed inset-0 z-40 bg-gray-900/90 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      ></div>
      
      <div className="fixed top-20 left-0 right-0 z-50 bg-gray-900/98 backdrop-blur-xl 
                    border-b border-gray-700/50 shadow-2xl animate-slideDown">
        <nav className="max-w-7xl mx-auto px-4 py-6" role="navigation">
          {loading ? (
            <div className="space-y-3 animate-pulse">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-700 rounded-lg"></div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          ) : (
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.nom}>
                  <button
                    onClick={() => handleCategoryClick(category.nom)}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:text-white 
                             hover:bg-gray-800/50 rounded-lg font-semibold 
                             transition-all duration-300 flex items-center justify-between group"
                  >
                    <span>{category.nom}</span>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-indigo-400 
                                  transition-colors" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;