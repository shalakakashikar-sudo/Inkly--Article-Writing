
import React from 'react';

const ArticleLayoutInfographic: React.FC = () => {
  return (
    <div className="bg-[#fdfbf7] border-4 border-[#2c1810] p-6 md:p-14 shadow-[20px_20px_0px_0px_rgba(44,24,16,0.1)] max-w-[1440px] mx-auto relative overflow-hidden my-12">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#8b0000]/5 -mr-40 -mt-40 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37]/5 -ml-32 -mb-32 rounded-full"></div>
      
      <header className="text-center mb-20 border-b-4 border-[#2c1810] pb-10">
        <div className="inline-block px-4 py-1 bg-[#2c1810] text-[#d4af37] text-xs font-black uppercase tracking-[0.5em] mb-4">The Master Blueprint</div>
        <h2 className="text-5xl md:text-6xl font-bold text-[#2c1810] italic">The Exhaustive Writing Anatomy</h2>
        <p className="text-xl font-black uppercase tracking-widest text-[#8b4513] mt-3">Precision Engineering for 5/5 Marks</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Advanced Logic & Nuance */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-[#f1ede4] p-8 border-l-4 border-[#8b0000] shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#8b0000] mb-4">The WHAT → WHY → HOW</h4>
            <p className="text-lg font-serif italic text-[#5d4037] leading-relaxed">
              <b className="text-[#2c1810]">WHAT:</b> Identify the issue (e.g., Plastic Pollution).<br/>
              <b className="text-[#2c1810]">WHY:</b> Connect to life (Marine impact).<br/>
              <b className="text-[#2c1810]">HOW:</b> Suggest action (Policy change).
            </p>
          </div>
          <div className="bg-[#f1ede4] p-8 border-l-4 border-[#2c1810] shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#2c1810] mb-4">Art vs Essay</h4>
            <p className="text-lg font-serif italic text-[#5d4037] leading-relaxed">
              Articles are <b className="text-[#2c1810]">conversational</b>. Use <b className="text-[#2c1810]">Shocking Stats</b> instead of boring facts. Headlines must be <b className="text-[#2c1810]">Journalistic</b>.
            </p>
          </div>
          <div className="bg-[#f1ede4] p-8 border-l-4 border-[#b8860b] shadow-sm">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#b8860b] mb-4">The Invisible Thread</h4>
            <p className="text-lg font-serif italic text-[#5d4037] leading-relaxed">
              Cohesion is key. Every paragraph must end with a <b className="text-[#2c1810]">linking phrase</b> that sets up the next one.
            </p>
          </div>
          <div className="bg-[#2c1810] p-8 text-[#d4af37]">
            <h4 className="text-xs font-black uppercase tracking-widest mb-6">Express Pass (Vocab)</h4>
            <ul className="text-xs font-bold space-y-4 leading-tight">
              <li>• <span className="text-white">Paradigm Shift</span> <span className="font-normal opacity-80">(A fundamental change in approach; e.g., "The digital age caused a paradigm shift in learning.")</span></li>
              <li>• <span className="text-white">Inevitable Fallout</span> <span className="font-normal opacity-80">(Unavoidable negative result; e.g., "Ecological decay is the fallout of neglect.")</span></li>
              <li>• <span className="text-white">Catalyst for Change</span> <span className="font-normal opacity-80">(A spark that triggers progress; e.g., "Education is the ultimate catalyst.")</span></li>
              <li>• <span className="text-white">Pervasive Issue</span> <span className="font-normal opacity-80">(A widespread problem; e.g., "Pollution has become a pervasive issue.")</span></li>
            </ul>
          </div>
        </div>

        {/* Center: Annotated Frame */}
        <div className="lg:col-span-6 relative bg-[#fdfbf7] border-2 border-[#dccab1] p-10 md:p-14 shadow-inner">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#2c1810]"></div>
          
          <div className="text-center py-10 border-b-2 border-[#f1ede4] mb-16">
            <h3 className="text-4xl font-bold text-[#2c1810] tracking-tighter uppercase">HEADING: CURIOUS & PUNCHY (5-10 WORDS)</h3>
            <div className="text-xl font-serif italic text-[#8b4513] mt-4 font-bold underline">By: [Name from Question], Class XII</div>
          </div>

          <div className="space-y-16">
            {/* Para 1 */}
            <div className="p-10 bg-[#f1ede4] border border-[#dccab1] relative group pt-16">
              <div className="absolute -top-4 left-6 bg-[#8b0000] text-white text-[12px] font-black px-5 py-2 uppercase shadow-md z-10">THE HOOK</div>
              <h5 className="text-sm font-black uppercase text-[#8b0000] mb-4 tracking-wider">Para 1: Introduction (40-50 words)</h5>
              <p className="text-lg font-serif leading-relaxed italic text-[#3d2b1f]">
                Use a <b className="text-[#2c1810]">Shocking Stat</b> or <b className="text-[#2c1810]">Vivid Scenario</b>. "Every 8 seconds, a truckload of plastic..." Link to the magnitude of the problem immediately.
              </p>
            </div>

            {/* Para 2-3 */}
            <div className="p-10 bg-[#f1ede4] border border-[#dccab1] relative pt-16">
              <div className="absolute -top-4 left-6 bg-[#2c1810] text-white text-[12px] font-black px-5 py-2 uppercase shadow-md z-10">THE BODY</div>
              <h5 className="text-sm font-black uppercase text-[#2c1810] mb-4 tracking-wider">Para 2-3: Analysis (100-120 words)</h5>
              <p className="text-lg font-serif leading-relaxed italic text-[#3d2b1f]">
                <b className="text-[#2c1810]">CLAIM → EVIDENCE → IMPACT</b>. Explain the mechanism of the problem. Use <b className="text-[#2c1810]">Connectors</b>: <i>"Furthermore," "Conversely," "In light of this."</i> 
              </p>
            </div>

            {/* Para 4 */}
            <div className="p-10 bg-[#f1ede4] border border-[#dccab1] relative pt-16">
              <div className="absolute -top-4 left-6 bg-[#d4af37] text-[#2c1810] text-[12px] font-black px-5 py-2 uppercase shadow-md border border-[#2c1810]/10 z-10">THE EXIT</div>
              <h5 className="text-sm font-black uppercase text-[#d4af37] mb-4 tracking-wider">Para 4: Conclusion (40-50 words)</h5>
              <p className="text-lg font-serif leading-relaxed italic text-[#3d2b1f]">
                <b className="text-[#2c1810]">Full-Circle Return</b>: Link back to Para 1. Final Call-to-action or Warning. Use a "High-Mark Verb" here like <i>Ameliorate</i> or <i>Eradicate</i>.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Scoring & Tips */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-[#2c1810] p-8 text-white shadow-lg">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#d4af37] mb-6">5-Mark Scorecard</h4>
            <div className="space-y-5 text-base font-serif">
              <div className="flex justify-between border-b border-white/10 pb-3"><span>Format (Title/Byline)</span><span className="font-bold text-[#d4af37]">1M</span></div>
              <div className="flex justify-between border-b border-white/10 pb-3 pt-1"><span>Content (Ideas/Cues)</span><span className="font-bold text-[#d4af37]">2M</span></div>
              <div className="flex justify-between pt-3"><span>Expression (Grammar/Vocab)</span><span className="font-bold text-[#d4af37]">2M</span></div>
            </div>
          </div>
          
          <div className="bg-[#8b0000] p-8 text-white shadow-lg">
            <h4 className="text-xs font-black uppercase tracking-widest mb-6">Examiner's Eyes</h4>
            <ul className="text-base font-serif italic space-y-6 leading-relaxed">
              <li>• Use <b className="text-white">Hypophora</b> (Ask & Answer).</li>
              <li>• Avoid <b className="text-white">"I Think"</b>; use "One cannot deny."</li>
              <li>• <b className="text-white">One Line</b> gap between paragraphs.</li>
              <li>
                • <b className="text-white">Use Semicolons (;):</b><br/>
                <span className="text-[12px] block mt-1 opacity-80">e.g., "The Earth is not dying; it is being killed."</span>
                <span className="text-[12px] block opacity-80">e.g., "Technology is a tool; its value depends on the user."</span>
              </li>
            </ul>
          </div>

          <div className="p-8 border-2 border-[#dccab1] bg-[#fdfbf7] italic text-base text-[#5d4037] leading-relaxed">
            <h4 className="text-[10px] font-black uppercase text-[#2c1810] mb-4">Word Count Rule</h4>
            <b className="text-[#2c1810]">Standard:</b> 120-150 words.<br/>
            <b className="text-[#2c1810]">Nuance:</b> Going 10 words over is safer than 10 words under.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleLayoutInfographic;
