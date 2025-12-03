// src/pages/HomePage/FeaturedProducts.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard';
import LoadingSkeleton from './LoadingSkeleton';
import ErrorDisplay from './ErrorDisplay';
import { FEATURED_PRODUCTS_COUNT, SECTION_TITLES } from './constants';

const FeaturedProducts = ({ articles, loading, error }) => {
    const navigate = useNavigate();
    const { title, description } = SECTION_TITLES.featuredProducts;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* En-tête de section */}
            <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" 
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white">
                        {title}
                    </h2>
                </div>
                <p className="text-gray-400 text-lg">
                    {description}
                </p>
            </div>
            
            {/* Affichage erreur */}
            {error && <ErrorDisplay error={error} />}

            {/* Grille de produits */}
            {!error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {loading 
                        ? Array.from({ length: FEATURED_PRODUCTS_COUNT }).map((_, i) => 
                            <LoadingSkeleton key={i} />
                          )
                        : articles.map((article) => (
                              <ProductCard key={article.id} article={article} />
                          ))
                    }
                </div>
            )}

            {/* Bouton "Voir tout" */}
            {!loading && !error && articles.length > 0 && (
                <div className="text-center mt-16">
                    <button
                        onClick={() => navigate('/category/all')}
                        className="inline-flex items-center px-10 py-4 
                                 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700/50 
                                 text-white font-bold rounded-full 
                                 hover:bg-gray-700/50 hover:border-indigo-500/50
                                 transition-all duration-300 shadow-xl 
                                 hover:shadow-2xl hover:shadow-indigo-500/20
                                 hover:scale-105 group"
                    >
                        <span>Explorer le Catalogue Complet</span>
                        <svg className="w-5 h-5 ml-2 transition-transform duration-300 
                                      group-hover:translate-x-1" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default FeaturedProducts;