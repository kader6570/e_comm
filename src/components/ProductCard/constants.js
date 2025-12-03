// src/components/ProductCard/constants.js

export const DJANGO_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

export const FALLBACK_IMAGES = {
    placeholder: '/static/images/placeholder.jpg',
    error: '/static/images/error_fallback.png'
};

export const BADGE_TEXT = {
    inStock: "En Stock"
};

export const CTA_TEXT = "Voir les Détails";