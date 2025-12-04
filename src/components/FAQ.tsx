import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "QUELS SONT VOS DÉLAIS D'EXÉCUTION ?",
    answer: "La durée dépend de la complexité du système. Un site vitrine (Unit V1) est déployé sous 2 semaines. Une application complexe (System V2) nécessite 1 à 3 mois de développement et tests."
  },
  {
    question: "QUELLES TECHNOLOGIES UTILISEZ-VOUS ?",
    answer: "Nous opérons sur une stack moderne et performante : React/Next.js pour le front, Node.js/Python pour le back-end, et une infrastructure Google Cloud ou serveurs physiques dédiés."
  },
  {
    question: "PROPOSEZ-VOUS DE LA MAINTENANCE ?",
    answer: "Affirmatif. Nous proposons des contrats de maintenance 'RUN' pour assurer la sécurité, les mises à jour et la scalabilité de votre infrastructure après le déploiement."
  },
  {
    question: "PUIS-JE MODIFIER LE CONTENU MOI-MÊME ?",
    answer: "Oui. Nous intégrons des CMS 'Headless' ou des tableaux de bord sur-mesure vous permettant de contrôler vos données sans toucher au code source."
  },
  {
    question: "QUEL EST LE MODÈLE DE PAIEMENT ?",
    answer: "Standard protocol : 50% à l'initialisation du projet, 50% à la livraison finale et mise en production."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-agws-black border-t border-white/10 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 flex flex-col items-center text-center border-b border-white/10 pb-6">
          <h2 className="text-3xl md:text-6xl font-bold font-mono mb-2">DEBUG_FAQ</h2>
          <p className="text-gray-500 font-mono text-sm tracking-widest">/// PROTOCOLE DE QUESTIONS</p>
        </div>

        <div className="space-y-px bg-white/10 border border-white/10">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-agws-black">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors group"
              >
                <span className="font-mono text-sm md:text-base font-bold text-gray-300 group-hover:text-white transition-colors pr-8">
                  <span className="text-gray-600 mr-4">0{index + 1}</span>
                  {faq.question}
                </span>
                <div className="text-white/50 group-hover:text-white transition-colors">
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 font-mono text-xs md:text-sm leading-relaxed border-t border-white/5 mx-6 mt-2 pb-8">
                      <span className="text-white/20 mr-2">&gt;</span>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

