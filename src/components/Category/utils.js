// src/pages/CategoryPage/utils.js

import { SORT_OPTIONS } from './constants';

/**
 * Filtre et trie les articles selon les critères
 */
export const filterAndSortArticles = (articles, selectedBrand, sortOrder) => {
    return articles
        .filter(article => !selectedBrand || article.marque.nom_marque === selectedBrand)
        .sort((a, b) => {
            if (sortOrder === SORT_OPTIONS.PRICE_ASC) return a.prix - b.prix;
            if (sortOrder === SORT_OPTIONS.PRICE_DESC) return b.prix - a.prix;
            return 0;
        });
};

/**
 * Formate le nom de la catégorie pour l'affichage
 */
export const formatCategoryName = (categoryName) => {
    return categoryName === 'all' ? 'Catalogue Global' : categoryName.replace(/_/g, ' ');
};