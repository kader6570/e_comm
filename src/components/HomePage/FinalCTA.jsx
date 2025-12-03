// src/pages/HomePage/FinalCTA.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SECTION_TITLES } from './constants';

const FinalCTA = () => {
    const navigate = useNavigate();
    const { title, description } = SECTION_TITLES.finalCTA;

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20 
                          rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 
                          backdrop-blur-sm rounded-3xl p-12 md:p-16 text-center 
                          border border-gray-700/30 shadow-2xl">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
                    {title}
                </h3>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleContactClick}
                        className="px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 
                                 hover:from-green-500 hover:to-emerald-500
                                 text-white font-bold rounded-xl shadow-xl 
                                 transition-all duration-300 hover:scale-105
                                 flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Nous Contacter
                    </button>
                    <button
                        onClick={() => navigate('/category/all')}
                        className="px-10 py-4 border-2 border-indigo-500/50 bg-indigo-500/5
                                 text-indigo-300 font-bold rounded-xl 
                                 hover:bg-indigo-500 hover:text-white hover:border-indigo-500
                                 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                        Voir tous les produits
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FinalCTA;