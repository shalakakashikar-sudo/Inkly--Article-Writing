
import React from 'react';

const Module8_Strategy: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700 pb-40 px-4">
      <header className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2c1810] mb-4 italic">The 12-Minute Blitz</h2>
        <p className="text-lg text-[#5d4037] italic">In the exam hall, speed is survival. This is the exact timeline for a perfect 5-mark article in 12 minutes.</p>
      </header>

      <div className="max-w-3xl mx-auto space-y-12">
        <div className="bg-white p-8 md:p-12 border-2 border-[#2c1810] shadow-[15px_15px_0px_0px_rgba(44,24,16,0.1)] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-24 h-24 bg-[#f1ede4] rotate-45 -mr-12 -mt-12 border-b-2 border-[#dccab1]"></div>
           <h3 className="text-2xl font-bold text-[#2c1810] mb-12 uppercase tracking-tighter border-b-2 border-[#f1ede4] pb-4">Exam Timeline</h3>
           
           <div className="space-y-10 relative">
             <div className="absolute left-[27px] top-0 bottom-0 w-1 bg-[#dccab1]"></div>
             
             {[
               { time: "1 Min", task: "Rapid Planning", desc: "Read twice. Underline cues. Immediately pick a Hook (Question vs Shocking Stat) and decide your Tone." },
               { time: "1 Min", task: "Format Skeleton", desc: "Center your Title. Center your Byline. Draft the framework—don't think, just execute." },
               { time: "8 Min", task: "Core Drafting", desc: "Para 1 (Hook): 1.5m | Para 2 (Cause): 2.5m | Para 3 (Cure): 2.5m | Para 4 (Closure): 1.5m." },
               { time: "2 Min", task: "The Red Pen Pass", desc: "Check grammar, ensure transitions like 'Moreover' or 'However' are present, and verify your Byline name." }
             ].map((item, i) => (
               <div key={i} className="flex gap-8 items-start relative z-10 group">
                 <div className="w-14 h-14 bg-[#2c1810] text-white rounded-full flex items-center justify-center font-black flex-shrink-0 border-4 border-[#fdfbf7] group-hover:bg-[#8b0000] transition-colors shadow-lg">{item.time}</div>
                 <div className="pt-2">
                   <h4 className="text-xl font-bold text-[#8b0000] uppercase mb-1 tracking-tight">{item.task}</h4>
                   <p className="text-base text-[#3d2b1f] font-serif italic leading-relaxed">{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Universal Filler Bank Section */}
        <div className="bg-[#2c1810] p-10 shadow-2xl text-white">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-8 uppercase tracking-widest text-center italic">Universal Filler Bank</h3>
          <p className="text-center text-xs text-[#dccab1] mb-10 font-serif">High-impact "Safety Net" sentences to use when you run out of ideas or need more word count.</p>
          <div className="space-y-6">
            <div className="p-4 bg-white/5 border border-white/10">
              <h4 className="text-[10px] font-black uppercase text-[#d4af37] mb-2">To pad the Body Paragraph:</h4>
              <p className="text-sm italic font-serif">"The repercussions of this trend are multifaceted, reverberating through various strata of our society and affecting both the individual and the collective."</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10">
              <h4 className="text-[10px] font-black uppercase text-[#d4af37] mb-2">To bridge two ideas:</h4>
              <p className="text-sm italic font-serif">"While the immediate consequences are glaringly obvious, the long-term fallout remains a mystery that warrants deeper introspection."</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10">
              <h4 className="text-[10px] font-black uppercase text-[#d4af37] mb-2">To sound more authoritative:</h4>
              <p className="text-sm italic font-serif">"One cannot turn a blind eye to the fact that [Topic] is not merely a temporary hurdle, but a systemic challenge requiring a paradigm shift in our approach."</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10">
              <h4 className="text-[10px] font-black uppercase text-[#d4af37] mb-2">To transition to solutions:</h4>
              <p className="text-sm italic font-serif">"While policies provide the necessary framework, the true catalyst for meaningful change remains a robust sense of individual and public accountability."</p>
            </div>
          </div>
        </div>

        {/* Hall Hacks Section */}
        <div className="bg-[#fdfbf7] border-2 border-[#8b0000] p-10">
          <h3 className="text-2xl font-bold text-[#8b0000] mb-8 text-center uppercase tracking-widest italic">Hall Hacks: "In Case of Emergency"</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-4">
               <h4 className="text-xs font-black uppercase text-[#2c1810] border-b pb-2">Stuck on a Hook?</h4>
               <p className="text-sm font-serif italic">Use the <b>"Universal Rhetorical Question"</b>: "Is it not a tragic irony that in a world of [Ideal], we are witnessing [Problem]?" This works for 90% of topics.</p>
             </div>
             <div className="space-y-4">
               <h4 className="text-xs font-black uppercase text-[#2c1810] border-b pb-2">Out of Time?</h4>
               <p className="text-sm font-serif italic">Prioritize the <b>Title, Byline, and Para 1</b>. Even a truncated article with a perfect format can secure 2-3 marks. <b>Never skip format.</b></p>
             </div>
             <div className="space-y-4">
               <h4 className="text-xs font-black uppercase text-[#2c1810] border-b pb-2">Blanking on Vocab?</h4>
               <p className="text-sm font-serif italic">Think of the word's "weight." Instead of "bad," use "critical." Instead of "good," use "vital." Simply upgrading common adjectives secures expression marks.</p>
             </div>
             <div className="space-y-4">
               <h4 className="text-xs font-black uppercase text-[#2c1810] border-b pb-2">Weak Body?</h4>
               <p className="text-sm font-serif italic">Force a transition: Start Para 3 with <b>"Conversely,"</b> even if the contrast is small. It forces logical structure into your writing.</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#fdfbf7] p-8 border border-[#dccab1] shadow-xl">
            <h4 className="text-[#8b0000] font-black uppercase text-xs mb-4 tracking-widest">Golden Rule #1</h4>
            <p className="text-lg font-serif italic leading-relaxed">
              <b>Finished &gt; Perfect.</b> A structured article with 4 paragraphs always beats a poetic 2-paragraph fragment.
            </p>
          </div>
          <div className="bg-[#fdfbf7] p-8 border border-[#dccab1] shadow-xl">
            <h4 className="text-[#8b0000] font-black uppercase text-xs mb-4 tracking-widest">Golden Rule #2</h4>
            <p className="text-lg font-serif italic leading-relaxed">
              <b>Stick to the Cues.</b> Examiners look for the specific cues provided in the question. Tick them off as you write.
            </p>
          </div>
        </div>

        <div className="bg-[#2c1810] p-12 text-center text-white shadow-xl rounded-sm">
          <h3 className="text-3xl font-bold mb-8 italic text-[#d4af37]">The Lightning Mantra</h3>
          <p className="text-xl font-serif italic leading-relaxed max-w-2xl mx-auto">
            "Structure is your shield, and speed is your sword. Master the 12-minute blitz to secure your 5 marks and move on to the next victory."
          </p>
          <div className="mt-10 inline-block border-2 border-[#d4af37] px-8 py-3 text-lg font-black uppercase tracking-[0.4em] text-[#d4af37]">
            12 Minutes. 5 Marks.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module8_Strategy;
