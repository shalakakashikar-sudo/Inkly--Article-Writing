
import React from 'react';
import ArticleLayoutInfographic from './ArticleLayoutInfographic';

const ModuleAnatomy: React.FC = () => {
  return (
    <div className="space-y-16 animate-in fade-in duration-500 pb-10">
      <ArticleLayoutInfographic />
      
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        <div className="bg-white p-10 border border-[#dccab1] shadow-xl">
          <h3 className="text-3xl font-bold text-[#2c1810] mb-8 border-b-2 border-[#dccab1] pb-4 italic">Understanding the Format</h3>
          <p className="text-xl text-[#5d4037] mb-8 leading-relaxed">The format is the easiest way to secure 1 mark. It consists of two main parts:</p>
          
          <div className="space-y-8">
            <div className="p-8 border-l-8 border-[#8b0000] bg-[#fdfbf7]">
              <h4 className="font-bold text-[#2c1810] uppercase text-lg mb-4">1. Heading / Title</h4>
              <p className="text-lg text-[#3d2b1f]">The heading must be relevant to the topic and centered at the top of the page. It should be brief and grab the reader's attention.</p>
            </div>
            
            <div className="p-8 border-l-8 border-[#2c1810] bg-[#fdfbf7]">
              <h4 className="font-bold text-[#2c1810] uppercase text-lg mb-4">2. Byline (Centered)</h4>
              <p className="text-lg text-[#3d2b1f]">The byline refers to the name of the person writing the article. Use the name given in the question (e.g., Rahul/Radhika). It must be centered directly below the heading.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#2c1810] p-10 text-white shadow-2xl">
          <h4 className="text-2xl font-bold mb-6 text-[#d4af37]">Common Mistake Alert!</h4>
          <p className="text-xl leading-relaxed">Students often place the byline at the end of the article or aligned to the right. To follow the latest standard, always center it below the title.</p>
        </div>
      </div>
    </div>
  );
};

export default ModuleAnatomy;
