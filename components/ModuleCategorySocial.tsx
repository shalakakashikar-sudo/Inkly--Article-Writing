
import React from 'react';

const ModuleCategorySocial: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in duration-500 px-4 pb-20">
      <div className="text-center py-12">
        <h2 className="text-5xl font-bold text-[#2c1810] italic">Social Issues Guide</h2>
        <p className="text-2xl text-[#8b4513] mt-4 font-serif italic">Addressing the problems within our community.</p>
      </div>

      <div className="space-y-10">
        <div className="bg-white p-10 border border-[#dccab1] shadow-xl">
          <h3 className="text-2xl font-bold text-[#8b0000] mb-6 flex items-center gap-3">
            <span className="text-4xl">🌍</span> Common Social Topics
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl">
            <li className="p-4 bg-[#fdfbf7] border border-[#dccab1]">• Road Safety & Accidents</li>
            <li className="p-4 bg-[#fdfbf7] border border-[#dccab1]">• Elder Abuse in Families</li>
            <li className="p-4 bg-[#fdfbf7] border border-[#dccab1]">• Social Media Addiction</li>
            <li className="p-4 bg-[#fdfbf7] border border-[#dccab1]">• Women Safety</li>
          </ul>
        </div>

        <div className="bg-[#f1ede4] p-10 border-2 border-[#dccab1]">
          <h3 className="text-2xl font-bold text-[#2c1810] mb-6 uppercase tracking-widest">Key Cues to Use</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 shadow-sm">
              <h4 className="font-bold text-[#8b4513] mb-2 uppercase text-sm">Causes</h4>
              <p className="text-lg">Generation gap, lack of traffic discipline, FOMO (Fear of Missing Out), societal attitudes.</p>
            </div>
            <div className="bg-white p-6 shadow-sm">
              <h4 className="font-bold text-[#8b4513] mb-2 uppercase text-sm">Solutions</h4>
              <p className="text-lg">Awareness campaigns, strict enforcement of laws, strengthening family bonds, parental guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCategorySocial;
