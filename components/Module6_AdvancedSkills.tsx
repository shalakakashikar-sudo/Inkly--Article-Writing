
import React from 'react';

const Module6_AdvancedSkills: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-20 px-4">
      <header className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2c1810] mb-4 italic">The Stylistic Edge</h2>
        <p className="text-lg text-[#5d4037] italic">Techniques that separate the average from the excellent. Master the nuance of professional writing.</p>
      </header>

      {/* Rhetorical Devices */}
      <div className="bg-[#2c1810] p-12 shadow-2xl max-w-5xl mx-auto border border-white/10">
        <h3 className="text-center text-[#d4af37] text-sm font-black uppercase tracking-[0.4em] mb-12">The Rhetorical Toolkit</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-white/10 bg-white/5 group hover:bg-white/10 transition-colors">
            <h4 className="text-[#d4af37] font-bold text-lg mb-2 italic">1. Rule of Three</h4>
            <p className="text-[10px] text-[#dccab1] mb-4 uppercase font-black">Satisfying Rhythm</p>
            <p className="text-sm font-serif italic text-white">"We share the same air, drink the same water, and inherit the same planet."</p>
          </div>
          <div className="p-6 border border-white/10 bg-white/5 group hover:bg-white/10 transition-colors">
            <h4 className="text-[#d4af37] font-bold text-lg mb-2 italic">2. Hypophora</h4>
            <p className="text-[10px] text-[#dccab1] mb-4 uppercase font-black">Ask & Answer</p>
            <p className="text-sm font-serif italic text-white">"Will we wait for the ice to melt? No. We must act now."</p>
          </div>
          <div className="p-6 border border-white/10 bg-white/5 group hover:bg-white/10 transition-colors">
            <h4 className="text-[#d4af37] font-bold text-lg mb-2 italic">3. Antithesis</h4>
            <p className="text-[10px] text-[#dccab1] mb-4 uppercase font-black">Contrasting Ideas</p>
            <p className="text-sm font-serif italic text-white">"We have smartphones but dumb conversations."</p>
          </div>
          <div className="p-6 border border-white/10 bg-white/5 group hover:bg-white/10 transition-colors">
            <h4 className="text-[#d4af37] font-bold text-lg mb-2 italic">4. Anaphora</h4>
            <p className="text-[10px] text-[#dccab1] mb-4 uppercase font-black">Repeated Beginnings</p>
            <p className="text-sm font-serif italic text-white">"Every choice matters. Every action counts. Every person is vital."</p>
          </div>
          <div className="p-6 border border-white/10 bg-white/5 group hover:bg-white/10 transition-colors">
            <h4 className="text-[#d4af37] font-bold text-lg mb-2 italic">5. Alliteration</h4>
            <p className="text-[10px] text-[#dccab1] mb-4 uppercase font-black">Consonant Catchiness</p>
            <p className="text-sm font-serif italic text-white">"Fads, fabrics, and fallout define the fast fashion cycle."</p>
          </div>
          <div className="p-6 border border-white/10 bg-white/5 group hover:bg-white/10 transition-colors">
            <h4 className="text-[#d4af37] font-bold text-lg mb-2 italic">6. The Power Metaphor</h4>
            <p className="text-[10px] text-[#dccab1] mb-4 uppercase font-black">Imagery</p>
            <p className="text-sm font-serif italic text-white">"Education is a flame that must be stoked, not a pail to be filled."</p>
          </div>
        </div>
      </div>

      {/* High-Mark Lexicon */}
      <div className="max-w-4xl mx-auto bg-white p-10 border border-[#dccab1] shadow-xl">
        <h3 className="text-2xl font-bold text-[#2c1810] mb-8 uppercase tracking-tighter italic border-b pb-4">The High-Mark Lexicon</h3>
        <p className="text-sm text-[#8b4513] mb-8 font-serif italic">Use these high-impact verbs to prove sophisticated control of language.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-4 bg-[#fdfbf7] border-l-4 border-[#8b0000]">
              <h5 className="text-[11px] font-black text-[#8b0000] uppercase mb-1">Exacerbate (v.)</h5>
              <p className="text-[10px] font-bold text-[#5d4037] mb-2">Meaning: To make a problem or bad situation worse.</p>
              <p className="text-sm italic">"Ignoring minor leaks only exacerbates the global water crisis."</p>
            </div>
            <div className="p-4 bg-[#fdfbf7] border-l-4 border-[#2c1810]">
              <h5 className="text-[11px] font-black text-[#2c1810] uppercase mb-1">Ameliorate (v.)</h5>
              <p className="text-[10px] font-bold text-[#5d4037] mb-2">Meaning: To make something bad or unsatisfactory better.</p>
              <p className="text-sm italic">"Stricter traffic laws are intended to ameliorate the rise in accidents."</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-[#fdfbf7] border-l-4 border-[#d4af37]">
              <h5 className="text-[11px] font-black text-[#8b4513] uppercase mb-1">Eradicate (v.)</h5>
              <p className="text-[10px] font-bold text-[#5d4037] mb-2">Meaning: To destroy or get rid of completely.</p>
              <p className="text-sm italic">"We must work together to eradicate the stigma surrounding mental health."</p>
            </div>
            <div className="p-4 bg-[#fdfbf7] border-l-4 border-[#8b4513]">
              <h5 className="text-[11px] font-black text-[#8b4513] uppercase mb-1">Engender (v.)</h5>
              <p className="text-[10px] font-bold text-[#5d4037] mb-2">Meaning: To cause or give rise to a feeling or situation.</p>
              <p className="text-sm italic">"Transparency in governance engenders trust among citizens."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Punctuation Nuance */}
      <div className="max-w-4xl mx-auto bg-white p-10 border border-[#dccab1] shadow-xl">
        <h3 className="text-2xl font-bold text-[#2c1810] mb-8 uppercase tracking-tighter italic border-b pb-4">The Power of Punctuation</h3>
        <p className="text-sm text-[#8b4513] mb-8 font-serif italic">Advanced punctuation proves sophisticated control of language.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="p-4 bg-[#fdfbf7] border-l-4 border-[#8b0000]">
              <h5 className="text-[10px] font-black text-[#8b0000] uppercase mb-2">The Semi-colon (;)</h5>
              <p className="text-sm italic">"The Earth is not dying; it is being killed by our complacency."</p>
              <p className="text-[9px] mt-2 text-[#5d4037] uppercase font-bold">Used for: Connecting two related thoughts.</p>
            </div>
            <div className="p-4 bg-[#fdfbf7] border-l-4 border-[#2c1810]">
              <h5 className="text-[10px] font-black text-[#2c1810] uppercase mb-2">The Em-Dash (—)</h5>
              <p className="text-sm italic">"Technology—the very thing that connects us—has become our prison."</p>
              <p className="text-[9px] mt-2 text-[#5d4037] uppercase font-bold">Used for: Drama and emphasis.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-[#fdfbf7] border-l-4 border-[#d4af37]">
              <h5 className="text-[10px] font-black text-[#d4af37] uppercase mb-2">The Ellipsis (...)</h5>
              <p className="text-sm italic">"The silence in the forests is deafening..."</p>
              <p className="text-[9px] mt-2 text-[#5d4037] uppercase font-bold">Used for: Leaving a thought lingering.</p>
            </div>
            <div className="p-4 bg-[#fdfbf7] border-l-4 border-[#8b4513]">
              <h5 className="text-[10px] font-black text-[#8b4513] uppercase mb-2">The Colon (:)</h5>
              <p className="text-sm italic">"The solution is simple: awareness."</p>
              <p className="text-[9px] mt-2 text-[#5d4037] uppercase font-bold">Used for: Introducing a list or summary.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-10 border border-[#dccab1] shadow-xl">
          <h3 className="text-2xl font-bold text-[#2c1810] mb-8 uppercase tracking-tighter italic border-b pb-4">Tone Modulation</h3>
          <p className="text-sm text-[#5d4037] mb-6 italic">Articles should be semi-formal. Avoid slang, but remain engaging.</p>
          <div className="space-y-4">
             <div className="flex justify-between items-center text-xs border-b pb-2">
               <span className="text-red-500 line-through italic">"It's a bad thing."</span>
               <span className="text-green-600 font-bold italic">"It is a regrettable phenomenon."</span>
             </div>
             <div className="flex justify-between items-center text-xs border-b pb-2">
               <span className="text-red-500 line-through italic">"Fix the roads."</span>
               <span className="text-green-600 font-bold italic">"Ameliorate the infrastructure."</span>
             </div>
             <div className="flex justify-between items-center text-xs border-b pb-2">
               <span className="text-red-500 line-through italic">"A lot of problems."</span>
               <span className="text-green-600 font-bold italic">"A plethora of complications."</span>
             </div>
          </div>
        </div>

        <div className="bg-[#2c1810] p-10 shadow-2xl text-white">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-8 uppercase tracking-widest italic">The Rhythm Rule</h3>
          <p className="text-sm mb-6 leading-relaxed italic">Never use three sentences of the same length in a row. It creates a "drone" effect. Instead:</p>
          <ul className="text-xs space-y-4 italic text-[#dccab1]">
            <li>1. Start with a <b>medium</b> sentence (15 words).</li>
            <li>2. Follow with a <b>long</b>, complex sentence (25 words).</li>
            <li>3. End the point with a <b>short</b>, punchy one (5 words).</li>
          </ul>
          <div className="mt-8 pt-4 border-t border-white/10 text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em]">
            This creates "Musicality" in your prose.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module6_AdvancedSkills;
