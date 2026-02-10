
import React from 'react';

const Module2_Introductions: React.FC = () => {
  return (
    <div className="space-y-20 animate-in fade-in duration-700 pb-20 px-4">
      <header className="text-center max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold text-[#2c1810] mb-6 italic">Mastering the Hook</h2>
        <p className="text-2xl text-[#5d4037] leading-relaxed italic">The first paragraph is where you win or lose your reader. Stop saying "Pollution is a big problem" and start showing why it matters.</p>
      </header>

      {/* Universal Starter Bank */}
      <div className="max-w-5xl mx-auto bg-[#2c1810] p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-32 -mt-32 rounded-full"></div>
        <h3 className="text-[#d4af37] text-xs font-black uppercase tracking-[0.4em] mb-10 text-center">Universal Intro Starters (The "I'm Stuck" Bank)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#fdfbf7]">
          <div className="space-y-2">
            <h4 className="text-[10px] font-black uppercase text-[#d4af37]">For any Problem:</h4>
            <p className="text-lg font-serif italic">"While we celebrate the dizzying heights of modern progress, a shadow of neglect looms over the vital issue of [Topic]. It is a paradox that deserves our immediate attention."</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-[10px] font-black uppercase text-[#d4af37]">For any Tech/Change:</h4>
            <p className="text-lg font-serif italic">"We live in a world where change is the only constant. Yet, the rapid proliferation of [Topic] has brought us to a crossroads where caution must meet curiosity."</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-[10px] font-black uppercase text-[#d4af37]">For any Social/Value:</h4>
            <p className="text-lg font-serif italic">"The true measure of a society's advancement lies not in its machines, but in its values. Today, however, the fabric of [Topic] seems to be fraying at the edges."</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-[10px] font-black uppercase text-[#d4af37]">The "Time" Hook:</h4>
            <p className="text-lg font-serif italic">"The clock is ticking, and the silence surrounding [Topic] is becoming deafening. It is no longer a distant concern; it is a current crisis."</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        {[
          {
            title: "Strategy 1: The Shocking Statistic",
            formula: "[Startling number] + [What it means] + [Why it matters]",
            example: "\"Six hours. That's how long the average teenager spends glued to a screen each day—time that could build skills, relationships, or dreams, now lost to infinite scrolling.\"",
            tip: "Always interpret the number. Don't just list it."
          },
          {
            title: "Strategy 2: The Provocative Question",
            formula: "Ask something that challenges assumptions or makes readers think",
            example: "\"What if everything we know about successful education is wrong? What if grades and rote memorization are creating an entire generation of skilled test-takers but poor thinkers?\"",
            tip: "The question should lead directly to your stance."
          },
          {
            title: "Strategy 3: The Vivid Scenario",
            formula: "Paint a picture that readers can see, feel, or smell",
            example: "\"Picture this: It's 7 AM in Delhi. A mother ties a pollution mask around her six-year-old's face before sending her to school. This isn't a scene from a dystopian novel—it's everyday reality.\"",
            tip: "Use sensory details (mask, cough, smog)."
          },
          {
            title: "Strategy 4: The Bold Contrast",
            formula: "The [Ideal State] vs The [Current Reality]",
            example: "\"We live in an age where we can reach the moon in days, yet it takes months for a single piece of legislation to protect our streets from potholes. This irony is the defining crisis of our modern infrastructure.\"",
            tip: "Great for highlighting government or civic failures."
          }
        ].map((item, i) => (
          <div key={i} className="bg-[#fdfbf7] border border-[#dccab1] shadow-xl overflow-hidden flex flex-col md:flex-row group hover:border-[#8b0000] transition-colors">
            <div className="md:w-1/3 bg-[#8b0000] p-10 text-white flex flex-col justify-center">
              <h3 className="text-xl font-bold uppercase tracking-tighter mb-4">{item.title}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-2">The Formula</p>
              <p className="text-sm italic text-[#f1ede4] mb-4">{item.formula}</p>
              <div className="bg-white/10 p-2 text-[9px] font-bold uppercase tracking-widest">
                TIP: {item.tip}
              </div>
            </div>
            <div className="md:w-2/3 p-10 bg-[#fdfbf7] flex flex-col justify-center">
              <div className="p-8 bg-[#f1ede4] border-l-4 border-[#2c1810] font-serif text-2xl leading-relaxed text-[#3d2b1f] italic shadow-inner">
                {item.example}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Module2_Introductions;
