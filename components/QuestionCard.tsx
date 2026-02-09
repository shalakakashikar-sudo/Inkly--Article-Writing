
import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onSelect: (q: Question) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(question)}
      className="bg-[#fdfbf7] p-6 border border-[#dccab1] shadow hover:shadow-lg transition-all cursor-pointer group flex flex-col h-full relative"
    >
      <div className="mb-4">
        <span className="text-[#8b4513] text-[9px] font-black uppercase tracking-widest border-b border-[#8b4513]/30">Practice #{question.id}</span>
      </div>
      
      <h3 className="text-[#2c1810] font-bold text-lg leading-snug mb-6 group-hover:text-[#8b0000] transition-colors font-serif italic">
        {question.questionText.length > 100 ? question.questionText.substring(0, 100) + "..." : question.questionText}
      </h3>

      <div className="flex flex-wrap gap-2 mt-auto">
        {question.cues.slice(0, 2).map((cue, idx) => (
          <span key={idx} className="bg-[#f1ede4] text-[#5d4037] text-[9px] px-2 py-1 border border-[#dccab1] font-bold uppercase tracking-tighter">
            {cue}
          </span>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 text-xl opacity-0 group-hover:opacity-100 transition-opacity">🖋️</div>
    </div>
  );
};

export default QuestionCard;
