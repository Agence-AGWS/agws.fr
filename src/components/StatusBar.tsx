import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Sun, Moon } from 'lucide-react';

export const StatusBar = () => {
  const [time, setTime] = useState<string>('');
  const [ping, setPing] = useState<number>(24);
  const [infraMode, setInfraMode] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setLightMode(true);
      document.documentElement.classList.add('light-mode');
    }

    // Update time every second
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('fr-FR', { hour12: false }) + ' UTC');
      
      // Randomize ping slightly
      if (Math.random() > 0.8) {
        setPing(Math.floor(Math.random() * 20) + 15);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleInfraMode = () => {
    const newMode = !infraMode;
    setInfraMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('infra-mode');
    } else {
      document.documentElement.classList.remove('infra-mode');
    }
  };

  const toggleLightMode = () => {
    const newMode = !lightMode;
    setLightMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-8 bg-agws-black border-t border-white/10 z-[100] flex items-center justify-between px-4 font-mono text-[10px] uppercase tracking-widest text-gray-500 select-none">
      {/* Left: System Status */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-gray-300">SYSTEM: ONLINE</span>
        </div>
        
        <span className="text-white/20">|</span>

        <button 
          onClick={toggleLightMode}
          className={`flex items-center gap-2 px-2 py-0.5 transition-colors hover:text-white ${lightMode ? 'text-white bg-white/10' : ''}`}
          title="Changer de thème"
        >
          {lightMode ? <Sun size={10} /> : <Moon size={10} />}
          <span className="hidden sm:inline">{lightMode ? 'LIGHT' : 'DARK'}</span>
        </button>
      </div>

      {/* Center: Infra Toggle */}
      <button 
        onClick={toggleInfraMode}
        className={`hidden md:flex items-center gap-2 px-2 h-full transition-colors ${infraMode ? 'bg-blue-500/20 text-blue-400' : 'hover:text-white'}`}
      >
        {infraMode ? <Eye size={10} /> : <EyeOff size={10} />}
        <span>INFRA_VISION: {infraMode ? 'ON' : 'OFF'}</span>
      </button>

      {/* Right: Metrics */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <span>LATENCY:</span>
          <span className="text-gray-300">{ping}ms</span>
        </div>
        <span className="text-white/20">|</span>
        <div className="text-gray-300 min-w-[80px] text-right">
          {time}
        </div>
      </div>
    </div>
  );
};
