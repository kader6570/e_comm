// src/components/Header/utils.js

import { DJANGO_BASE_URL } from './constants';

/**
 * Construit l'URL du thumbnail d'un article
 */
export const getThumbnailUrl = (article) => {
  const imagePath = article.image_thumbnail || article.image;
  if (!imagePath) return '/static/images/placeholder.jpg';
  if (imagePath.startsWith('http')) return imagePath;
  return imagePath.startsWith('/') 
    ? `${DJANGO_BASE_URL}${imagePath}`
    : `${DJANGO_BASE_URL}/${imagePath}`;
};

/**
 * Formate le nom de la catégorie pour l'URL
 */
export const formatCategoryUrl = (categoryName) => {
  return categoryName.toLowerCase().replace(/[ ]/g, '_');
};