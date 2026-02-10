
import React from 'react';

const Module3_Body: React.FC = () => {
  return (
    <div className="space-y-20 animate-in fade-in duration-700 pb-20 px-4">
      <header className="text-center max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold text-[#2c1810] mb-6 italic">Building the Argument</h2>
        <p className="text-2xl text-[#5d4037] leading-relaxed italic">Think of your body paragraphs as answering three vital questions: WHAT, WHY, and HOW.</p>
      </header>

      {/* Logic Connectors Bank */}
      <div className="max-w-5xl mx-auto bg-[#fdfbf7] border-2 border-[#2c1810] p-12 shadow-xl">
        <h3 className="text-center text-[#2c1810] text-xs font-black uppercase tracking-[0.4em] mb-10">The Bridge Phrase Bank (Fillers that add marks)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-[#f1ede4] border-l-4 border-[#8b0000]">
            <h4 className="text-[9px] font-black uppercase text-[#8b0000] mb-2">To introduce a cause:</h4>
            <p className="text-base italic font-serif">"A deep dive into the roots of this issue reveals a multi-layered causality, primarily driven by [Cause]."</p>
          </div>
          <div className="p-6 bg-[#f1ede4] border-l-4 border-[#2c1810]">
            <h4 className="text-[9px] font-black uppercase text-[#2c1810] mb-2">To show consequences:</h4>
            <p className="text-base italic font-serif">"The repercussions are not merely academic but deeply personal, affecting the very core of our community's well-being."</p>
          </div>
          <div className="p-6 bg-[#f1ede4] border-l-4 border-[#d4af37]">
            <h4 className="text-[9px] font-black uppercase text-[#8b4513] mb-2">To add complexity:</h4>
            <p className="text-base italic font-serif">"While it is tempting to view this through a binary lens, the truth lies in the subtle nuances of [Point]."</p>
          </div>
          <div className="p-6 bg-[#f1ede4] border-l-4 border-[#8b4513]">
            <h4 className="text-[9px] font-black uppercase text-[#8b4513] mb-2">To transition smoothly:</h4>
            <p className="text-base italic font-serif">"This brings us to a pivotal realization: the status quo is no longer an option if we aim for progress."</p>
          </div>
        </div>
      </div>

      {/* Logic Flow Formula */}
      <div className="max-w-4xl mx-auto bg-[#2c1810] p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full"></div>
        <h3 className="text-center text-[#d4af37] text-sm font-black uppercase tracking-[0.4em] mb-12">The Logic Flow Formula</h3>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="text-center md:w-1/3">
            <div className="text-4xl font-black text-[#d4af37] mb-2">WHAT</div>
            <p className="text-sm text-[#dccab1] italic">What is the specific issue? Define it clearly.</p>
          </div>
          <div className="text-2xl text-[#d4af37] hidden md:block">→</div>
          <div className="text-center md:w-1/3">
            <div className="text-4xl font-black text-[#d4af37] mb-2">WHY</div>
            <p className="text-sm text-[#dccab1] italic">Why does it matter? Explain the consequences.</p>
          </div>
          <div className="text-2xl text-[#d4af37] hidden md:block">→</div>
          <div className="text-center md:w-1/3">
            <div className="text-4xl font-black text-[#d4af37] mb-2">HOW</div>
            <p className="text-sm text-[#dccab1] italic">How can we solve it? Suggest practical action.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-[#fdfbf7] border border-[#dccab1] shadow-2xl overflow-hidden">
        <div className="bg-[#f1ede4] p-10 text-center border-b border-[#dccab1]">
          <h3 className="text-2xl font-bold text-[#2c1810] uppercase tracking-widest italic">The PEEL Paragraph Builder</h3>
          <p className="text-sm text-[#8b4513] mt-2">One Paragraph = One Main Idea</p>
        </div>
        <div className="p-12 space-y-10">
          {[
            { letter: "P", name: "Point", desc: "State the main point of this paragraph clearly. Use a 'Topic Sentence'." },
            { letter: "E", name: "Explanation", desc: "Elaborate on the point. Use 2-3 sentences to develop the logic behind the problem." },
            { letter: "E", name: "Example/Evidence", desc: "Connect to a real-world statistic, fact, or specific scenario. Makes it believable." },
            { letter: "L", name: "Link", desc: "Connect the idea back to your overall topic or set up the next paragraph." }
          ].map((item, i) => (
            <div key={i} className="flex gap-8 items-start group">
              <div className="w-12 h-12 bg-[#8b0000] text-white rounded-full flex items-center justify-center text-xl font-black flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">{item.letter}</div>
              <div className="pt-2 border-b border-[#f1ede4] pb-6 flex-grow">
                <h4 className="font-bold text-[#2c1810] mb-2 uppercase text-sm tracking-widest">{item.name}</h4>
                <p className="text-lg text-[#5d4037] italic leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Module3_Body;
