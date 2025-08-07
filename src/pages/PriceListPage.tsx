import React from 'react';
import usePageMeta from '../hooks/usePageMeta';
import AnimatedSection from '../components/AnimatedSection';
import { type PriceItem } from '../../types';

interface PriceCategory {
  title: string;
  items: PriceItem[];
  note?: string;
}

const priceCategories: PriceCategory[] = [
  {
    title: 'RICOSTRUZIONE',
    items: [
      { name: 'Lunghezza 1–2–3 sulla cartina', price: '€ 35' },
      { name: 'Lunghezza 4–5–6 sulla cartina', price: '€ 40' },
      { name: 'Lunghezza 7–8–9 sulla cartina', price: '€ 45' },
      { name: 'Lunghezza 10–11–12 sulla cartina', price: '€ 50' },
      { name: 'Ricostruzione unghia onicofagica', price: '€ 35' },
    ],
  },
  {
    title: 'RITOCCO',
    note: 'Se il giorno del ritocco ci sono 3 o più unghie rotte si paga il prezzo della ricostruzione.',
    items: [
      { name: 'Ritocco lunghezza 1–2–3', price: '€ 30' },
      { name: 'Ritocco lunghezza 4–5–6', price: '€ 35' },
      { name: 'Ritocco lunghezza 7–8–9', price: '€ 40' },
      { name: 'Ritocco lunghezza 10–11–12', price: '€ 45' },
    ],
  },
  {
    title: 'ALTRI TRATTAMENTI',
    items: [
      { name: 'Semipermanente mani/piedi', price: '€ 25' },
      { name: 'Semipermanente rinforzato', price: '€ 28' },
      { name: 'Copertura gel', price: '€ 28' },
      { name: 'Smontaggio lavoro mio', price: '€ 10' },
      { name: 'Smontaggio + manicure', price: '€ 15' },
      { name: 'Riparazione unghia (fuori appuntamento)', price: '€ 2' },
      { name: 'Manicure', price: '€ 10' },
    ],
  },
  {
    title: 'MURETTO E SOTTOVETRO',
    items: [
      { name: 'Muretto da 1 a 5 unghie', price: '€ 10' },
      { name: 'Muretto da 6 a 10 unghie', price: '€ 15' },
      { name: 'Sottovetro (a unghia)', price: '€ 2' },
    ],
  },
  {
    title: 'DECORAZIONI',
    items: [
      { name: 'Decorazioni in rilievo', price: 'da € 0,50' },
      { name: 'Adesivi (2 in omaggio)', price: 'da € 0,50' },
      { name: 'Nail art', price: 'da € 0,50' },
      { name: 'Swarovski (5 per mano omaggio)', price: 'da € 0,50' },
    ],
  },
];


const PriceRow: React.FC<{ item: PriceItem }> = ({ item }) => (
    <div className="flex justify-between items-center py-3 border-b border-rose-200 last:border-b-0">
        <div>
            <h3 className="text-md md:text-lg font-medium text-brand-dark">{item.name}</h3>
            {item.duration && <p className="text-sm text-stone-500">{item.duration}</p>}
        </div>
        <p className="text-md md:text-lg font-bold text-brand-gold text-right min-w-[80px]">{item.price}</p>
    </div>
);

const PriceListPage: React.FC = () => {
  usePageMeta('Listino Prezzi', 'Consulta il listino prezzi completo per tutti i trattamenti di manicure, pedicure e ricostruzione unghie offerti da Giulia Nails.');

  return (
    <div className="bg-brand-pink py-20 md:py-28">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-serif text-center text-brand-dark mb-12">
            Listino Prezzi
          </h1>
        </AnimatedSection>
        
        <AnimatedSection delay="duration-500">
            <div className="max-w-3xl mx-auto bg-brand-white p-6 md:p-10 rounded-lg shadow-xl">
                {priceCategories.map((category) => (
                  <div key={category.title} className="mb-8 last:mb-0">
                    <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-3 border-b-2 border-brand-gold pb-2">{category.title}</h2>
                    {category.note && <p className="text-sm text-stone-500 italic mb-4">{category.note}</p>}
                    <div className="space-y-2">
                      {category.items.map((item, index) => (
                          <PriceRow key={index} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PriceListPage;