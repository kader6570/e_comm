// src/pages/ProductDetailPage/ProductSpecs.jsx

import React from 'react';
import { IconRam, IconStorage, IconBrand, IconCategory } from './Icons';

const iconMap = {
    green: <IconBrand />,
    blue: <IconCategory />,
    indigo: <IconRam />,
    purple: <IconStorage />
};

const ProductSpecs = ({ specs }) => {
    return (
        <div className="mb-8">
            <h3 className="text-xl font-black text-white mb-5 flex items-center gap-2">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" 
                     viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Fiche Technique
            </h3>
            <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, index) => (
                    <div key={index} 
                         className="relative p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl 
                                  border border-gray-700/30 hover:border-indigo-500/30
                                  transition-all duration-300 group overflow-hidden">
                        {/* Effet de lueur au survol */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-${spec.color}-500/0 
                                       to-${spec.color}-500/5 opacity-0 group-hover:opacity-100 
                                       transition-opacity duration-300`}>
                        </div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                {iconMap[spec.color]}
                                <span className="text-xs font-bold text-gray-400 uppercase 
                                             tracking-wider">
                                    {spec.label}
                                </span>
                            </div>
                            <span className="text-xl font-black text-white">
                                {spec.value}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSpecs;