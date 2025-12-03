// src/pages/CategoryPage/Breadcrumb.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatCategoryName } from './utils';

const Breadcrumb = ({ categoryName }) => {
    const navigate = useNavigate();

    return (
        <nav className="text-sm font-medium mb-8" aria-label="Fil d'Ariane">
            <ol className="flex items-center space-x-2 text-gray-400">
                <li className="flex items-center">
                    <button 
                        onClick={() => navigate('/')}
                        className="hover:text-indigo-400 transition-colors flex items-center gap-1"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Accueil
                    </button>
                    <svg className="w-4 h-4 mx-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </li>
                <li>
                    <span className="text-indigo-400 capitalize font-bold">
                        {formatCategoryName(categoryName)}
                    </span>
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;