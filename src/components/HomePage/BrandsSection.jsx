// src/pages/HomePage/BrandsSection.jsx

import React from 'react';
import { BRAND_LOGOS } from './constants';

const BrandsSection = () => {
    return (
        <div className="py-16 bg-gray-800/30 backdrop-blur-sm mt-16 
                      border-y border-gray-700/30 relative overflow-hidden">
            {/* Pattern décoratif */}
            <div className="absolute inset-0 opacity-5"
                 style={{
                     backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
                     backgroundSize: '30px 30px'
                 }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-center text-sm font-black text-indigo-400 uppercase mb-10 
                             tracking-widest flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Nos Partenaires de Confiance
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
                    {BRAND_LOGOS.map((src, index) => (
                        <div key={index} 
                             className="group h-12 w-28 flex items-center justify-center 
                                      transition-all duration-500 hover:scale-110">
                            <img 
                                src={src} 
                                alt={`Logo partenaire ${index + 1}`} 
                                className="h-full w-full object-contain filter grayscale invert 
                                         opacity-50 group-hover:opacity-100 
                                         transition-all duration-300" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandsSection;