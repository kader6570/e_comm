// src/pages/ProductDetailPage/utils.js

/**
 * Filtre les images valides pour la galerie
 */
export const getImageThumbnails = (article) => {
    return [
        article.image_thumbnail,
        article.image1_thumbnail,
        article.image2_thumbnail,
    ].filter(url => url);
};

/**
 * Extrait les informations de marque et catégorie
 */
export const getProductMetadata = (article) => {
    const marqueNom = article.marque?.nom_marque || 'N/A';
    const categorieNom = article.marque?.categories_details?.[0]?.categorie?.nom || 'N/A';
    
    return { marqueNom, categorieNom };
};

/**
 * Construit les spécifications du produit
 */
export const getProductSpecs = (article, marqueNom, categorieNom) => {
    return [
        { label: "Marque", value: marqueNom, color: "green" },
        { label: "Catégorie", value: categorieNom, color: "blue" },
        { label: "RAM", value: `${article.ram || 'N/A'} Go`, color: "indigo" },
        { label: "Stockage", value: `${article.stokcage || 'N/A'} Go`, color: "purple" },
    ];
};

/**
 * Formate le nom de catégorie pour l'URL
 */
export const formatCategoryUrl = (categoryName) => {
    return categoryName.toLowerCase().replace(/[ ]/g, '_');
};
