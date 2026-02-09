
import React from 'react';

const ModuleCategories: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500 px-4 pb-20">
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold text-[#2c1810] italic">Category Cheat Sheets</h2>
        <p className="text-[#8b4513] mt-2 font-serif italic">Quick reference for the most common topics.</p>
      </div>

      <div className="space-y-8">
        {/* Social Issues */}
        <div className="bg-[#fdfbf7] p-8 border-2 border-[#dccab1]">
          <h3 className="text-2xl font-bold text-[#8b0000] mb-4 flex items-center gap-2">
            <span>🌍</span> Social Issues
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-xs uppercase mb-2 text-[#2c1810]">Common Cues</h4>
              <ul className="text-xs space-y-1 text-[#5d4037]">
                <li>• Nuclear family structure / Generation gap</li>
                <li>• Peer pressure / Social media addiction</li>
                <li>• Financial dependence of elders</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase mb-2 text-[#2c1810]">Hack Lines</h4>
              <p className="text-xs italic text-[#3d2b1f]">"Society is a reflection of our collective values. When we neglect the vulnerable, we fail as a community."</p>
            </div>
          </div>
        </div>

        {/* Environmental */}
        <div className="bg-[#fdfbf7] p-8 border-2 border-[#dccab1]">
          <h3 className="text-2xl font-bold text-[#228b22] mb-4 flex items-center gap-2">
            <span>🍃</span> Environmental Issues
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-xs uppercase mb-2 text-[#2c1810]">Common Cues</h4>
              <ul className="text-xs space-y-1 text-[#5d4037]">
                <li>• Single-use plastics / Ocean contamination</li>
                <li>• Depleting groundwater levels</li>
                <li>• Loss of green cover / Rapid urbanization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase mb-2 text-[#2c1810]">Hack Lines</h4>
              <p className="text-xs italic text-[#3d2b1f]">"Nature does not need us; we need nature. Sustainability is not a choice but a necessity for survival."</p>
            </div>
          </div>
        </div>

        {/* Technology */}
        <div className="bg-[#fdfbf7] p-8 border-2 border-[#dccab1]">
          <h3 className="text-2xl font-bold text-[#2c1810] mb-4 flex items-center gap-2">
            <span>🤖</span> Technology & Modern Life
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-xs uppercase mb-2 text-[#2c1810]">Common Cues</h4>
              <ul className="text-xs space-y-1 text-[#5d4037]">
                <li>• Artificial Intelligence / Automation</li>
                <li>• Cashless economy / Digital divide</li>
                <li>• Cybersecurity / Online fraud</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase mb-2 text-[#2c1810]">Hack Lines</h4>
              <p className="text-xs italic text-[#3d2b1f]">"Technology is a useful servant but a dangerous master. Balance is the key to digital well-being."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCategories;
