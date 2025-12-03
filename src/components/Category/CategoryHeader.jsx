// src/pages/CategoryPage/CategoryHeader.jsx

import React from 'react';
import { formatCategoryName } from './utils';

const CategoryHeader = ({ categoryName, articlesCount, selectedBrand }) => {
    return (
        <header className="mb-10 p-8 bg-white rounded-2xl shadow-xl border border-gray-200/50 
                         relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br 
                          from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
            
            <div className="relative">
                <h1 className="text-5xl md:text-6xl font-black text-gray-900 capitalize 
                             leading-tight mb-3">
                    {formatCategoryName(categoryName)}
                </h1>
                <div className="flex items-center gap-4 flex-wrap">
                    <p className="text-lg text-gray-600 font-medium flex items-center gap-2">
                        <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" 
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span className="font-bold text-indigo-600">
                            {articlesCount}
                        </span> 
                        produit{articlesCount > 1 ? 's' : ''} 
                        {selectedBrand && (
                            <span className="text-gray-500">
                                de la marque <span className="font-bold text-gray-900">{selectedBrand}</span>
                            </span>
                        )}
                    </p>
                </div>
            </div>
        </header>
    );
};

export default CategoryHeader;