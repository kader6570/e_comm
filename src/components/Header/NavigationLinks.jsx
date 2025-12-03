// src/components/Header/NavigationLinks.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { formatCategoryUrl } from './utils';

const NavigationLinks = ({ categories, loading, error }) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex space-x-4 animate-pulse">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-4 w-20 bg-gray-700 rounded"></div>
        ))}
      </div>
    );
  }

  if (error) {
    return <span className="text-red-400 text-sm">{error}</span>;
  }

  return (
    <>
      {categories.map((category) => (
        <button
          key={category.nom}
          onClick={() => navigate(`/category/${formatCategoryUrl(category.nom)}`)}
          className="relative text-gray-300 hover:text-white font-semibold 
                   py-2 transition-all duration-300 group tracking-wide"
        >
          {category.nom}
          <span className="absolute bottom-0 left-0 w-full h-0.5 
                         bg-gradient-to-r from-indigo-500 to-purple-500 
                         rounded-full transform scale-x-0 
                         group-hover:scale-x-100 transition-transform 
                         duration-300 origin-left"></span>
        </button>
      ))}
    </>
  );
};

export default NavigationLinks;