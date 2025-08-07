
import React, { useState, useEffect } from 'react';
import usePageMeta from '../hooks/usePageMeta';
import AnimatedSection from '../components/AnimatedSection';

const carouselImages = [
  'src/assets/negoziogiulia.jpg',
  'src/assets/negoziogiulia2.jpg',
  'src/assets/negoziogiulia3.jpg',
];

const AboutPage: React.FC = () => {
  usePageMeta('Chi Siamo', 'Scopri la storia e la passione di Giulia Nails. Professionalità e amore per l\'arte dell\'onicotecnica al tuo servizio.');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="bg-brand-pink">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-serif text-center text-brand-dark mb-12">
              La mia passione, la tua bellezza
            </h1>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection delay="duration-500">
            <div className="relative rounded-lg shadow-2xl w-full h-96 md:h-[480px] overflow-hidden">
                {carouselImages.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt={`Salone Giulia Nails ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        aria-hidden={index !== currentIndex}
                    />
                ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay="duration-700">
            <div className="space-y-4 text-lg text-stone-700 leading-relaxed">
                <p>
                    Ciao! Mi chiamo Giulia, ho 21 anni e sono un’onicotecnica certificata dalla Regione Lazio dal 2022.
                </p>
                <p>
                    Ho sempre avuto una grande passione per l’estetica e tutto ciò che è creatività. Così ho deciso di trasformare questo amore in un vero lavoro, dedicandomi a migliorare ogni giorno e a restare sempre aggiornata sulle ultime tendenze e innovazioni del settore.
                </p>
                <p>
                    Fin da subito ho capito che questo non era solo un lavoro, ma una vera passione. 
                    E a gennaio 2025, con tanto impegno e un pizzico di coraggio, ho aperto il mio primo negozio!
                </p>
                <p>
                    Il mio obiettivo? Offrirti un'esperienza unica, dove professionalità, accoglienza e perfezione si incontrano.
                </p>
                <p className="font-semibold text-brand-dark pt-4">
                    Ti aspetto per farti vivere un momento tutto tuo!🩷
                </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
