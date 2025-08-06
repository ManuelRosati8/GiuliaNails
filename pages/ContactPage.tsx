
import React from 'react';
import usePageMeta from '../hooks/usePageMeta';
import AnimatedSection from '../components/AnimatedSection';

const ContactInfoItem: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-brand-pink rounded-full text-brand-gold">{icon}</div>
        <div className="ml-4">
            <h3 className="text-lg font-bold text-brand-dark">{title}</h3>
            <div className="text-stone-600">{children}</div>
        </div>
    </div>
);


const ContactPage: React.FC = () => {
  usePageMeta('Contatti', 'Contatta Giulia Nails per prenotare il tuo appuntamento. Trova i nostri recapiti, orari di apertura e la mappa per raggiungerci.');

  return (
    <div className="py-20 md:py-28 bg-brand-white">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-serif text-center text-brand-dark mb-12">
            Contattami & Prenota
          </h1>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection delay="duration-500">
                <div className="bg-brand-pink/50 p-8 rounded-lg shadow-lg space-y-8 h-full">
                    <h2 className="text-3xl font-serif text-brand-dark border-b-2 border-brand-gold pb-2">Informazioni</h2>
                    <ContactInfoItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                        title="Indirizzo"
                    >
                        <p>Via Dameta, 39/A</p>
                        <p>00155 Roma, RM</p>
                    </ContactInfoItem>
                    <ContactInfoItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                        title="Telefono & Email"
                    >
                        <a href="tel:+393513221292" className="hover:text-brand-gold">351 322 1292</a>
                        <br/>
                        <a href="mailto:giulianails@gmail.com" className="hover:text-brand-gold">giulianails@gmail.com</a>
                    </ContactInfoItem>
                     <ContactInfoItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        title="Orari di Apertura"
                    >
                        <p>Lunedì: Chiuso</p>
                        <p>Martedì - Sabato: 09:00 – 12:30 / 14:00 – 19:00</p>
                        <p>Domenica: Chiuso</p>
                    </ContactInfoItem>
                </div>
            </AnimatedSection>
            <AnimatedSection delay="duration-700">
                <div className="h-96 md:h-full w-full rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.314963884399!2d12.605015076632738!3d41.91612026365191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f63d48e107745%3A0x85bdbcbca6783a3a!2sGiulia%20Nails!5e0!3m2!1sit!2sit!4v1720542361957!5m2!1sit!2sit"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mappa Salone Giulia Nails"
                    ></iframe>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
