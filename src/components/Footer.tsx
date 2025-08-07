import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:text-brand-gold transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-pink border-t border-rose-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/">
                <Logo className="h-12 text-brand-dark" />
            </Link>
          </div>
          <div className="text-center text-brand-dark mb-6 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Giulia Nails. Tutti i diritti riservati.</p>
            <p className="text-sm">P.IVA 17884981006</p>
          </div>
          <div className="flex space-x-4">
            <SocialIcon href="https://www.instagram.com/giulia___nails_?igsh=MW1yMmthd3I0cHd0Mw%3D%3D&utm_source=qr">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5l0 .01" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.tiktok.com/@giulia___nails_?_t=ZN-8yeJhR5RDhW&_r=1">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
               </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;