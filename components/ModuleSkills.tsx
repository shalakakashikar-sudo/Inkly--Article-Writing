
import React from 'react';

const ModuleSkills: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in duration-500 px-4 pb-20">
      <div className="text-center py-12">
        <h2 className="text-5xl font-bold text-[#2c1810] italic">Vocabulary & Skills</h2>
        <p className="text-2xl text-[#8b4513] mt-4 font-serif italic">Polishing your language for the examiner.</p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        <div className="bg-white p-10 border border-[#dccab1] shadow-xl">
          <h3 className="text-2xl font-bold text-[#2c1810] mb-8 uppercase border-b-2 border-[#dccab1] pb-4">Standard Vocabulary</h3>
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold text-[#8b0000] uppercase tracking-widest mb-3">To Describe Problems:</p>
              <p className="text-2xl font-serif italic text-[#3d2b1f] leading-relaxed">Alarming rise, grave concern, widespread issue, deteriorating situation, multifaceted problem.</p>
            </div>
            <div>
              <p className="text-sm font-bold text-[#8b0000] uppercase tracking-widest mb-3">To Suggest Actions:</p>
              <p className="text-2xl font-serif italic text-[#3d2b1f] leading-relaxed">Remedial measures, urgent need, collective effort, implementation, sensitization.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2c1810] p-10 shadow-2xl text-white">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-8 uppercase tracking-widest">Common Mistakes</h3>
          <ul className="space-y-6 text-xl">
            <li className="flex gap-4 items-start">
              <span className="text-red-400 font-bold text-2xl flex-shrink-0">✘</span> 
              <span>Writing the whole article as one big paragraph. (Always use 3-4 paragraphs)</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-red-400 font-bold text-2xl flex-shrink-0">✘</span> 
              <span>Using your real name if a name is provided in the question.</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-red-400 font-bold text-2xl flex-shrink-0">✘</span> 
              <span>Using slang or SMS language like 'u' or 'bcuz'.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModuleSkills;
