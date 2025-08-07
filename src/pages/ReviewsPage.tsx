
import React from 'react';
import usePageMeta from '../hooks/usePageMeta';
import AnimatedSection from '../components/AnimatedSection';
import { type Review } from '../../types';

const reviews: Review[] = [
  { name: 'Chiara Z.', comment: "Ragazza precisa, bravissima e organizzata, complimenti. Professionale e simpatica. Consigliatissima.", rating: 5 },
  { name: 'Giorgia F.', comment: "Una ragazza gentile, empatica, simpatica ma soprattutto molto professionale. Il negozio sempre ben pulito e ordinato. Super consigliata ❤️.", rating: 5 },
  { name: 'Alessandra P.', comment: "Giulia è una professionista nel suo ambito. Svolge il suo lavoro con molta precisione e il risultato è sempre ottimo. Torno da lei sempre con unghie perfette, mai un'unghia rovinata se non per la naturale ricrescita. Molto attenta alla pulizia. Sono molto contenta di averla trovata e la consiglio a tutti.", rating: 5 },
  { name: 'Sofia D.', comment: "Ragazza professionale, gentile e amante del suo lavoro. Il negozio è completamente nuovo e curato nei minimi dettagli. Se cercate un onicotecnica a Roma la consiglio vivamente, sempre disponibile nel trovare un appuntamento. Semplicemente perfetta!", rating: 5 },
  { name: 'Alice D.', comment: "Ragazza gentilissima, professionale e disponibile. Ci vado da circa novembre e non mi sono mai trovata male, mi sono sempre trovata benissimo. Cura le mani delle clienti con amore per il suo lavoro. Mi affido a lei per la mia onicofagia e non ho mai riscontrato niente di negativo. La stra consiglio.", rating: 5 },
  { name: 'Arianna F.', comment: "Professionale, socievole e molto brava. Top onicotecnica a Roma, rapporto qualità prezzo perfetto.", rating: 5 },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex text-brand-gold">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    ))}
  </div>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="bg-brand-pink/50 p-8 rounded-lg shadow-lg border-l-4 border-brand-gold h-full flex flex-col">
    <div className="mb-4">
        <StarRating rating={review.rating} />
    </div>
    <blockquote className="text-stone-600 italic flex-grow">"{review.comment}"</blockquote>
    <footer className="mt-4 font-bold text-brand-dark text-right">- {review.name}</footer>
  </div>
);

const ReviewsPage: React.FC = () => {
  usePageMeta('Recensioni Clienti', 'Leggi cosa dicono le clienti di Giulia Nails. Recensioni e testimonianze sulla qualità dei nostri servizi di onicotecnica.');

  return (
    <div className="bg-brand-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-serif text-center text-brand-dark mb-4">
            Dicono di Me
          </h1>
          <p className="text-lg text-center text-stone-600 max-w-3xl mx-auto mb-16">
            La soddisfazione delle mie clienti è la mia più grande ricompensa. Ecco alcune delle loro parole.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <AnimatedSection key={index} delay={`duration-${500 + index * 100}`}>
              <ReviewCard review={review} />
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-16">
            <AnimatedSection>
                <a
                href="https://www.google.com/search?sa=X&sca_esv=950f1dd50efd152d&cs=1&hl=it&biw=1536&bih=730&tbm=lcl&sxsrf=AE3TifOxPpT5BYnEeHXqFs7PLmMbmujX0w:1754487950707&q=Giulia%20Nails%20Recensioni&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2NDM2NzAzM7I0MzA3NTUwMLA02MDI-IpR3D2zNCczUcEvMTOnWCEoNTk1rzgzPy9zESsuGQArED5kTgAAAA&rldimm=9637066296075500090&ved=0CDgQ5foLahcKEwj45bj5qPaOAxUAAAAAHQAAAAAQCg#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZENodHljRjlvT205SE5EQTNZMnhNVVcxUE5tWXpSM05mYlZRNE4yYxAB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-brand-dark hover:text-brand-gold font-semibold transition-colors duration-300 text-lg"
                >
                ⭐ Lascia una recensione su Google
                </a>
            </AnimatedSection>
        </div>

      </div>
    </div>
  );
};

export default ReviewsPage;
