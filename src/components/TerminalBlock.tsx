import React, { useState, useEffect, useRef } from 'react';

const lines = [
  "AGWS_SYSTEM_V2.0 initialized...",
  "Loading assets... [OK]",
  "Connecting to secure server... [OK]",
  "Optimizing neural pathways...",
  "AI Modules loaded: 4/4",
  "System ready. Waiting for user input..."
];

export const TerminalBlock = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timeout = setTimeout(() => {
        setOutput(prev => [...prev, lines[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, Math.random() * 800 + 200); // Random typing delay

      return () => clearTimeout(timeout);
    }
  }, [currentLine]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="w-full max-w-md mx-auto font-mono text-xs p-4 border border-white/10 bg-black/80 text-gray-400 h-32 overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2 opacity-50">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <div className="w-2 h-2 rounded-full bg-yellow-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="ml-2">root@agws-server:~</span>
      </div>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-1 scrollbar-hide">
        {output.map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-green-500">➜</span>
            <span>{line}</span>
          </div>
        ))}
        {currentLine >= lines.length && (
            <div className="flex gap-2 animate-pulse">
                <span className="text-green-500">➜</span>
                <span className="w-2 h-4 bg-white/50" />
            </div>
        )}
      </div>
    </div>
  );
};

