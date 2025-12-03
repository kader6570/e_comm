// api/api.js - Configuration Axios Optimisée

import axios from "axios";

// ✅ Configuration de base avec variable d'environnement
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://api-multi-tenant-production.up.railway.app/api',
    timeout: 10000, // ✅ CORRIGÉ : 10s au lieu de 1s (pour les images)
    headers: {
        'Content-Type': 'application/json',
    }
});

// ✅ Intercepteur de requêtes (pour logging en dev)
api.interceptors.request.use(
    (config) => {
        // Log uniquement en développement
        if (import.meta.env.DEV) {
            console.log('🔵 API Request:', config.method.toUpperCase(), config.url);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// ✅ Intercepteur de réponses (gestion globale des erreurs)
api.interceptors.response.use(
    (response) => {
        // Log uniquement en développement
        if (import.meta.env.DEV) {
            console.log('✅ API Response:', response.config.url, response.status);
        }
        return response;
    },
    (error) => {
        // Log des erreurs
        console.error('❌ API Error:', error.response?.status, error.message);
        
        // Gestion centralisée des erreurs
        if (error.response) {
            // Erreur de réponse du serveur
            switch (error.response.status) {
                case 404:
                    console.error('Ressource non trouvée');
                    break;
                case 500:
                    console.error('Erreur serveur');
                    break;
                default:
                    console.error('Erreur API:', error.response.data);
            }
        } else if (error.request) {
            // Pas de réponse reçue
            console.error('Pas de réponse du serveur');
        } else {
            // Erreur de configuration
            console.error('Erreur de configuration:', error.message);
        }
        
        return Promise.reject(error);
    }
);

// ✅ Helpers d'API pour les endpoints courants
export const articlesAPI = {
    // Liste paginée avec filtres
    getAll: (params = {}) => api.get('articles/', { params }),
    
    // Détails d'un article
    getById: (id) => api.get(`articles/${id}/`),
    
    // Recherche
    search: (query, filters = {}) => api.get('recherche/', { 
        params: { q: query, ...filters } 
    }),
    
    // Filtrer par catégorie (ancien système)
    filterByCategory: (category, params = {}) => api.get('filtrer/', { 
        params: { categorie: category, ...params } 
    }),
};

export const categoriesAPI = {
    getAll: () => api.get('categories/'),
    getById: (id) => api.get(`categories/${id}/`),
};

export const marquesAPI = {
    getAll: () => api.get('marques/'),
    getById: (id) => api.get(`marques/${id}/`),
};

export default api;
