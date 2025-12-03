// src/pages/CategoryPage/CategoryPage.jsx - VERSION MODULAIRE

import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { useCategoryData } from './useCategoryData';
import { useFilterState } from './useFilterState';
import Breadcrumb from './Breadcrumb';
import CategoryHeader from './CategoryHeader';
import ErrorDisplay from './ErrorDisplay';
import FilterSidebar from './FilterSidebar';
import MobileBrandFilter from './MobileBrandFilter';
import ProductsGrid from './ProductsGrid';
import LoadMoreButton from './LoadMoreButton';
import MobileFilterButton from './MobileFilterButton';
import { animationStyles } from './styles';

const CategoryPage = () => {
    const { categoryName } = useParams();
    
    // Hooks personnalisés
    const {
        selectedBrand,
        sortOrder,
        isFilterOpen,
        setIsFilterOpen,
        setSortOrder,
        handleBrandSelect
    } = useFilterState();

    const {
        articles,
        marques,
        loading,
        loadingMore,
        error,
        hasMore,
        loadMoreArticles
    } = useCategoryData(categoryName, selectedBrand, sortOrder);

    return (
        <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 min-h-screen"> 
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
                
                <Breadcrumb categoryName={categoryName} />

                <CategoryHeader 
                    categoryName={categoryName}
                    articlesCount={articles.length}
                    selectedBrand={selectedBrand}
                />

                {error && <ErrorDisplay error={error} />}
                
                {!error && (
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        
                        {/* Sidebar Desktop */}
                        <div className="hidden lg:block lg:col-span-1">
                            <FilterSidebar 
                                marques={marques}
                                selectedBrand={selectedBrand}
                                sortOrder={sortOrder}
                                onBrandSelect={handleBrandSelect}
                                onSortChange={setSortOrder}
                                onClose={() => {}}
                            />
                        </div>

                        {/* Contenu Principal */}
                        <div className="lg:col-span-4">
                            {/* Filtre Mobile Horizontal */}
                            <MobileBrandFilter
                                marques={marques}
                                selectedBrand={selectedBrand}
                                onBrandSelect={handleBrandSelect}
                            />

                            {/* Grille de Produits */}
                            <ProductsGrid 
                                articles={articles}
                                loading={loading}
                            />

                            {/* Bouton Charger Plus */}
                            <LoadMoreButton
                                hasMore={hasMore}
                                loading={loading}
                                loadingMore={loadingMore}
                                onLoadMore={loadMoreArticles}
                            />
                        </div>
                    </div>
                )}

                {/* Bouton Filtre Mobile Flottant */}
                <MobileFilterButton
                    selectedBrand={selectedBrand}
                    onClick={() => setIsFilterOpen(true)}
                />

                {/* Modal Filtre Mobile */}
                {isFilterOpen && (
                    <>
                        <div 
                            className="fixed inset-0 z-50 bg-gray-900/90 backdrop-blur-sm 
                                     transition-opacity duration-300 animate-fadeIn"
                            onClick={() => setIsFilterOpen(false)}
                        ></div>
                        
                        <div className="fixed inset-y-0 right-0 w-4/5 sm:w-96 max-w-sm h-full 
                                      shadow-2xl z-50 animate-slideInRight">
                            <FilterSidebar 
                                marques={marques}
                                selectedBrand={selectedBrand}
                                sortOrder={sortOrder}
                                onBrandSelect={handleBrandSelect}
                                onSortChange={setSortOrder}
                                onClose={() => setIsFilterOpen(false)}
                            />
                        </div>
                    </>
                )}

            </main>

            <style>{animationStyles}</style>
        </div>
    );
};

export default CategoryPage;