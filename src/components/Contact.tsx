import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Smartphone, Terminal } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-agws-black border-t border-white/10">
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <div className="mb-16 flex flex-col items-center border-b border-white/10 pb-6">
             <h2 className="text-3xl md:text-6xl font-bold font-mono mb-2">CONTACT</h2>
             <p className="text-gray-500 font-mono text-sm">/// CANAUX DE COMMUNICATION DIRECTS</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* EMAIL CARD */}
          <a href="mailto:contact@agws.fr" className="group block bg-black border border-white/10 p-8 md:p-12 hover:border-white hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
              <Terminal size={24} />
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 border border-white/10 rounded-full bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Mail size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Initialiser Projet</h3>
              <span className="text-xl md:text-3xl font-bold font-mono text-white group-hover:scale-105 transition-transform block">
                contact@agws.fr
              </span>
              <p className="mt-4 text-sm text-gray-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                &gt; Réponse sous 24h garantie_
              </p>
            </div>
          </a>

          {/* PHONE CARD */}
          <a href="tel:+33625023130" className="group block bg-black border border-white/10 p-8 md:p-12 hover:border-white hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
              <Smartphone size={24} />
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 border border-white/10 rounded-full bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Phone size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Ligne Directe</h3>
              <span className="text-xl md:text-3xl font-bold font-mono text-white group-hover:scale-105 transition-transform block">
                06 25 02 31 30
              </span>
               <p className="mt-4 text-sm text-gray-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                &gt; Appel & WhatsApp disponibles_
              </p>
            </div>
          </a>

        </div>

        <div className="mt-12 flex justify-center items-center gap-2 text-gray-500 font-mono text-xs">
          <MapPin size={14} />
          <span>BASED IN PARIS, FRANCE</span>
          <span className="mx-2">|</span>
          <span>AVAILABLE WORLDWIDE</span>
        </div>

      </div>
    </section>
  );
};
