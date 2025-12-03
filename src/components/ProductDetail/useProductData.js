// src/pages/ProductDetailPage/useProductData.js

import { useState, useEffect } from 'react';
import api from '../../api/api';

export const useProductData = (productId) => {
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mainImage, setMainImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(true);

    useEffect(() => {
        const fetchArticleDetail = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const response = await api.get(`articles/${productId}/`);
                const data = response.data;
                setArticle(data);
                setMainImage(data.image);
            } catch (error) {
                console.error("Erreur lors de la récupération de l'article:", error);
                setError(error.response?.status === 404 
                    ? "Ce produit n'existe pas ou a été retiré du catalogue."
                    : "Impossible de charger les détails du produit.");
            } finally {
                setLoading(false);
            }
        };
        fetchArticleDetail();
    }, [productId]);

    const updateMainImage = (newImage) => {
        setMainImage(newImage);
        setImageLoading(true);
    };

    return {
        article,
        loading,
        error,
        mainImage,
        imageLoading,
        setImageLoading,
        updateMainImage
    };
};