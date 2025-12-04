import React, { useEffect, useState } from 'react';

export const SecretMode = () => {
  const [keys, setKeys] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);
  const code = ['a', 'g', 'w', 's'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prev) => {
        const newKeys = [...prev, e.key.toLowerCase()].slice(-4);
        if (JSON.stringify(newKeys) === JSON.stringify(code)) {
          toggleMatrixMode();
        }
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activated]); // Add activated dependency to access current state correctly inside effect if needed, though state setter handles it

  const toggleMatrixMode = () => {
    if (!activated) {
        // ACTIVATE
        setActivated(true);
        document.documentElement.classList.add('matrix-mode');
        showOverlay('ACCESS GRANTED_');
    } else {
        // DEACTIVATE
        setActivated(false);
        document.documentElement.classList.remove('matrix-mode');
        showOverlay('SYSTEM RESTORED_');
    }
  };

  const showOverlay = (text: string) => {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[100] bg-black flex items-center justify-center font-mono text-green-500 text-4xl font-bold pointer-events-none';
    // Use Matrix green color hardcoded or variable if needed, text-green-500 is tailwind default ~matrix
    overlay.style.color = '#00ff41'; 
    overlay.innerHTML = `<div class="animate-pulse">${text}</div>`;
    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.remove();
    }, 2000);
  }

  return null;
};
