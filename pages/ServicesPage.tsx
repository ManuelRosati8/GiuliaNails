import React from 'react';
import usePageMeta from '../hooks/usePageMeta';
import AnimatedSection from '../components/AnimatedSection';
import { type Service } from '../types';

const SparklesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m1-9l-3-3m5 0l-3 3m5 6l-3 3M19 7l-3-3" /></svg>;
const HandIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.69 13.91A10.27 10.27 0 0012 5.09 10.27 10.27 0 003.31 13.91a1.64 1.64 0 001.09 1.54 10.27 10.27 0 0015.2 0 1.64 1.64 0 001.09-1.54zM9 16.5v-3.5a3 3 0 016 0v3.5" /></svg>;

const services: Service[] = [
  { name: 'Manicure Semipermanente', description: 'Applicazione di smalto semipermanente a lunga durata con una vasta scelta di colori. Perfetto per unghie impeccabili per settimane.', icon: <HandIcon /> },
  { name: 'Ricostruzione Unghie in Gel', description: 'Allungamento e modellatura dell\'unghia con gel di alta qualità per un risultato naturale, resistente e duraturo.', icon: <HandIcon /> },
  { name: 'Nail Art & Decorazioni', description: 'Dai semplici glitter a complessi disegni a mano libera, personalizza le tue unghie per renderle uniche e speciali.', icon: <SparklesIcon /> },
  { name: 'Pedicure Estetico', description: 'Trattamento completo per la bellezza dei piedi, con applicazione di smalto classico o semipermanente.', icon: <HandIcon /> },
  { name: 'Copertura in Gel', description: 'Rinforza le tue unghie naturali con uno strato di gel, ideale per chi desidera maggiore resistenza senza allungamento.', icon: <HandIcon /> },
  { name: 'Rimozione Sicura', description: 'Rimozione professionale e sicura del trattamento precedente (gel o semipermanente) per preservare la salute dell\'unghia naturale.', icon: <SparklesIcon /> },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-brand-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-brand-gold h-full flex flex-col">
    <div className="flex items-center mb-4">
      {service.icon}
      <h3 className="ml-4 text-2xl font-serif text-brand-dark">{service.name}</h3>
    </div>
    <p className="text-stone-600 flex-grow">{service.description}</p>
  </div>
);


const ServicesPage: React.FC = () => {
  usePageMeta('Servizi', 'Scopri tutti i trattamenti offerti da Giulia Nails: manicure, ricostruzione unghie in gel, nail art personalizzata e molto altro.');

  return (
    <div className="bg-brand-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-serif text-center text-brand-dark mb-4">
            I Miei Trattamenti
          </h1>
          <p className="text-lg text-center text-stone-600 max-w-3xl mx-auto mb-16">
            Offro una gamma completa di servizi per soddisfare ogni tua esigenza, utilizzando solo prodotti professionali per garantire risultati eccezionali.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <AnimatedSection key={service.name} delay={`duration-${500 + index * 100}`} className="h-full">
                    <ServiceCard service={service} />
                </AnimatedSection>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;