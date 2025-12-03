// src/components/Header/Header.jsx - VERSION MODULAIRE

import React from "react";
import { useNavigate } from "react-router-dom";
import { useHeaderState } from './useHeaderState';
import SearchModal from './SearchModal';
import MobileMenu from './MobileMenu';
import NavigationLinks from './NavigationLinks';
import { animationStyles } from './styles';

const Header = () => {
  const navigate = useNavigate();
  const {
    categories,
    loading,
    error,
    isSearchOpen,
    setIsSearchOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen
  } = useHeaderState();

  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-xl 
                       shadow-2xl shadow-black/20 transition-all duration-500 
                       border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Logo et Menu Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-800 
                       rounded-lg transition-all duration-300"
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            <button
              onClick={() => navigate('/')}
              className="text-2xl md:text-3xl font-black tracking-tight text-transparent bg-clip-text 
                       bg-gradient-to-r from-white via-indigo-200 to-purple-300
                       hover:from-indigo-300 hover:via-purple-300 hover:to-pink-300
                       transition-all duration-500 relative group"
            >
              WILL<span className="text-indigo-400">TELECOM</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r 
                             from-indigo-500 to-purple-500 group-hover:w-full 
                             transition-all duration-500"></span>
            </button>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8" role="navigation">
            <NavigationLinks 
              categories={categories} 
              loading={loading} 
              error={error} 
            />
          </nav>

          {/* Bouton de Recherche */}
          <div className="flex items-center">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)} 
              className="relative p-3 text-gray-400 hover:text-indigo-400 
                       rounded-xl transition-all duration-300 
                       hover:bg-gray-800/50 group"
              aria-expanded={isSearchOpen}
              aria-label="Activer la recherche"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="absolute inset-0 rounded-xl bg-indigo-500/20 
                             scale-0 group-hover:scale-100 opacity-0 
                             group-hover:opacity-100 transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Modales */}
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
      {isMobileMenuOpen && (
        <MobileMenu 
          categories={categories}
          loading={loading}
          error={error}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Styles d'animation */}
      <style>{animationStyles}</style>
    </>
  );
};

export default Header;