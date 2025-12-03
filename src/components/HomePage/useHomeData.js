// src/pages/HomePage/useHomeData.js

import { useState, useEffect } from 'react';
import api from '../../api/api';
import { FEATURED_PRODUCTS_COUNT } from './constants';

export const useHomeData = () => {
    const [articlesPhare, setArticlesPhare] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const response = await api.get('articles/');
                
                // Gérer la réponse paginée ou non
                const articles = response.data.results || response.data;
                setArticlesPhare(articles.slice(0, FEATURED_PRODUCTS_COUNT));
            } catch (error) {
                console.error("Erreur lors de la récupération des articles:", error);
                setError("Impossible de charger les produits. Veuillez réessayer.");
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    return {
        articlesPhare,
        loading,
        error
    };
};