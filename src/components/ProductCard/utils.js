// src/components/ProductCard/utils.js

import { DJANGO_BASE_URL, FALLBACK_IMAGES } from './constants';

/**
 * Construit l'URL du thumbnail optimisé
 */
export const getThumbnailUrl = (article) => {
    // Priorité 1 : Thumbnail optimisé du backend
    const imagePath = article.image_thumbnail || article.image;
    
    if (!imagePath) return FALLBACK_IMAGES.placeholder;
    
    // Si c'est déjà une URL complète
    if (imagePath.startsWith('http')) return imagePath;
    
    // Sinon, construire l'URL complète
    return imagePath.startsWith('/') 
        ? `${DJANGO_BASE_URL}${imagePath}`
        : `${DJANGO_BASE_URL}/${imagePath}`;
};

/**
 * Extrait les données du produit avec valeurs par défaut
 */
export const getProductData = (article) => {
    return {
        ram: article.ram || 'N/A',
        stockage: article.stokcage || 'N/A',
        marque: article.marque?.nom_marque || 'Marque',
        prix: typeof article.prix === 'number' ? article.prix.toLocaleString() : article.prix
    };
};
