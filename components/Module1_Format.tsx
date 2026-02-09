
import React from 'react';
import ArticleLayoutInfographic from './ArticleLayoutInfographic';

const Module1_Format: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2c1810] mb-4 italic">The Anatomy of an Article</h2>
        <p className="text-lg text-[#5d4037] italic">An article is more than just an essay—it's journalistic, engaging, and direct. Here is how to nail the structural requirements.</p>
      </section>

      <ArticleLayoutInfographic />

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="bg-white p-10 border border-[#dccab1] shadow-xl relative">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#8b0000]"></div>
          <h3 className="text-2xl font-bold text-[#2c1810] mb-6 uppercase tracking-tight">1. The Headline Blueprint</h3>
          
          <p className="text-lg text-[#5d4037] mb-8 leading-relaxed">A perfect headline must be attention-grabbing and hint at your stance. It should ideally be 5-10 words long.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-[#fdfbf7] border border-[#dccab1]">
              <h4 className="font-bold text-[#8b0000] mb-3 uppercase text-xs">The Question</h4>
              <p className="text-base italic font-serif">"Are We Raising a Screen-Addicted Generation?"</p>
            </div>
            <div className="p-6 bg-[#fdfbf7] border border-[#dccab1]">
              <h4 className="font-bold text-[#8b0000] mb-3 uppercase text-xs">The Strong Statement</h4>
              <p className="text-base italic font-serif">"The Silent Killer: How Pollution Steals Our Future"</p>
            </div>
            <div className="p-6 bg-[#fdfbf7] border border-[#dccab1]">
              <h4 className="font-bold text-[#8b0000] mb-3 uppercase text-xs">Wordplay/Alliteration</h4>
              <p className="text-base italic font-serif">"Fast Fashion: Fads, Fabrics, and Fallout"</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2c1810] p-10 text-white shadow-2xl relative">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6 italic underline decoration-[#d4af37]/30 underline-offset-8">2. The By-Line Standard</h3>
          <p className="text-lg mb-8 leading-relaxed">The byline is a simple credit line. In exams, use the name given in the question. Always center it for maximum aesthetic appeal.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 border border-white/10 text-center">
              <span className="block text-[10px] text-[#d4af37] uppercase mb-2">Standard</span>
              <span className="text-xl font-serif">By: Rahul/Radhika</span>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 text-center">
              <span className="block text-[10px] text-[#d4af37] uppercase mb-2">Advanced</span>
              <span className="text-xl font-serif">By: Kavya, Class XII</span>
            </div>
          </div>
          <div className="mt-8 text-sm text-[#dccab1] italic border-t border-white/10 pt-4">
            * Note: Do not use your real name unless specifically asked.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module1_Format;
