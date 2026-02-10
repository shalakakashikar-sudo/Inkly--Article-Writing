
import React from 'react';

const Module8_Strategy: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-40 px-4 max-w-7xl mx-auto block">
      <header className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-block px-4 py-1 bg-[#8b0000] text-white text-[10px] font-black uppercase tracking-[0.5em] mb-4">Exam Mode</div>
        <h2 className="text-5xl font-bold text-[#2c1810] mb-6 italic">The 12-Minute Blitz</h2>
        <p className="text-xl text-[#5d4037] font-serif italic leading-relaxed">Speed is a skill. This is the exact timeline for a perfect 5-mark article under pressure.</p>
      </header>

      <div className="space-y-24">
        {/* Universal Filler Bank Section */}
        <div className="bg-[#2c1810] p-10 md:p-20 shadow-2xl text-white relative overflow-hidden rounded-sm">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#d4af37]"></div>
          <div className="absolute -right-32 -bottom-32 w-80 h-80 bg-white/5 rounded-full"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-[#d4af37] mb-4 uppercase tracking-tighter italic">The Master Filler Bank</h3>
            <p className="text-[#dccab1] mb-12 font-serif text-lg italic opacity-80">High-impact "Safety Net" phrases for any topic.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="group">
                  <h4 className="text-[10px] font-black uppercase text-[#d4af37] border-b border-white/10 pb-2 mb-4 tracking-widest">Complexity Pumpers</h4>
                  <p className="text-lg font-serif italic leading-relaxed text-white/90 mb-4 hover:text-white transition-colors">"One cannot turn a blind eye to the reality that [Topic] is not a temporary hurdle, but a systemic challenge requiring a fundamental paradigm shift."</p>
                  <p className="text-lg font-serif italic leading-relaxed text-white/90 hover:text-white transition-colors">"The repercussions are multifaceted, reverberating through various strata of our society and affecting both the individual and the community."</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="group">
                  <h4 className="text-[10px] font-black uppercase text-[#d4af37] border-b border-white/10 pb-2 mb-4 tracking-widest">Transition Pumpers</h4>
                  <p className="text-lg font-serif italic leading-relaxed text-white/90 mb-4 hover:text-white transition-colors">"While the immediate consequences are glaringly obvious, the long-term fallout remains a troubling mystery that warrants deeper introspection."</p>
                  <p className="text-lg font-serif italic leading-relaxed text-white/90 hover:text-white transition-colors">"Despite the plethora of policies enacted, the true catalyst for meaningful change remains a robust sense of individual accountability."</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-10 bg-white/5 border border-white/10 rounded-sm">
              <h4 className="text-[11px] font-black uppercase text-[#d4af37] mb-6 tracking-[0.3em]">The Universal Exit</h4>
              <p className="text-2xl font-serif italic text-white leading-relaxed">"Ultimately, the path forward is illuminated not by grandiose gestures, but by the quiet determination of individuals who choose responsibility over apathy. Let us be the generation that acted."</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-[#fdfbf7] p-8 md:p-16 border-2 border-[#2c1810] shadow-[20px_20px_0px_0px_rgba(44,24,16,0.1)] relative overflow-hidden rounded-sm">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#f1ede4] rotate-45 -mr-16 -mt-16 border-b-2 border-[#dccab1]"></div>
           <h3 className="text-3xl font-bold text-[#2c1810] mb-16 uppercase tracking-tighter border-b-4 border-[#2c1810] inline-block pb-2">Exam Room Timeline</h3>
           
           <div className="space-y-12 relative">
             <div className="absolute left-[31px] top-0 bottom-0 w-1 bg-[#dccab1]"></div>
             
             {[
               { time: "1 Min", task: "Rapid Planning", desc: "Read prompt twice. Underline keywords. Immediately pick your Hook (Statistic vs Scenario)." },
               { time: "1 Min", task: "Format Skeleton", desc: "Center Title. Center Byline. Draft your structural framework first—do not start writing sentences yet." },
               { time: "8 Min", task: "Core Drafting", desc: "Para 1 (Hook): 1.5m | Para 2-3 (Logic/Evidence): 5m | Para 4 (Full Circle Conclusion): 1.5m." },
               { time: "2 Min", task: "The Red Pen Pass", desc: "Rapidly check Byline spelling, paragraph gaps, and insert 'High-Mark Connectors' like 'Nevertheless'." }
             ].map((item, i) => (
               <div key={i} className="flex gap-10 items-start relative z-10 group">
                 <div className="w-16 h-16 bg-[#2c1810] text-[#fdfbf7] rounded-full flex items-center justify-center font-black flex-shrink-0 border-4 border-[#fdfbf7] group-hover:bg-[#8b0000] transition-all shadow-xl text-xl">{item.time}</div>
                 <div className="pt-3">
                   <h4 className="text-2xl font-bold text-[#8b0000] uppercase mb-2 tracking-tight">{item.task}</h4>
                   <p className="text-lg text-[#3d2b1f] font-serif italic leading-relaxed">{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Hall Hacks Section */}
        <div className="bg-[#fdfbf7] border-4 border-[#8b0000] p-10 md:p-16 shadow-2xl rounded-sm">
          <h3 className="text-3xl font-bold text-[#8b0000] mb-12 text-center uppercase tracking-[0.2em] italic">Hall Hacks: "In Case of Emergency"</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-4 p-8 bg-[#f1ede4]/50 border-l-4 border-[#8b0000]">
               <h4 className="text-xs font-black uppercase text-[#2c1810] tracking-widest">Stuck on a Hook?</h4>
               <p className="text-lg font-serif italic leading-relaxed text-[#3d2b1f]">Use the <b>"Irony Frame"</b>: "Is it not a tragic irony that in an age of [Ideal], we are struggling with [Topic]?" This works for 90% of exam topics.</p>
             </div>
             <div className="space-y-4 p-8 bg-[#f1ede4]/50 border-l-4 border-[#8b0000]">
               <h4 className="text-xs font-black uppercase text-[#2c1810] tracking-widest">Out of Time?</h4>
               <p className="text-lg font-serif italic leading-relaxed text-[#3d2b1f]">Focus on <b>Format + Conclusion</b>. An examiner will often forgive a slightly shorter body if the structure and ending are professional.</p>
             </div>
             <div className="space-y-4 p-8 bg-[#f1ede4]/50 border-l-4 border-[#8b0000]">
               <h4 className="text-xs font-black uppercase text-[#2c1810] tracking-widest">Vocabulary Brain-Fog?</h4>
               <p className="text-lg font-serif italic leading-relaxed text-[#3d2b1f]">Switch basic adjectives. Don't say "big," say <b>"monumental."</b> Don't say "bad," say <b>"detrimental."</b> These 1-word swaps carry high weight.</p>
             </div>
             <div className="space-y-4 p-8 bg-[#f1ede4]/50 border-l-4 border-[#8b0000]">
               <h4 className="text-xs font-black uppercase text-[#2c1810] tracking-widest">Weak Linking?</h4>
               <p className="text-lg font-serif italic leading-relaxed text-[#3d2b1f]">Start Paragraph 3 with <b>"Paradoxically,"</b> or <b>"Nevertheless,"</b>. It forces a logical pivot even if you aren't sure how to transition.</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#fdfbf7] p-10 border border-[#dccab1] shadow-xl rounded-sm">
            <h4 className="text-[#8b0000] font-black uppercase text-[10px] mb-6 tracking-[0.4em]">Golden Rule #1</h4>
            <div className="text-2xl font-serif italic leading-relaxed text-[#2c1810]">
              <b>Done &gt; Perfect.</b> A structured 4-paragraph article with basic words always beats a half-finished poem. <b>Finish the piece.</b>
            </div>
          </div>
          <div className="bg-[#fdfbf7] p-10 border border-[#dccab1] shadow-xl rounded-sm">
            <h4 className="text-[#8b0000] font-black uppercase text-[10px] mb-6 tracking-[0.4em]">Golden Rule #2</h4>
            <p className="text-2xl font-serif italic leading-relaxed text-[#2c1810]">
              <b>Respect the Cues.</b> Cues are free content. Check them off like a shopping list as you write them into your paragraphs.
            </p>
          </div>
        </div>

        <div className="bg-[#2c1810] p-16 text-center text-white shadow-2xl rounded-sm border-b-8 border-[#d4af37] mb-20">
          <h3 className="text-4xl font-bold mb-10 italic text-[#d4af37]">The Blitz Mantra</h3>
          <p className="text-2xl font-serif italic leading-relaxed max-w-3xl mx-auto opacity-90">
            "Structure is my shield, and Speed is my sword. I will write with precision, think with logic, and finish with impact."
          </p>
          <div className="mt-16 inline-block border-2 border-[#d4af37] px-12 py-4 text-xl font-black uppercase tracking-[0.6em] text-[#d4af37]">
            12 MINUTES. 5 MARKS.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module8_Strategy;
