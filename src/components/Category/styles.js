// src/pages/CategoryPage/styles.js

export const animationStyles = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes slideInRight {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
    .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
    }
    .animate-slideInRight {
        animation: slideInRight 0.3s ease-out;
    }
`;