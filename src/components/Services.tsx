import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Bot, Server, Plus, ArrowRight } from 'lucide-react';

const services = [
  {
    id: "web",
    title: "DÉVELOPPEMENT_WEB",
    description: "Architectures robustes, haute performance.",
    icon: <Globe className="w-6 h-6" />,
    tech: ["REACT", "CMS", "ASTRO"],
    link: "/services/web"
  },
  {
    id: "mobile",
    title: "APPS_MOBILES",
    description: "Expérience native iOS & Android sans compromis.",
    icon: <Smartphone className="w-6 h-6" />,
    tech: ["IOS | ANDROID", "SWIFT", "PWA"],
    link: "/services/mobile"
  },
  {
    id: "ai",
    title: "IA_&_DATA",
    description: "Automatisation et traitement de données neural.",
    icon: <Bot className="w-6 h-6" />,
    tech: ["LLM", "PYTHON", "N8N"],
    link: "/services/ai"
  },
  {
    id: "cloud",
    title: "INFRA_CLOUD",
    description: "Déploiement scalable et sécurité physique.",
    icon: <Server className="w-6 h-6" />,
    tech: ["GCP", "DOCKER"],
    link: "/services/cloud"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-agws-black border-t border-white/10 relative">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16 border-b border-white/10 pb-6 flex flex-col items-center">
          <h2 className="text-3xl md:text-6xl font-bold font-mono mb-2">MODULES</h2>
          <p className="text-gray-500 font-mono text-sm">/// CAPACITÉS TECHNIQUES</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-agws-black p-8 hover:bg-white/5 transition-colors h-full flex flex-col"
            >
              {/* Hover Scan Effect - White */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.05),transparent)] translate-y-[-100%] group-hover:animate-[scan_2s_ease-in-out_infinite] pointer-events-none" />
              
              <div className="mb-8 flex justify-between items-start">
                <div className="p-2 bg-white/5 text-white border border-white/10 group-hover:border-white transition-colors">
                  {service.icon}
                </div>
                <span className="font-mono text-xs text-gray-600">0{index + 1}</span>
              </div>
              
              <h3 className="text-lg font-bold mb-4 font-mono tracking-tight group-hover:text-white transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap justify-center gap-2">
                {service.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono uppercase text-gray-500 border border-white/5 px-1">
                    [{t}]
                  </span>
                ))}
              </div>

              {/* Voir Plus Link if available */}
              {service.link && (
                <a 
                  href={service.link}
                  className="mt-6 w-full py-2 border border-white/10 text-[10px] font-mono uppercase text-center hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                >
                  VOIR DÉTAILS <ArrowRight size={10} />
                </a>
              )}

              <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus size={12} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
