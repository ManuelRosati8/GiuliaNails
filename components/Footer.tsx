
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
            <p className="text-sm">P.IVA 12345678901</p>
          </div>
          <div className="flex space-x-4">
            <SocialIcon href="https://instagram.com">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5l0 .01" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://facebook.com">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
