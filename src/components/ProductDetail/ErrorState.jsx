// src/pages/ProductDetailPage/ErrorState.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

const ErrorState = ({ error }) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <Header />
            <div className="flex justify-center items-center min-h-[calc(100vh-80px)] px-4">
                <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-sm border border-red-500/30 
                              rounded-2xl p-8 text-center shadow-2xl">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 
                                  flex items-center justify-center">
                        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" 
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-black text-red-400 mb-3">
                        ERREUR 404
                    </h1>
                    <p className="text-gray-300 mb-6">
                        {error || "Produit non trouvé"}
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 
                                 hover:from-indigo-500 hover:to-purple-500
                                 text-white font-bold rounded-xl transition-all duration-300
                                 flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Retour à l'accueil
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorState;