
import React from 'react';

const Module2_Introductions: React.FC = () => {
  return (
    <div className="space-y-20 animate-in fade-in duration-700 pb-20">
      <header className="text-center max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold text-[#2c1810] mb-6 italic">Mastering the Hook</h2>
        <p className="text-2xl text-[#5d4037] leading-relaxed italic">The first paragraph is where you win or lose your reader. Stop saying "Pollution is a big problem" and start showing why it matters.</p>
      </header>

      <div className="max-w-5xl mx-auto space-y-16">
        {[
          {
            title: "Strategy 1: The Shocking Statistic",
            formula: "[Startling number] + [What it means] + [Why it matters]",
            example: "\"Six hours. That's how long the average teenager spends glued to a screen each day—time that could build skills, relationships, or dreams, now lost to infinite scrolling.\""
          },
          {
            title: "Strategy 2: The Provocative Question",
            formula: "Ask something that challenges assumptions or makes readers think",
            example: "\"What if everything we know about successful education is wrong? What if grades and rote memorization are creating an entire generation of skilled test-takers but poor thinkers?\""
          },
          {
            title: "Strategy 3: The Vivid Scenario",
            formula: "Paint a picture that readers can see, feel, or smell",
            example: "\"Picture this: It's 7 AM in Delhi. A mother ties a pollution mask around her six-year-old's face before sending her to school. This isn't a scene from a dystopian novel—it's everyday reality.\""
          },
          {
            title: "Strategy 4: The Bold Declaration",
            formula: "Make a strong, controversial statement that demands attention",
            example: "\"Homework doesn't make students smarter—it makes them stressed, sleep-deprived, and resentful of learning. It's time we abolish this antiquated burden.\""
          }
        ].map((item, i) => (
          <div key={i} className="bg-white border border-[#dccab1] shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-[#8b0000] p-10 text-white flex flex-col justify-center">
              <h3 className="text-xl font-bold uppercase tracking-tighter mb-4">{item.title}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-2">The Formula</p>
              <p className="text-sm italic text-[#f1ede4]">{item.formula}</p>
            </div>
            <div className="md:w-2/3 p-10 bg-white flex flex-col justify-center">
              <div className="p-8 bg-[#fdfbf7] border-l-4 border-[#2c1810] font-serif text-2xl leading-relaxed text-[#3d2b1f] italic shadow-inner">
                {item.example}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#2c1810] p-16 text-white max-w-5xl mx-auto shadow-2xl relative">
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-white/10 -mr-4 -mt-4"></div>
        <h3 className="text-4xl font-bold mb-10 text-[#d4af37] italic">Avoid the 'Student Trap'</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 border border-red-500/20 bg-red-500/5">
            <h4 className="text-sm font-black uppercase text-red-500 mb-4">The Cliché (✗)</h4>
            <p className="text-lg italic font-serif text-[#dccab1]">"In today's modern world, technology plays a vital role. Pollution is a big problem affecting everyone..."</p>
            <p className="mt-4 text-xs text-red-400 font-bold uppercase tracking-widest">— Boring & Generic</p>
          </div>
          <div className="p-8 border border-green-500/20 bg-green-500/5">
            <h4 className="text-sm font-black uppercase text-green-500 mb-4">The Impact (✓)</h4>
            <p className="text-lg italic font-serif text-[#fdfbf7]">"The screen in your palm is more powerful than the computer that sent humans to the moon—yet we use it to scroll through memes while life passes us by."</p>
            <p className="mt-4 text-xs text-green-400 font-bold uppercase tracking-widest">— Engaging & Relevant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module2_Introductions;
