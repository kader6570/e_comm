// src/pages/CategoryPage/useFilterState.js

import { useState, useEffect } from 'react';
import { SORT_OPTIONS } from './constants';

export const useFilterState = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [sortOrder, setSortOrder] = useState(SORT_OPTIONS.POPULAR);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Gestion de la touche Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isFilterOpen) {
                setIsFilterOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isFilterOpen]);

    // Bloquer le scroll quand le filtre mobile est ouvert
    useEffect(() => {
        if (isFilterOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isFilterOpen]);

    const handleBrandSelect = (brand) => {
        setSelectedBrand(brand);
        if (isFilterOpen) {
            setIsFilterOpen(false);
        }
    };

    return {
        selectedBrand,
        sortOrder,
        isFilterOpen,
        setIsFilterOpen,
        setSortOrder,
        handleBrandSelect
    };
};