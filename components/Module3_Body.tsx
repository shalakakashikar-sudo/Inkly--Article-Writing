
import React from 'react';

const Module3_Body: React.FC = () => {
  return (
    <div className="space-y-20 animate-in fade-in duration-700 pb-20 px-4">
      <header className="text-center max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold text-[#2c1810] mb-6 italic">Building the Argument</h2>
        <p className="text-2xl text-[#5d4037] leading-relaxed italic">Think of your body paragraphs as answering three vital questions: WHAT, WHY, and HOW.</p>
      </header>

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

      <div className="max-w-4xl mx-auto bg-white border border-[#dccab1] shadow-2xl overflow-hidden">
        <div className="bg-[#fdfbf7] p-10 text-center border-b border-[#dccab1]">
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
              <div className="w-12 h-12 bg-[#8b0000] text-white rounded-full flex items-center justify-center text-xl font-black flex-shrink-0 group-hover:scale-110 transition-transform">{item.letter}</div>
              <div className="pt-2 border-b border-[#f1ede4] pb-6 flex-grow">
                <h4 className="font-bold text-[#2c1810] mb-2 uppercase text-sm tracking-widest">{item.name}</h4>
                <p className="text-lg text-[#5d4037] italic leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
          
          <div className="mt-12 p-8 bg-[#2c1810] text-[#fdfbf7] rounded-sm relative">
            <div className="absolute top-2 right-2 text-[8px] font-black uppercase tracking-widest text-[#d4af37]/50">Example</div>
            <h4 className="font-bold text-[#d4af37] mb-4 uppercase text-xs">A Balanced Paragraph Example:</h4>
            <p className="text-xl font-serif italic leading-loose">
              "The impact of social media on teenage mental health cannot be ignored. [POINT] Recent studies reveal that teens spending more than three hours daily on social platforms show significantly higher rates of anxiety. [EVIDENCE] This constant exposure to curated, idealized versions of others' lives creates feelings of inadequacy. [EXPLANATION] When a student sees perfect highlight reels, their own life feels insufficient by comparison. [LINK]"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3_Body;
