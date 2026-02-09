
import React from 'react';

const Module6_AdvancedSkills: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-20">
      <header className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2c1810] mb-4 italic">The Stylistic Edge</h2>
        <p className="text-lg text-[#5d4037] italic">Techniques that separate the average from the excellent. Master the nuance of professional writing.</p>
      </header>

      {/* Rhetorical Devices */}
      <div className="bg-[#2c1810] p-12 shadow-2xl max-w-5xl mx-auto border border-white/10">
        <h3 className="text-center text-[#d4af37] text-sm font-black uppercase tracking-[0.4em] mb-12">The Rhetorical Toolkit</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border border-white/10 bg-white/5">
            <h4 className="text-[#d4af37] font-bold text-lg mb-2 italic">1. Rule of Three</h4>
            <p className="text-sm text-[#dccab1] mb-4">Things in threes are satisfying and memorable.</p>
            <p className="text-sm font-serif italic text-white">"We share the same air, drink the same water, and inherit the same planet."</p>
          </div>
          <div className="p-6 border border-white/10 bg-white/5">
            <h4 className="text-[#d4af37] font-bold text-lg mb-2 italic">2. Parallelism</h4>
            <p className="text-sm text-[#dccab1] mb-4">Repeat grammatical structures for rhythm.</p>
            <p className="text-sm font-serif italic text-white">"Technology can connect or isolate, inform or mislead, empower or addict."</p>
          </div>
          <div className="p-6 border border-white/10 bg-white/5">
            <h4 className="text-[#d4af37] font-bold text-lg mb-2 italic">3. Antithesis</h4>
            <p className="text-sm text-[#dccab1] mb-4">Place opposite ideas together for drama.</p>
            <p className="text-sm font-serif italic text-white">"We have smartphones but dumb conversations."</p>
          </div>
          <div className="p-6 border border-white/10 bg-white/5">
            <h4 className="text-[#d4af37] font-bold text-lg mb-2 italic">4. Strong Metaphor</h4>
            <p className="text-sm text-[#dccab1] mb-4">Make abstract concepts concrete.</p>
            <p className="text-sm font-serif italic text-white">"Social media is a double-edged sword."</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-10 border border-[#dccab1] shadow-xl">
          <h3 className="text-2xl font-bold text-[#2c1810] mb-8 uppercase tracking-tighter italic border-b pb-4">Sentence Rhythm Matrix</h3>
          <div className="space-y-6">
            <div className="p-4 bg-[#fdfbf7] border-l-4 border-[#8b0000]">
              <span className="font-bold text-[#8b0000] uppercase text-[10px]">Short (3-7 words):</span>
              <p className="text-sm italic">"The planet burns." (For drama & focus)</p>
            </div>
            <div className="p-4 bg-[#fdfbf7] border-l-4 border-[#2c1810]">
              <span className="font-bold text-[#2c1810] uppercase text-[10px]">Medium (10-20 words):</span>
              <p className="text-sm italic">"Climate change is no longer a distant threat but a present reality." (For info)</p>
            </div>
            <div className="p-4 bg-[#fdfbf7] border-l-4 border-[#b8860b]">
              <span className="font-bold text-[#b8860b] uppercase text-[10px]">Long (25+ words):</span>
              <p className="text-sm italic">"While technology provides instant access to information, it also creates new forms of isolation and anxiety." (For complexity)</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 border border-[#dccab1] shadow-xl">
          <h3 className="text-2xl font-bold text-[#2c1810] mb-8 uppercase tracking-tighter italic border-b pb-4">Active Voice Rule</h3>
          <p className="text-sm text-[#5d4037] mb-6 italic">Prefer Active Voice. It's direct, strong, and clearer.</p>
          <div className="space-y-6">
            <div className="p-4 bg-red-500/5 border border-red-500/20">
              <span className="text-xs font-black text-red-500 uppercase">Weak Passive (✗)</span>
              <p className="text-sm font-serif">"Immense pressure is faced by students."</p>
            </div>
            <div className="p-4 bg-green-500/5 border border-green-500/20">
              <span className="text-xs font-black text-green-500 uppercase">Strong Active (✓)</span>
              <p className="text-sm font-serif font-bold">"Students face immense pressure."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module6_AdvancedSkills;
