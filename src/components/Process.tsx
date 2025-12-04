import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Code, Rocket } from 'lucide-react';

const steps = [
  {
    id: "01",
    label: "INPUT",
    title: "ANALYSE",
    description: "Audit des besoins & Architecture des données.",
    icon: <Database size={20} />
  },
  {
    id: "02",
    label: "PROCESSING",
    title: "DÉVELOPPEMENT",
    description: "Codage haute performance & Intégration IA.",
    icon: <Code size={20} />
  },
  {
    id: "03",
    label: "OPTIMIZATION",
    title: "TESTS_&_QA",
    description: "Stress tests & Optimisation algorithmique.",
    icon: <Cpu size={20} />
  },
  {
    id: "04",
    label: "OUTPUT",
    title: "DÉPLOIEMENT",
    description: "Mise en production & Scalabilité Cloud.",
    icon: <Rocket size={20} />
  }
];

export const Process = () => {
  return (
    <section className="py-24 bg-agws-black border-t border-white/10 relative overflow-hidden">
      {/* Background Grid - Subtle */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px)', 
          backgroundSize: '100px 100%' 
        }} 
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-16 flex flex-col items-center border-b border-white/10 pb-6">
          <h2 className="text-3xl md:text-6xl font-bold font-mono mb-2">L'ALGORITHME</h2>
          <p className="text-gray-500 font-mono text-sm tracking-widest">/// PROCESSUS D'EXÉCUTION</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Node */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-agws-black border border-white/20 flex items-center justify-center mb-8 relative group hover:border-white transition-colors z-10">
                    <div className="absolute top-0 left-0 w-1 h-1 bg-white" />
                    <div className="absolute top-0 right-0 w-1 h-1 bg-white" />
                    <div className="absolute bottom-0 left-0 w-1 h-1 bg-white" />
                    <div className="absolute bottom-0 right-0 w-1 h-1 bg-white" />
                    
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {step.icon}
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="text-[10px] font-mono text-gray-500 tracking-widest border border-white/10 px-2 py-1">
                      STEP_{step.id} [{step.label}]
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-mono mb-3 mt-4">{step.title}</h3>
                  <p className="text-sm text-gray-400 max-w-[200px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

