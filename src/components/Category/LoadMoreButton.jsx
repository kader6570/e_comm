// src/pages/CategoryPage/LoadMoreButton.jsx

import React from 'react';

const LoadMoreButton = ({ hasMore, loading, loadingMore, onLoadMore }) => {
    if (loading || !hasMore) return null;

    return (
        <div className="mt-12 text-center">
            <button
                onClick={onLoadMore}
                disabled={loadingMore}
                className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 
                         hover:from-indigo-500 hover:to-purple-500
                         text-white font-bold rounded-xl shadow-xl 
                         transition-all duration-300 hover:scale-105
                         disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center gap-3 mx-auto relative overflow-hidden group"
            >
                {loadingMore ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent 
                                      rounded-full animate-spin"></div>
                        <span>Chargement...</span>
                    </>
                ) : (
                    <>
                        <span>Charger plus de produits</span>
                        <svg className="w-5 h-5 transition-transform duration-300 
                                      group-hover:translate-y-1" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M19 9l-7 7-7-7" />
                        </svg>
                    </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
        </div>
    );
};

export default LoadMoreButton;