// src/pages/ProductDetailPage/ProductDetailPage.jsx - VERSION MODULAIRE

import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { useProductData } from './useProductData';
import { getImageThumbnails, getProductMetadata, getProductSpecs } from './utils';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import ProductBreadcrumb from './ProductBreadcrumb';
import ImageGallery from './ImageGallery';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';

const ProductDetailPage = () => {
    const { productId } = useParams();
    
    const {
        article,
        loading,
        error,
        mainImage,
        imageLoading,
        setImageLoading,
        updateMainImage
    } = useProductData(productId);

    // États de chargement et d'erreur
    if (loading) return <LoadingState />;
    if (error || !article) return <ErrorState error={error} />;
    
    // Extraction des données
    const imageThumbnails = getImageThumbnails(article);
    const { marqueNom, categorieNom } = getProductMetadata(article);
    const specs = getProductSpecs(article, marqueNom, categorieNom);

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* Fil d'Ariane */}
                <ProductBreadcrumb 
                    categorieNom={categorieNom} 
                    modele={article.modele} 
                />
                
                {/* Conteneur Principal avec effet glassmorphism */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start 
                              bg-white/5 backdrop-blur-sm p-6 md:p-12 rounded-3xl 
                              shadow-2xl border border-gray-700/30 relative overflow-hidden">
                    
                    {/* Effet de fond décoratif */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br 
                                  from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                    
                    {/* Colonne 1 : Image et Galerie */}
                    <ImageGallery
                        mainImage={mainImage}
                        modele={article.modele}
                        imageLoading={imageLoading}
                        setImageLoading={setImageLoading}
                        imageThumbnails={imageThumbnails}
                        onThumbnailClick={updateMainImage}
                    />

                    {/* Colonne 2 : Détails, Prix et CTA */}
                    <ProductInfo
                        article={article}
                        marqueNom={marqueNom}
                        specs={specs}
                    />
                </div>

                {/* Section Description */}
                <ProductDescription article={article} />
                
            </main>
        </div>
    );
};

export default ProductDetailPage;