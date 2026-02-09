
import React from 'react';

const ModuleWritingProcess: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in duration-500 px-4 pb-20">
      <div className="text-center py-12">
        <h2 className="text-5xl font-bold text-[#2c1810] italic">Writing the Article</h2>
        <p className="text-2xl text-[#8b4513] mt-4 font-serif italic">Step-by-step guidance for each paragraph.</p>
      </div>

      {/* Step 1 */}
      <div className="bg-white p-10 border border-[#dccab1] shadow-lg relative">
        <span className="absolute -top-6 -left-6 w-14 h-14 bg-[#2c1810] text-white flex items-center justify-center font-bold text-2xl border-2 border-[#dccab1]">1</span>
        <h3 className="text-2xl font-bold text-[#2c1810] mb-6 uppercase tracking-wider">The Introduction</h3>
        <p className="text-xl text-[#3d2b1f] mb-8 leading-relaxed">Open your article by introducing the topic clearly. Mention why it is important to discuss this issue right now. You can start with a general observation or a question.</p>
        <div className="bg-[#f1ede4] p-8 border-l-8 border-[#8b0000] font-serif italic text-xl text-[#5d4037] leading-relaxed">
          "In recent years, the alarming rise in road accidents has become a major concern for city dwellers. With thousands of lives lost annually, it is time we examine why our roads have become so dangerous..."
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-white p-10 border border-[#dccab1] shadow-lg relative">
        <span className="absolute -top-6 -left-6 w-14 h-14 bg-[#2c1810] text-white flex items-center justify-center font-bold text-2xl border-2 border-[#dccab1]">2</span>
        <h3 className="text-2xl font-bold text-[#2c1810] mb-6 uppercase tracking-wider">Body Paragraphs (The Core)</h3>
        <p className="text-xl text-[#3d2b1f] mb-6 leading-relaxed">Divide your body into two clear sections to ensure logical flow:</p>
        <div className="grid grid-cols-1 gap-8">
          <div className="p-8 border border-[#dccab1] bg-[#fdfbf7] shadow-inner">
            <h4 className="font-bold text-[#8b0000] text-lg mb-4 uppercase">Part A: Causes & Effects</h4>
            <p className="text-lg text-[#5d4037] leading-relaxed">Explain the 'Why' and 'What'. For example, talk about mobile phone use while driving (cause) and the resulting injuries (effect).</p>
          </div>
          <div className="p-8 border border-[#dccab1] bg-[#fdfbf7] shadow-inner">
            <h4 className="font-bold text-[#228b22] text-lg mb-4 uppercase">Part B: Remedial Measures</h4>
            <p className="text-lg text-[#5d4037] leading-relaxed">Suggest practical solutions. Mention government actions like stricter fines and individual efforts like following traffic rules.</p>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-white p-10 border border-[#dccab1] shadow-lg relative">
        <span className="absolute -top-6 -left-6 w-14 h-14 bg-[#2c1810] text-white flex items-center justify-center font-bold text-2xl border-2 border-[#dccab1]">3</span>
        <h3 className="text-2xl font-bold text-[#2c1810] mb-6 uppercase tracking-wider">The Conclusion</h3>
        <p className="text-xl text-[#3d2b1f] mb-8 leading-relaxed">End with a strong final message. Summarize your main points and offer a call to action or a positive vision for the future.</p>
        <div className="bg-[#f1ede4] p-8 border-l-8 border-[#2c1810] font-serif italic text-xl text-[#5d4037] leading-relaxed">
          "Safety is not just a government responsibility; it starts with us. By practicing discipline today, we can ensure a safer tomorrow for everyone."
        </div>
      </div>
    </div>
  );
};

export default ModuleWritingProcess;
