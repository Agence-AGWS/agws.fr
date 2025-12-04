import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Cpu, Cloud, Smartphone, Terminal } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-agws-black pt-20 md:pt-0">
      {/* Noise Overlay */}
      <div className="bg-noise" />

      {/* Animated Geometric Shapes - Subtle White/Grey */}
      <motion.div 
        style={{ y: y1, rotate: 45 }}
        className="absolute top-20 right-[10%] w-64 h-64 border border-white/10 z-0 pointer-events-none"
      />
      <motion.div 
        style={{ y: y2, rotate: -15 }}
        className="absolute bottom-40 left-[5%] w-48 h-48 border border-white/5 z-0 pointer-events-none" 
      />

      {/* Main Content Container - Left Aligned */}
      <div className="container mx-auto px-6 z-10 flex flex-col items-start justify-center text-left mt-10 md:mt-0">
        
        {/* Logo Area - COMPACT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative w-full max-w-3xl"
        >
          {/* Subtle White Glow */}
          <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full -z-10 left-0 w-2/3 h-full" />
          <img src="/image.png" alt="AGWS" className="h-32 md:h-48 w-auto object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
        </motion.div>
        
        {/* Divider - White Gradient */}
        <div className="h-px w-24 bg-gradient-to-r from-white to-transparent mb-8" />

        {/* Text */}
        <p className="text-base md:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed font-light">
          Architecture numérique de précision. <br/>
          Nous construisons l'infrastructure de votre croissance.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 bg-white text-black text-xs font-mono uppercase tracking-widest hover:bg-transparent hover:text-white hover:border-white border border-transparent transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            INITIALISER PROJET
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-3 bg-transparent text-gray-400 text-xs font-mono uppercase tracking-widest hover:text-white border border-white/20 hover:border-white transition-all text-center flex items-center justify-center"
          >
            [ EXPLORER ]
          </a>
        </div>
        
        {/* Tech Stack Indicators */}
        <div className="mt-12 flex flex-wrap gap-4 opacity-60">
          {[
            { icon: Code, label: "WEB" },
            { icon: Smartphone, label: "MOBILE" },
            { icon: Cpu, label: "AI CORE" },
            { icon: Cloud, label: "CLOUD" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-mono border border-white/10 p-2 bg-black/50">
              <item.icon size={14} /> {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
