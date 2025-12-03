// src/pages/HomePage/HeroStats.jsx

import React from 'react';

const iconMap = {
    check: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    lightning: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    )
};

const HeroStats = ({ stats }) => {
    return (
        <div className="mt-8 flex flex-wrap gap-6">
            {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-${stat.color}-500/10 flex items-center justify-center`}>
                        {iconMap[stat.icon]}
                    </div>
                    <div>
                        <p className="text-2xl font-black text-white">{stat.value}</p>
                        <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HeroStats;