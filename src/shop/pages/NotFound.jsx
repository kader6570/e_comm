// src/pages/NotFound.jsx - PAGE 404 PREMIUM

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

const NotFound = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);

    // ✅ Compte à rebours avant redirection automatique
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    navigate('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <Header />
            
            <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 relative overflow-hidden">
                
                {/* 🎨 Effets de fond décoratifs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                
                {/* 🎨 Grille de fond */}
                <div className="absolute inset-0 opacity-5"
                     style={{
                         backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
                         backgroundSize: '50px 50px'
                     }}>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    
                    {/* 🎨 Code 404 Animé */}
                    <div className="mb-8 relative">
                        <h1 className="text-[12rem] md:text-[16rem] font-black text-transparent bg-clip-text 
                                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                                     leading-none select-none animate-pulse">
                            404
                        </h1>
                        
                        {/* Effet de reflet */}
                        <div className="absolute inset-0 text-[12rem] md:text-[16rem] font-black 
                                      text-indigo-500/10 blur-3xl leading-none">
                            404
                        </div>
                    </div>

                    {/* 🎨 Icône avec animation */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 
                                          flex items-center justify-center border-4 border-indigo-500/30 
                                          backdrop-blur-sm animate-bounce">
                                <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" 
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            {/* Cercles concentriques animés */}
                            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 
                                          animate-ping"></div>
                        </div>
                    </div>

                    {/* 🎨 Messages */}
                    <div className="space-y-4 mb-12">
                        <h2 className="text-4xl md:text-6xl font-black text-white">
                            Oups ! Page introuvable
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            La page que vous recherchez semble avoir pris des vacances... 
                            ou n'a jamais existé ! 🏖️
                        </p>
                    </div>

                    {/* 🎨 Suggestions avec cartes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
                        <button
                            onClick={() => navigate('/')}
                            className="group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                                     rounded-2xl hover:border-indigo-500/50 hover:bg-gray-700/50
                                     transition-all duration-300 hover:scale-105"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-indigo-500/10 
                                          flex items-center justify-center group-hover:bg-indigo-500/20 
                                          transition-colors duration-300">
                                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" 
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <p className="text-white font-bold mb-1">Accueil</p>
                            <p className="text-sm text-gray-400">Retour à la page d'accueil</p>
                        </button>

                        <button
                            onClick={() => navigate('/category/all')}
                            className="group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                                     rounded-2xl hover:border-purple-500/50 hover:bg-gray-700/50
                                     transition-all duration-300 hover:scale-105"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-purple-500/10 
                                          flex items-center justify-center group-hover:bg-purple-500/20 
                                          transition-colors duration-300">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" 
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <p className="text-white font-bold mb-1">Catalogue</p>
                            <p className="text-sm text-gray-400">Voir tous nos produits</p>
                        </button>

                        <button
                            onClick={() => window.history.back()}
                            className="group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                                     rounded-2xl hover:border-green-500/50 hover:bg-gray-700/50
                                     transition-all duration-300 hover:scale-105"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-green-500/10 
                                          flex items-center justify-center group-hover:bg-green-500/20 
                                          transition-colors duration-300">
                                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" 
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                          d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                                </svg>
                            </div>
                            <p className="text-white font-bold mb-1">Retour</p>
                            <p className="text-sm text-gray-400">Page précédente</p>
                        </button>
                    </div>

                    {/* 🎨 Compte à rebours */}
                    <div className="p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 
                                  rounded-2xl max-w-md mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                            <p className="text-gray-300 font-semibold">Redirection automatique dans</p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 
                                          border-2 border-indigo-500/30 flex items-center justify-center">
                                <span className="text-3xl font-black text-transparent bg-clip-text 
                                               bg-gradient-to-r from-indigo-400 to-purple-400">
                                    {countdown}
                                </span>
                            </div>
                            <span className="text-gray-400 font-medium">seconde{countdown > 1 ? 's' : ''}</span>
                        </div>
                    </div>

                    {/* 🎨 Bouton CTA principal */}
                    <div className="mt-12">
                        <button
                            onClick={() => navigate('/')}
                            className="group px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 
                                     hover:from-indigo-500 hover:to-purple-500
                                     text-white font-bold rounded-xl shadow-xl 
                                     shadow-indigo-600/30 hover:shadow-2xl hover:shadow-indigo-500/40
                                     transition-all duration-300 hover:scale-105
                                     inline-flex items-center gap-3 relative overflow-hidden"
                        >
                            <svg className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1" 
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                      d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="relative z-10">Retour à l'accueil maintenant</span>
                            {/* Effet de brillance */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                          -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </button>
                    </div>

                    {/* 🎨 Message d'aide */}
                    <p className="mt-8 text-sm text-gray-500">
                        Besoin d'aide ? Contactez notre support à{' '}
                        <a href="mailto:support@saliftelecom.com" 
                           className="text-indigo-400 hover:text-indigo-300 underline">
                            support@saliftelecom.com
                        </a>
                    </p>
                </div>
            </main>

            {/* 🎨 Animations CSS */}
            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default NotFound;