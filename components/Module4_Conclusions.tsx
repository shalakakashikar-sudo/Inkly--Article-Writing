
import React from 'react';

const Module4_Conclusions: React.FC = () => {
  return (
    <div className="space-y-20 animate-in fade-in duration-700 pb-20">
      <header className="text-center max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold text-[#2c1810] mb-6 italic">Powerful Closures</h2>
        <p className="text-2xl text-[#5d4037] leading-relaxed italic">A weak conclusion ruins a strong article. Your final 50 words must leave the reader thinking.</p>
      </header>

      <div className="max-w-4xl mx-auto bg-[#2c1810] p-10 border-2 border-[#d4af37] text-center mb-16 shadow-2xl">
        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#dccab1] mb-6">The 3-Part Conclusion Formula</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex-1">
            <span className="text-2xl font-bold text-[#d4af37] block mb-2">01. Synthesis</span>
            <p className="text-xs text-[#dccab1] italic">Briefly tie your main points together. Don't just list them.</p>
          </div>
          <div className="hidden md:block text-[#d4af37] text-2xl">+</div>
          <div className="flex-1">
            <span className="text-2xl font-bold text-[#d4af37] block mb-2">02. Impact</span>
            <p className="text-xs text-[#dccab1] italic">What happens if we act or don't act? Why does it matter?</p>
          </div>
          <div className="hidden md:block text-[#d4af37] text-2xl">+</div>
          <div className="flex-1">
            <span className="text-2xl font-bold text-[#d4af37] block mb-2">03. Impression</span>
            <p className="text-xs text-[#dccab1] italic">The "Lasting Impression"—a call to action or warning.</p>
          </div>
        </div>
      </div>

      <div className="space-y-12 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-[#2c1810] text-center uppercase tracking-widest italic">4 Impact Strategies</h3>
        {[
          {
            type: "1. The Call-to-Action",
            desc: "Start today: carry a reusable bottle, refuse single-use plastic, and hold corporations accountable by choosing sustainable brands.",
            advice: "Tell readers exactly what they can do. Be specific."
          },
          {
            type: "2. The Provocative Question",
            desc: "Will we be the generation remembered for recognizing these problems, or for having the courage to solve them?",
            advice: "Leave the reader questioning their own choices."
          },
          {
            type: "3. Forward-Looking Hope",
            desc: "Change is possible. It starts with awareness, grows through action, and succeeds through collective determination.",
            advice: "End on an optimistic but realistic note."
          },
          {
            type: "4. Full-Circle Return",
            desc: "That mother in Delhi shouldn't have to choose between sending her child to school and protecting her lungs. We can create a world where she doesn't have to.",
            advice: "Reference your opening scenario to create closure."
          }
        ].map((item, i) => (
          <div key={i} className="bg-white flex flex-col md:flex-row border border-[#dccab1] shadow-xl overflow-hidden group hover:border-[#8b0000] transition-colors">
            <div className="md:w-1/3 bg-[#8b0000] text-white p-10 flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4">{item.type}</h4>
              <p className="text-xs uppercase tracking-widest text-[#f1ede4] font-black">{item.advice}</p>
            </div>
            <div className="md:w-2/3 p-10 bg-[#fdfbf7]">
              <p className="text-2xl font-serif italic text-[#3d2b1f] leading-relaxed">"{item.desc}"</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#f1ede4] p-10 border border-[#dccab1] max-w-4xl mx-auto text-center">
        <h4 className="text-sm font-black text-[#8b0000] uppercase mb-4 tracking-widest">The "Don't" List</h4>
        <div className="flex flex-wrap justify-center gap-8">
           <span className="text-base font-bold text-[#5d4037] line-through decoration-[#8b0000] decoration-2">"In conclusion..."</span>
           <span className="text-base font-bold text-[#5d4037] line-through decoration-[#8b0000] decoration-2">"To sum up..."</span>
           <span className="text-base font-bold text-[#5d4037] line-through decoration-[#8b0000] decoration-2">Introducing new info</span>
           <span className="text-base font-bold text-[#5d4037] line-through decoration-[#8b0000] decoration-2">Apologizing for your opinion</span>
        </div>
      </div>
    </div>
  );
};

export default Module4_Conclusions;
