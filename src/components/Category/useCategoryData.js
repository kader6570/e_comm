// src/pages/CategoryPage/useCategoryData.js

import { useState, useEffect, useMemo } from 'react';
import api from '../../api/api';
import { filterAndSortArticles } from './utils';

export const useCategoryData = (categoryName, selectedBrand, sortOrder) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [error, setError] = useState(null);
    const [marques, setMarques] = useState([]);
    
    // États pour la pagination
    const [nextPage, setNextPage] = useState(null);
    const [hasMore, setHasMore] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // Chargement initial des données
    useEffect(() => {
        const fetchCategoryData = async () => {
            setLoading(true);
            setError(null);
            setCurrentPage(1);
            
            try {
                const articlesResponse = await api.get(`filtrer/?categorie=${categoryName}`);
                
                // Gérer la structure paginée
                if (articlesResponse.data.results) {
                    setArticles(articlesResponse.data.results);
                    setNextPage(articlesResponse.data.next);
                    setHasMore(!!articlesResponse.data.next);
                } else {
                    setArticles(articlesResponse.data);
                    setHasMore(false);
                }
                
                const allMarque = await api.get('marques/');
                setMarques(allMarque.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données de catégorie:", error);
                setError("Impossible de charger les produits. Veuillez réessayer.");
            } finally {
                setLoading(false);
            }
        };
        fetchCategoryData();
    }, [categoryName]);

    // Fonction "Charger plus"
    const loadMoreArticles = async () => {
        if (!hasMore || loadingMore) return;
        
        setLoadingMore(true);
        try {
            const response = await api.get(`filtrer/?categorie=${categoryName}&page=${currentPage + 1}`);
            
            if (response.data.results) {
                setArticles(prev => [...prev, ...response.data.results]);
                setNextPage(response.data.next);
                setHasMore(!!response.data.next);
                setCurrentPage(prev => prev + 1);
            } else {
                setArticles(prev => [...prev, ...response.data]);
                setHasMore(false);
            }
        } catch (error) {
            console.error("Erreur lors du chargement de plus d'articles:", error);
        } finally {
            setLoadingMore(false);
        }
    };

    // Articles filtrés et triés
    const filteredArticles = useMemo(() => {
        return filterAndSortArticles(articles, selectedBrand, sortOrder);
    }, [articles, selectedBrand, sortOrder]);

    return {
        articles: filteredArticles,
        marques,
        loading,
        loadingMore,
        error,
        hasMore,
        loadMoreArticles
    };
};