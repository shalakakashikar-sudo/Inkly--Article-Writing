
import React from 'react';

const Module7_MarkingScheme: React.FC = () => {
  return (
    <div className="space-y-20 animate-in fade-in duration-700 pb-20">
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
              <tr key={i} className="group hover:bg-[#fdfbf7]">
                <td className="py-8 text-2xl font-bold text-[#2c1810]">{row.comp}</td>
                <td className="py-8 text-2xl font-black text-[#8b0000]">{row.mark}</td>
                <td className="py-8 text-xl text-[#5d4037] font-serif italic leading-relaxed">{row.criteria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="max-w-5xl mx-auto bg-[#2c1810] p-12 text-white shadow-2xl">
        <h3 className="text-3xl font-bold mb-10 text-[#d4af37] italic text-center">Common Mistakes vs Corrections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { m: "Boring Headlines (e.g. 'Article on Pollution')", c: "Catchy Headlines (e.g. 'Drowning in Waste')" },
            { m: "Vague Openings (e.g. 'Pollution is bad')", c: "Shocking Stats (e.g. '25 cigarettes a day...')" },
            { m: "Repetitive Words (e.g. 'Big problem')", c: "Advanced Vocab (e.g. 'Critical crisis')" },
            { m: "Vague Conclusions (e.g. 'We should all help')", c: "Call to Action (e.g. 'Refuse plastic today')" },
            { m: "Informal Tone (e.g. 'Nowadays kids...')", c: "Semi-Formal Tone (e.g. 'Currently, young people...')" },
            { m: "Listing instead of Analysis", c: "PEEL Paragraph construction" }
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <p className="text-red-400 text-sm line-through decoration-red-400">✗ {item.m}</p>
              <p className="text-green-400 font-bold text-lg">✓ {item.c}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Module7_MarkingScheme;
