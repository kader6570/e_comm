//// src/pages/HomePage/HeroSection.jsx

//import React from 'react';
//import { useNavigate } from 'react-router-dom';
//import { HERO_CONTENT, HERO_STATS, HERO_IMAGE } from './constants';
//import HeroStats from './HeroStats';
//import HeroImage from './HeroImage';

//const HeroSection = () => {
//    const navigate = useNavigate();

//    const handleContactClick = () => {
//        navigate('/contact');
//    };

//    return (
//        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 md:py-24 overflow-hidden">
            
//            {/* Effets de fond décoratifs */}
//            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
//            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            
//            {/* Colonne gauche - Contenu */}
//            <div className="flex flex-col justify-center relative z-10">
//                {/* Badge */}
//                <div className="inline-flex items-center w-fit px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 
//                              rounded-full mb-6 backdrop-blur-sm">
//                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
//                    <span className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
//                        {HERO_CONTENT.badge}
//                    </span>
//                </div>

//                {/* Titre principal */}
//                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
//                    {HERO_CONTENT.title}{' '}
//                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
//                        {HERO_CONTENT.titleHighlight}
//                    </span>
//                </h1>
                
//                {/* Sous-titre */}
//                <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mt-4">
//                    {HERO_CONTENT.subtitle}
//                </h2>
                
//                {/* Description */}
//                <p className="mt-6 text-lg text-gray-400 max-w-lg leading-relaxed">
//                    {HERO_CONTENT.description}
//                </p>
                
//                {/* Stats */}
//                <HeroStats stats={HERO_STATS} />

//                {/* Boutons CTA */}
//                <div className="mt-10 flex flex-col sm:flex-row gap-4">
//                    <button
//                        onClick={() => navigate('/category/all')}
//                        className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 
//                                 hover:from-indigo-500 hover:to-purple-500
//                                 text-white font-bold rounded-xl shadow-xl 
//                                 shadow-indigo-600/30 hover:shadow-2xl hover:shadow-indigo-500/40
//                                 transition-all duration-300 hover:scale-105
//                                 flex items-center justify-center gap-2 relative overflow-hidden group"
//                    >
//                        <span className="relative z-10">{HERO_CONTENT.ctaPrimary}</span>
//                        <svg className="w-5 h-5 relative z-10 transition-transform duration-300 
//                                      group-hover:translate-x-1" 
//                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
//                                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                        </svg>
//                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
//                                      -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//                    </button>
                    
//                    <button
//                        onClick={handleContactClick}
//                        className="px-8 py-4 border-2 border-green-500/50 bg-green-500/5
//                                 text-green-400 font-bold rounded-xl 
//                                 hover:bg-green-500 hover:text-white hover:border-green-500
//                                 transition-all duration-300 hover:scale-105
//                                 flex items-center justify-center gap-2 backdrop-blur-sm"
//                    >
//                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
//                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                        </svg>
//                        <span>{HERO_CONTENT.ctaSecondary}</span>
//                    </button>
//                </div>
//            </div>
            
//            {/* Colonne droite - Image */}
//            <HeroImage image={HERO_IMAGE} />
//        </div>
//    );
//};

//export default HeroSection;
// src/pages/HomePage/HeroSection.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HERO_CONTENT, HERO_STATS, HERO_IMAGE } from './constants';
import HeroStats from './HeroStats';
import HeroImage from './HeroImage';

const HeroSection = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 md:py-24 overflow-hidden">
            
            {/* Effets de fond décoratifs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            {/* Colonne Image pour mobile/tablette - S'affiche en premier (avant le contenu) */}
            {/* Changement 2 : Ajout de la HeroImage ici. Elle est affichée par défaut et cachée sur grand écran. */}
            {/* L'animation (par exemple, 'animate-bounce-once' si vous avez une keyframe pour ça, ou juste un fade-in) sera appliquée. */}
            <div className="order-first lg:hidden relative z-10">
                <HeroImage image={HERO_IMAGE} />
            </div>

            {/* Colonne gauche - Contenu */}
            <div className="flex flex-col justify-center relative z-10 order-last lg:order-first">
                {/* Badge */}
                <div className="inline-flex items-center w-fit px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 
                              rounded-full mb-6 backdrop-blur-sm">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
                        {HERO_CONTENT.badge}
                    </span>
                </div>

                {/* Titre principal */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
                    {HERO_CONTENT.title}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        {HERO_CONTENT.titleHighlight}
                    </span>
                </h1>
                
                {/* Sous-titre */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mt-4">
                    {HERO_CONTENT.subtitle}
                </h2>
                
                {/* Description */}
                <p className="mt-6 text-lg text-gray-400 max-w-lg leading-relaxed">
                    {HERO_CONTENT.description}
                </p>
                
                {/* Stats */}
                <HeroStats stats={HERO_STATS} />

                {/* Boutons CTA */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => navigate('/category/all')}
                        className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 
                                 hover:from-indigo-500 hover:to-purple-500
                                 text-white font-bold rounded-xl shadow-xl 
                                 shadow-indigo-600/30 hover:shadow-2xl hover:shadow-indigo-500/40
                                 transition-all duration-300 hover:scale-105
                                 flex items-center justify-center gap-2 relative overflow-hidden group"
                    >
                        <span className="relative z-10">{HERO_CONTENT.ctaPrimary}</span>
                        <svg className="w-5 h-5 relative z-10 transition-transform duration-300 
                                      group-hover:translate-x-1" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                      -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                    
                    <button
                        onClick={handleContactClick}
                        className="px-8 py-4 border-2 border-green-500/50 bg-green-500/5
                                 text-green-400 font-bold rounded-xl 
                                 hover:bg-green-500 hover:text-white hover:border-green-500
                                 transition-all duration-300 hover:scale-105
                                 flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{HERO_CONTENT.ctaSecondary}</span>
                    </button>
                </div>
            </div>
            
            {/* Colonne droite - Image pour desktop - S'affiche en dernier (après le contenu) */}
            {/* Changement 3 : Utiliser "lg:flex" pour s'assurer que HeroImage s'affiche uniquement sur grand écran dans cette position. */}
            <div className="hidden lg:flex relative z-10">
                <HeroImage image={HERO_IMAGE} />
            </div>
        </div>
    );
};

export default HeroSection;