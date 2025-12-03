// src/pages/ContactPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

// ⚙️ VOS INFORMATIONS DE CONTACT
// ℹ️ Remplacez les valeurs ci-dessous par les vôtres.
const CONTACT_INFO = {
    // Le lien WhatsApp doit être au format : https://wa.me/numerodetelephone (avec le code pays, sans +, - ou espaces)
    whatsappLink: "https://wa.me/22672056229", // Exemple: "https://wa.me/33612345678"
    whatsappNumber: "+226 72 05 62 29",
    tiktokLink: "https://www.tiktok.com/@kader_damiba6", // Exemple: "https://www.tiktok.com/@techstore_shop"
    tiktokHandle: "@kader_damiba6"
};

// 🎨 Icônes SVG pour WhatsApp et TikTok
// Nous utilisons des icônes simples pour un look épuré.

const WhatsappIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path 
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.321 17.514c-.407.032-.786.079-1.127.079-1.956 0-3.218-.949-3.218-2.656 0-.825.437-1.423 1.144-1.898.374-.251.782-.406 1.144-.406.18 0 .341.018.521.018v-.79c0-.986-.485-1.503-1.071-1.503-.437 0-.793.18-1.072.396v-1.41c.216.036.54.072.88.072 2.22 0 3.738-1.258 3.738-3.328 0-1.745-1.108-2.616-2.583-2.616-.54 0-1.144.18-1.815.485v-1.41c.455-.072.825-.108 1.108-.108 2.376 0 3.738 1.365 3.738 3.51 0 1.956-1.072 2.928-2.583 3.665-1.055.54-1.108.682-1.108 1.127v.756c0 .63.454.918 1.258.918.455 0 .88-.09 1.163-.198v1.656z"
            transform="translate(0 3) scale(0.8)"
        />
        <path 
            d="M19.11 17.13a.987.987 0 00-.518-.544c-.792-.377-1.487-.638-2.261-.926a1.35 1.35 0 00-1.096-.062 1.484 1.484 0 00-.78.532 1.314 1.314 0 00-.06 1.145c.29.58.583 1.164.872 1.745.03.06.07.12.11.18.2.3.26.54.19.79-.1.3-.39.54-.78.69-.76.3-.77.3-1.54.3-4.04-1.08-7.3-4.04-8.75-8.81-.13-.44-.22-.88-.22-1.33 0-1.07.38-1.92 1.14-2.59.3-.27.7-.38 1.17-.38.45 0 .74.15.9.44.15.3.19.64.08.99-.07.2-.18.4-.28.6-.2.4-.4.77-.59 1.16-.1.2-.1.4.08.6.25.3.49.6.73.9.5.6.99 1.18 1.5 1.77.34.4.7.77 1.05 1.15.2.2.4.25.66.17.47-.13.94-.25 1.41-.37.36-.1.68-.07.97.13.3.2.48.5.58.82.1.34.1.66 0 1-.09.34-.3.6-.6.77-.3.17-.6.28-.9.37-.14.04-.3.07-.44.1z"
            transform="translate(0 3) scale(0.8)"
            fill="#FFF" // Utiliser la couleur blanche sur le fond vert
        />
        <path d="M17.168 5.768a8.9 8.9 0 00-1.594-1.077c-.77-.474-1.74-.716-2.734-.716-3.882 0-7.04 3.166-7.04 7.054 0 1.25.33 2.455.97 3.492l-1.034 3.784 3.864-1.018a7.02 7.02 0 003.327.81c3.883 0 7.04-3.166 7.04-7.054.002-1.89-.74-3.61-1.977-4.856zm-4.322 10.97a6.22 6.22 0 01-3.327-.81l-.234-.14-2.456.645.656-2.42-.156-.25a6.2 6.2 0 01-1.0-3.21c0-3.435 2.79-6.225 6.22-6.225 1.64 0 3.2.652 4.382 1.838a6.16 6.16 0 011.837 4.387c0 3.435-2.79 6.225-6.22 6.225z" 
            transform="translate(0 3) scale(0.8)"
            fill="#FFF" // Utiliser la couleur blanche sur le fond vert
        />
    </svg>
);

const TiktokIcon = ({ className = "w-8 h-8" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path 
            d="M12.5 0a12.48 12.48 0 00-.7 2.1c-.81.65-1.5 1.5-2.09 2.44-.59.94-1.07 1.95-1.4 3.03a12.44 12.44 0 00-.4 3.19c0 .7.1 1.4.3 2.1.18.66.42 1.3.72 1.9.3.6.65 1.18 1.05 1.74.4.56.84 1.1 1.34 1.58.5.48 1.04.93 1.62 1.35.58.42 1.2.8 1.84 1.13.65.33 1.32.6 2.02.8.7.2 1.4.34 2.15.42.15 0 .3-.02.45-.02.05-.05.1-.1.15-.15.2-.2.4-.4.6-.6.2-.2.35-.45.4-.7.05-.25.05-.5.05-.75v-1.1c-.2-.1-.4-.2-.6-.35a9.3 9.3 0 01-1.65-.95c-.5-.4-.97-.85-1.4-1.35-.43-.5-.8-1.05-1.1-1.65-.3-.6-.5-1.25-.6-1.95-.1-.7-.1-1.45-.05-2.2v-1.15c0-.65.05-1.3.15-1.95.1-.65.25-1.3.45-1.9.2-.6.45-1.15.75-1.7.3-.55.65-1.05 1.05-1.55.4-.5.85-.95 1.35-1.35.5-.4 1.05-.75 1.65-1.05.6-.3 1.25-.5 1.95-.65.7-.15 1.45-.2 2.2-.15h.8c.2 0 .4-.02.6-.07.05 0 .1-.02.15-.02.2-.05.4-.1.6-.2.2-.1.4-.2.55-.4.15-.2.25-.4.3-.6.05-.2.05-.4.05-.6v-1.1c-.25 0-.45 0-.65.05a12.4 12.4 0 00-2.3 0z" 
        />
    </svg>
);


const ContactPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-900 text-white pt-20">
            <header className="py-12 px-6 text-center">
                <h1 className="text-5xl font-extrabold text-indigo-400 mb-4 animate-slideDown">
                    Contactez-nous
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fadeIn delay-200">
                    Nous sommes là pour répondre à toutes vos questions. Choisissez le moyen de contact qui vous convient le mieux !
                </p>
            </header>

            <main className="max-w-4xl mx-auto px-6 pb-20">
                
                {/* Section des Liens de Contact */}
                <section className="grid md:grid-cols-2 gap-8 mt-12">
                    
                    {/* Carte WhatsApp */}
                    <a 
                        href={CONTACT_INFO.whatsappLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-8 bg-green-600 rounded-xl shadow-2xl transition-all duration-300 
                                   hover:scale-[1.03] hover:shadow-green-500/50 flex flex-col items-center 
                                   text-center border-4 border-transparent hover:border-white/20"
                    >
                        <WhatsappIcon className="w-16 h-16 mb-4" />
                        <h2 className="text-3xl font-bold mb-2">WhatsApp</h2>
                        <p className="text-lg mb-4 opacity-90">
                            Discutez directement avec nous pour des questions rapides ou un support.
                        </p>
                        <div className="bg-white/20 px-4 py-2 rounded-full font-mono text-xl">
                            {CONTACT_INFO.whatsappNumber}
                        </div>
                    </a>

                    {/* Carte TikTok */}
                    <a 
                        href={CONTACT_INFO.tiktokLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-8 bg-black rounded-xl shadow-2xl transition-all duration-300 
                                   hover:scale-[1.03] hover:shadow-gray-700/50 flex flex-col items-center 
                                   text-center border-4 border-transparent hover:border-white/20"
                    >
                        <TiktokIcon className="w-16 h-16 mb-4" />
                        <h2 className="text-3xl font-bold mb-2">TikTok</h2>
                        <p className="text-lg mb-4 opacity-90">
                            Découvrez nos produits en action, nos nouveautés et suivez-nous !
                        </p>
                        <div className="bg-white/20 px-4 py-2 rounded-full font-mono text-xl">
                            {CONTACT_INFO.tiktokHandle}
                        </div>
                    </a>

                </section>

                {/* Section d'Information Additionnelle (optionnel) */}
                <section className="mt-16 p-8 bg-gray-800 rounded-xl shadow-inner border border-gray-700">
                    <h3 className="text-2xl font-semibold text-indigo-300 mb-4">Informations Utiles</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start">
                            <svg className="w-5 h-5 mr-3 mt-1 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>
                                **Horaires de réponse :** Notre équipe est disponible sur WhatsApp de 9h00 à 18h00, du lundi au vendredi.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 mr-3 mt-1 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <span>
                                **E-mail de support :** Pour les demandes formelles, veuillez nous contacter à **support@votreboutique.com**.
                            </span>
                        </li>
                    </ul>
                </section>
                
                {/* Bouton de retour */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-lg 
                                   hover:bg-indigo-600 transition duration-300 flex items-center 
                                   justify-center mx-auto gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Retour à l'accueil
                    </button>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;