// src/components/ProductCard/ProductCard.jsx - VERSION MODULAIRE

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getThumbnailUrl, getProductData } from './utils';
import ProductCardImage from './ProductCardImage';
import ProductCardBadge from './ProductCardBadge';
import ProductCardBrand from './ProductCardBrand';
import ProductCardSpecs from './ProductCardSpecs';
import ProductCardPrice from './ProductCardPrice';
import ProductCardCTA from './ProductCardCTA';

const ProductCard = ({ article }) => {
    const navigate = useNavigate();
    
    const thumbnailUrl = getThumbnailUrl(article);
    const { ram, stockage, marque, prix } = getProductData(article);
    
    const handleCardClick = () => {
        navigate(`/product/${article.id}`);
    };

    const handleCTAClick = (e) => {
        e.stopPropagation();
        handleCardClick();
    };

    return (
        <article 
            className="group block rounded-2xl transition-all duration-500 
                       bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
                       border border-gray-700/50 shadow-xl
                       hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/50 
                       hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleCardClick()}
            aria-label={`Voir les détails de ${article.modele}`}
        >
            {/* Effet de lueur animée au survol */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-purple-500/0 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            {/* Badge "En Stock" */}
            <ProductCardBadge />

            {/* Image du produit */}
            <ProductCardImage 
                thumbnailUrl={thumbnailUrl}
                modele={article.modele}
            />
            
            {/* Section Contenu */}
            <div className="relative p-5 space-y-4">
                
                {/* Marque */}
                <ProductCardBrand marque={marque} />
                
                {/* Modèle */}
                <h3 className="text-xl font-bold text-white truncate transition-colors duration-300 
                             group-hover:text-indigo-300"
                    title={article.modele}>
                    {article.modele}
                </h3>
                
                {/* Spécifications techniques */}
                <ProductCardSpecs 
                    ram={ram}
                    stockage={stockage}
                />
                
                {/* Prix */}
	    {/*	<ProductCardPrice prix={prix} />*/}
                
                {/* Bouton CTA */}
                <ProductCardCTA onClick={handleCTAClick} />
            </div>
        </article>
    );
};

export default ProductCard;
