import React from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import AnimatedSection from '../components/AnimatedSection';

const NotFoundPage: React.FC = () => {
  usePageMeta('Pagina Non Trovata', 'La pagina che stai cercando non esiste.');

  return (
    <div className="bg-brand-white py-20 md:py-28 flex-grow flex items-center">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h1 className="text-8xl md:text-9xl font-serif text-brand-gold drop-shadow-lg">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mt-4 mb-6">
            Oops! Pagina Non Trovata
          </h2>
          <p className="max-w-xl mx-auto text-lg text-stone-600 mb-10">
            Sembra che la pagina che stai cercando non esista o sia stata spostata.
            Niente panico, puoi tornare alla home.
          </p>
          <Link
            to="/"
            className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-amber-500 transition-all duration-300 text-lg shadow-lg"
          >
            Torna alla Home
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default NotFoundPage;
