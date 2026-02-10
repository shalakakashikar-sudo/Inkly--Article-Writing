
import React from 'react';

const Module7_MarkingScheme: React.FC = () => {
  return (
    <div className="space-y-20 animate-in fade-in duration-700 pb-20 px-4">
      <header className="text-center max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold text-[#2c1810] mb-6 italic">The Marking Blueprint</h2>
        <p className="text-2xl text-[#5d4037] leading-relaxed italic">Know exactly where your marks come from and avoid the pitfalls that steal them.</p>
      </header>

      <div className="max-w-4xl mx-auto bg-white border-4 border-[#2c1810] p-12 shadow-2xl">
        <table className="w-full text-left">
          <thead className="border-b-4 border-[#2c1810]">
            <tr>
              <th className="py-6 text-xl font-black uppercase tracking-widest text-[#2c1810]">Component</th>
              <th className="py-6 text-xl font-black uppercase tracking-widest text-[#8b0000]">Marks</th>
              <th className="py-6 text-xl font-black uppercase tracking-widest text-[#2c1810]">Examiner's Checklist</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1ede4]">
            {[
              { comp: "Format", mark: "1 Mark", criteria: "Title (Centered) + By-line (Centered) + Clear Paragraphs." },
              { comp: "Content", mark: "2 Marks", criteria: "Addressing all cues, logical flow, specific stats/examples." },
              { comp: "Expression", mark: "2 Marks", criteria: "Grammar, advanced vocab, sentence rhythm, transitions." }
            ].map((row, i) => (
              <tr key={i} className="group hover:bg-[#fdfbf7] transition-colors">
                <td className="py-8 text-2xl font-bold text-[#2c1810]">{row.comp}</td>
                <td className="py-8 text-2xl font-black text-[#8b0000]">{row.mark}</td>
                <td className="py-8 text-xl text-[#5d4037] font-serif italic leading-relaxed">{row.criteria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-[#2c1810] p-12 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-10 text-[#d4af37] italic">The Penalty Checklist</h3>
          <p className="text-sm text-[#dccab1] mb-8 font-serif italic">Avoid these to protect your hard-earned marks.</p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <span className="text-[#8b0000] font-bold text-lg">(-0.5)</span>
              <p className="text-sm"><b>Format Flaw:</b> Title or Byline is missing or not centered.</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-[#8b0000] font-bold text-lg">(-1.0)</span>
              <p className="text-sm"><b>Content Deficit:</b> Ignored the cues provided in the question.</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-[#8b0000] font-bold text-lg">(-0.5)</span>
              <p className="text-sm"><b>Over Length:</b> Exceeded the word limit significantly (10%+).</p>
            </div>
            <div className="flex gap-4 items-start">
               <span className="text-[#8b0000] font-bold text-lg">(-1.0)</span>
               <p className="text-sm"><b>Slang Use:</b> Using "kids," "don't," or informal contractions.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#fdfbf7] p-12 border border-[#dccab1] shadow-2xl">
          <h3 className="text-3xl font-bold mb-10 text-[#2c1810] italic">Expression Secrets</h3>
          <p className="text-sm text-[#8b4513] mb-8 font-serif italic">How to get that full 2/2 in the Expression category.</p>
          <ul className="space-y-4">
             <li className="flex gap-4 items-start">
               <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold">✓</div>
               <p className="text-sm font-serif italic"><b>Variety:</b> Mix simple, compound, and complex sentences.</p>
             </li>
             <li className="flex gap-4 items-start">
               <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold">✓</div>
               <p className="text-sm font-serif italic"><b>Advanced Vocab:</b> Use at least 4-5 "High-Mark Verbs" (Ameliorate, Exacerbate).</p>
             </li>
             <li className="flex gap-4 items-start">
               <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold">✓</div>
               <p className="text-sm font-serif italic"><b>Transitions:</b> Use advanced ones (Nevertheless, Paradoxically) instead of (But, Also).</p>
             </li>
             <li className="flex gap-4 items-start">
               <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold">✓</div>
               <p className="text-sm font-serif italic"><b>Cohesion:</b> Every paragraph should link logically to the one before it.</p>
             </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Module7_MarkingScheme;
