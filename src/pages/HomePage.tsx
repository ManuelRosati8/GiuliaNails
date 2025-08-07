
import React from 'react';
import usePageMeta from '../hooks/usePageMeta';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => (
    <div className="relative h-screen flex items-center justify-center text-center">
        <div 
            className="absolute inset-0 bg-cover bg-center filter grayscale blur-sm"
            style={{ backgroundImage: "url('src/assets/negoziogiulia.jpg')" }}
            aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-brand-pink opacity-50" aria-hidden="true"></div>
        <div className="relative z-10 p-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-dark drop-shadow-lg mb-4">
                L'arte sulle tue mani
            </h1>
            <p className="text-xl md:text-2xl font-sans text-brand-dark max-w-2xl mx-auto mb-8">
                Eleganza, stile e professionalità per unghie perfette, ogni giorno.
            </p>
            <Link 
                to="/servizi" 
                className="bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-amber-500 transition-all duration-300 text-lg shadow-lg"
            >
                Scopri i Trattamenti
            </Link>
        </div>
    </div>
);

const HomePage: React.FC = () => {
  usePageMeta('Home', "Benvenuta da Giulia Nails. Offro servizi professionali di onicotecnica per la cura e la bellezza delle tue unghie. Prenota il tuo appuntamento per manicure, pedicure e nail art.");

  return (
    <>
      <Hero />
      <section className="py-20 md:py-32 bg-brand-white">
        <div className="container mx-auto px-6 text-center">
            <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Benvenuta da Giulia Nails</h2>
                <p className="max-w-3xl mx-auto text-lg text-stone-600 mb-8">
                    La passione per la bellezza e la cura dei dettagli sono il cuore del mio lavoro.
                    Nel mio salone, ogni trattamento è un'esperienza unica, pensata per esaltare la tua personalità e donarti un momento di puro relax.
                </p>
                <Link 
                    to="/chi-siamo" 
                    className="border-2 border-brand-gold text-brand-gold font-bold py-2 px-6 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
                >
                    La mia storia
                </Link>
            </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default HomePage;
