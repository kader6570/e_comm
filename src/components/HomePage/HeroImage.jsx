//// src/pages/HomePage/HeroImage.jsx

//import React from 'react';

//const HeroImage = ({ image }) => {
//    return (
//        <div className="relative flex justify-center items-center p-8 hidden lg:flex">
//            {/* Grille décorative */}
//            <div className="absolute inset-0 opacity-5"
//                 style={{
//                     backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
//                     backgroundSize: '40px 40px'
//                 }}>
//            </div>

//            {/* Fond avec effet glassmorphism */}
//            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 
//                          backdrop-blur-sm rounded-[40px] transform -rotate-3 
//                          shadow-2xl shadow-black/50 transition-all duration-700 
//                          hover:rotate-1 border border-gray-700/30"></div>
            
//            {/* Image principale */}
//            <img
//                src={image.src}
//                alt={image.alt}
//                className="relative z-10 w-full max-w-md h-auto object-cover object-center 
//                         rounded-2xl transform rotate-3 hover:rotate-0 
//                         transition-all duration-700 cursor-pointer 
//                         shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40
//                         hover:scale-105"
//            />

//            {/* Badge "NOUVEAU" */}
//            <div className="absolute top-4 right-4 z-20 bg-red-500 text-white 
//                          px-4 py-2 rounded-full font-bold text-sm shadow-lg 
//                          animate-pulse">
//                {image.badge}
//            </div>
//        </div>
//    );
//};

//export default HeroImage;// src/pages/HomePage/HeroImage.jsx

import React from 'react';

const HeroImage = ({ image }) => {
    return (
        // Changement 1 : Remplacer "hidden lg:flex" par "flex" pour la visibilité sur toutes les tailles
        // J'ajoute également "justify-center" pour s'assurer qu'elle est centrée sur mobile si elle est placée seule.
        <div className="relative flex justify-center items-center p-8">
            {/* Grille décorative */}
            <div className="absolute inset-0 opacity-5"
                 style={{
                     backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
                     backgroundSize: '40px 40px'
                 }}>
            </div>

            {/* Fond avec effet glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 
                          backdrop-blur-sm rounded-[40px] transform -rotate-3 
                          shadow-2xl shadow-black/50 transition-all duration-700 
                          hover:rotate-1 border border-gray-700/30"></div>
            
            {/* Image principale */}
            <img
                src={image.src}
                alt={image.alt}
                className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover object-center 
                         rounded-2xl transform rotate-3 hover:rotate-0 
                         transition-all duration-700 cursor-pointer 
                         shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40
                         hover:scale-105"
            />

            {/* Badge "NOUVEAU" */}
            <div className="absolute top-4 right-4 z-20 bg-red-500 text-white 
                          px-4 py-2 rounded-full font-bold text-sm shadow-lg 
                          animate-pulse">
                {image.badge}
            </div>
        </div>
    );
};

export default HeroImage;