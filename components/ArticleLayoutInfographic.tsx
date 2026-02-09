
import React from 'react';

const ArticleLayoutInfographic: React.FC = () => {
  return (
    <div className="bg-white border-4 border-[#2c1810] p-6 md:p-12 shadow-[20px_20px_0px_0px_rgba(44,24,16,0.1)] max-w-6xl mx-auto relative overflow-hidden my-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b0000]/5 -mr-32 -mt-32 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#d4af37]/5 -ml-24 -mb-24 rounded-full"></div>
      
      <header className="text-center mb-16 border-b-4 border-[#2c1810] pb-8">
        <div className="inline-block px-4 py-1 bg-[#2c1810] text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-4">The Master Blueprint</div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#2c1810] italic">The Exhaustive Writing Anatomy</h2>
        <p className="text-sm font-black uppercase tracking-widest text-[#8b4513] mt-3">Precision Engineering for 5/5 Marks</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Logic Flow Formula */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-[#fdfbf7] p-5 border-l-4 border-[#8b0000] shadow-sm">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-[#8b0000] mb-2">The WHAT → WHY → HOW</h4>
            <p className="text-xs font-serif italic text-[#5d4037] leading-relaxed">
              <b>WHAT:</b> Identify the issue (e.g., Plastic Pollution).<br/>
              <b>WHY:</b> Connect to life (Marine impact).<br/>
              <b>HOW:</b> Suggest action (Policy change).
            </p>
          </div>
          <div className="bg-[#fdfbf7] p-5 border-l-4 border-[#2c1810] shadow-sm">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-[#2c1810] mb-2">Art vs Essay</h4>
            <p className="text-xs font-serif italic text-[#5d4037] leading-relaxed">
              Articles are <b>conversational</b>. Use <b>Shocking Stats</b> instead of boring facts. Headlines must be <b>Journalistic</b>.
            </p>
          </div>
          <div className="bg-[#fdfbf7] p-5 border-l-4 border-[#b8860b] shadow-sm">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-[#b8860b] mb-2">The Rhythm Rule</h4>
            <p className="text-xs font-serif italic text-[#5d4037] leading-relaxed">
              Mix Short (Impact), Medium (Info), and Long (Context) sentences. Never use same length twice in a row!
            </p>
          </div>
        </div>

        {/* Center: Annotated Frame */}
        <div className="lg:col-span-6 relative bg-white border-2 border-[#dccab1] p-6 shadow-inner">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#2c1810]"></div>
          
          <div className="text-center py-6 border-b-2 border-[#f1ede4] mb-6">
            <h3 className="text-2xl font-bold text-[#2c1810] tracking-tighter uppercase">HEADING: CURIOUS & PUNCHY (5-10 WORDS)</h3>
            <div className="text-sm font-serif italic text-[#8b4513] mt-2 font-bold underline">By: [Name from Question], Class XII</div>
          </div>

          <div className="space-y-6">
            <div className="p-4 bg-[#fdfbf7] border border-[#dccab1] relative group">
              <span className="absolute -left-3 top-2 bg-[#8b0000] text-white text-[9px] font-black px-2 py-0.5">THE HOOK</span>
              <h5 className="text-[10px] font-black uppercase text-[#8b0000] mb-1">Para 1: Intro (40-50 words)</h5>
              <p className="text-xs font-serif leading-relaxed italic text-[#3d2b1f]">
                Use a <b>Shocking Stat</b> or <b>Vivid Scenario</b>. "Every 8 seconds, a truckload of plastic..."
              </p>
            </div>

            <div className="p-4 bg-[#fdfbf7] border border-[#dccab1] relative">
              <span className="absolute -left-3 top-2 bg-[#2c1810] text-white text-[9px] font-black px-2 py-0.5">THE BODY</span>
              <h5 className="text-[10px] font-black uppercase text-[#2c1810] mb-1">Para 2-3: Analysis (100-120 words)</h5>
              <p className="text-xs font-serif leading-relaxed italic text-[#3d2b1f]">
                <b>CLAIM → EVIDENCE → IMPACT</b>. Explain the mechanism of the problem and its real-world fallout. Use transitions (Moreover, Conversely).
              </p>
            </div>

            <div className="p-4 bg-[#fdfbf7] border border-[#dccab1] relative">
              <span className="absolute -left-3 top-2 bg-[#d4af37] text-white text-[9px] font-black px-2 py-0.5">THE EXIT</span>
              <h5 className="text-[10px] font-black uppercase text-[#d4af37] mb-1">Para 4: Conclusion (40-50 words)</h5>
              <p className="text-xs font-serif leading-relaxed italic text-[#3d2b1f]">
                <b>Full-Circle Return</b>: Link back to Para 1. Final Call-to-action or Warning.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Scoring & Secrets */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-[#2c1810] p-5 text-white shadow-lg">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-[#d4af37] mb-3">5-Mark Scorecard</h4>
            <div className="space-y-2 text-[10px] font-serif">
              <div className="flex justify-between border-b border-white/10 pb-1"><span>Format (Title/Byline)</span><span className="font-bold">1M</span></div>
              <div className="flex justify-between border-b border-white/10 pb-1 pt-1"><span>Content (Ideas/Cues)</span><span className="font-bold">2M</span></div>
              <div className="flex justify-between pt-1"><span>Expression (Grammar/Vocab)</span><span className="font-bold">2M</span></div>
            </div>
          </div>
          
          <div className="bg-[#8b0000] p-5 text-white shadow-lg">
            <h4 className="text-[11px] font-black uppercase tracking-widest mb-3">Examiner's Eyes</h4>
            <ul className="text-[10px] font-serif italic space-y-2 leading-tight">
              <li>• Use <b>"High-Mark Verbs"</b> (Exacerbate, Ameliorate).</li>
              <li>• Avoid <b>"I Think"</b> unless it's a personal anecdote.</li>
              <li>• Link back to intro in conclusion (<b>Full Circle</b>).</li>
              <li>• <b>One Line</b> gap between every paragraph.</li>
            </ul>
          </div>

          <div className="p-5 border-2 border-[#dccab1] bg-white italic text-[11px] text-[#5d4037] leading-relaxed">
            <h4 className="text-[10px] font-black uppercase text-[#2c1810] mb-2">Word Count Rule</h4>
            <b>Standard:</b> 120-150 words.<br/>
            <b>Advanced Exam:</b> Practice up to 200 words for safety.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleLayoutInfographic;
