
import React, { useState, useEffect } from 'react';
import usePageMeta from '../hooks/usePageMeta';
import AnimatedSection from '../components/AnimatedSection';

const carouselImages = [
  '/assets/negoziogiulia.jpg',
  '/assets/negoziogiulia2.jpg',
  '/assets/negoziogiulia3.jpg',
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

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
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
          <div className="space-y-6">
            <AnimatedSection delay="duration-700">
                <h2 className="text-3xl font-serif text-brand-dark mb-4">Chi sono</h2>
                <p className="text-stone-600 leading-relaxed">
                    Ciao, sono Giulia. La mia avventura nel mondo dell'onicotecnica è nata da una profonda passione per l'estetica e l'arte. Ho trasformato questo amore in una professione, dedicandomi con anima e corpo a perfezionare la mia tecnica e a rimanere costantemente aggiornata sulle ultime tendenze e innovazioni del settore.
                </p>
            </AnimatedSection>
            <AnimatedSection delay="duration-1000">
                <h2 className="text-3xl font-serif text-brand-dark mb-4">La mia filosofia</h2>
                <p className="text-stone-600 leading-relaxed">
                    Credo che le mani siano un biglietto da visita fondamentale e che unghie curate possano aumentare la fiducia in se stesse. Il mio obiettivo non è solo quello di offrire un servizio impeccabile, ma di creare un'atmosfera accogliente e rilassante, dove ogni cliente possa sentirsi coccolata e ascoltata. Utilizzo solo prodotti di altissima qualità, sicuri e performanti.
                </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
