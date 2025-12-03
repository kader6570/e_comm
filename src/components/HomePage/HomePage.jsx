// src/pages/HomePage/HomePage.jsx - VERSION MODULAIRE

import React from 'react';
import Header from '../../components/Header';
import { useHomeData } from './useHomeData';
import HeroSection from './HeroSection';
import BrandsSection from './BrandsSection';
import FeaturedProducts from './FeaturedProducts';
import FinalCTA from './FinalCTA';

const HomePage = () => {
    const { articlesPhare, loading, error } = useHomeData();

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
            <Header />
            <main className="text-gray-200">
                
                {/* Section Héros */}
                <HeroSection />

                {/* Section Marques */}
                <BrandsSection />

                {/* Produits Vedettes */}
                <FeaturedProducts 
                    articles={articlesPhare}
                    loading={loading}
                    error={error}
                />

                {/* CTA Final */}
                <FinalCTA />

            </main>
        </div>
    );
};

export default HomePage;