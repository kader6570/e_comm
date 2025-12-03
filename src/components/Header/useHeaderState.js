// src/components/Header/useHeaderState.js

import { useState, useEffect } from "react";
import api from "../../api/api";

export const useHeaderState = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Charger les catégories
  useEffect(() => {
    const fetchCategorie = async () => {
      try {
        const res = await api.get("categories/");
        setCategories(res.data);
        setError(null);
      } catch (e) {
        console.error("Erreur lors du chargement des catégories:", e);
        setError("Impossible de charger les catégories");
      } finally {
        setLoading(false);
      }
    };
    fetchCategorie();
  }, []);

  // Gestion de la touche Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isSearchOpen) setIsSearchOpen(false);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isSearchOpen, isMobileMenuOpen]);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return {
    categories,
    loading,
    error,
    isSearchOpen,
    setIsSearchOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen
  };
};