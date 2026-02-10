
import React, { useState } from 'react';
import { Question } from '../types';
import { GoogleGenAI, Type } from "@google/genai";

interface PracticeSpaceProps {
  question: Question;
  onBack: () => void;
}

interface AIReviewFeedback {
  marks: {
    format: number;
    content: number;
    expression: number;
    total: number;
  };
  comments: string[];
  suggestedRevision: string;
}

const PracticeSpace: React.FC<PracticeSpaceProps> = ({ question, onBack }) => {
  const [userText, setUserText] = useState('');
  const [isReviewing, setIsReviewing] = useState(false);
  const [feedback, setFeedback] = useState<AIReviewFeedback | null>(null);

  const wordCount = userText.split(/\s+/).filter(x => x).length;

  const handleReview = async () => {
    if (!userText.trim() || wordCount < 10) {
      alert("Please write a bit more before submitting for review.");
      return;
    }

    setIsReviewing(true);
    setFeedback(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [
          {
            text: `You are an expert CBSE/NCERT English Examiner. Grade the following article written by a student. 
            The maximum marks are 5.
            
            Question: ${question.questionText}
            Cues that should be addressed: ${question.cues.join(', ')}
            
            Student's Article:
            "${userText}"
            
            Strict Grading Scheme (Total 5M):
            - Format (1M): Title and Byline? (0.5 each)
            - Content (2M): Depth, logic, addressing cues?
            - Expression (2M): Grammar, vocabulary, flow, coherence, 3-4 paragraphs?
            
            Return the result in JSON format.`
          }
        ],
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              marks: {
                type: Type.OBJECT,
                properties: {
                  format: { type: Type.NUMBER },
                  content: { type: Type.NUMBER },
                  expression: { type: Type.NUMBER },
                  total: { type: Type.NUMBER }
                },
                required: ['format', 'content', 'expression', 'total']
              },
              comments: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              suggestedRevision: {
                type: Type.STRING
              }
            },
            required: ['marks', 'comments', 'suggestedRevision']
          }
        }
      });

      if (response.text) {
        const result = JSON.parse(response.text);
        setFeedback(result);
      }
    } catch (error) {
      console.error("AI Review failed:", error);
      alert("The examiner's red pen ran out of ink! Please try again later.");
    } finally {
      setIsReviewing(false);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto space-y-12 animate-in fade-in duration-700 mb-32 px-6">
      <div className="flex items-center gap-8 mb-10">
        <button 
          onClick={onBack}
          className="bg-transparent border-2 border-[#2c1810] p-3 hover:bg-[#2c1810] hover:text-[#fdfbf7] transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h2 className="text-4xl font-bold text-[#2c1810] italic">Writing Practice</h2>
          <p className="text-[#8b4513] text-sm font-bold uppercase tracking-[0.3em] mt-1">Question Set #{question.id}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Editor Area */}
        <div className="lg:col-span-3 space-y-10">
          <div className="bg-[#fdfbf7] p-12 border border-[#dccab1] shadow-2xl relative">
             <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#2c1810]/20 pointer-events-none"></div>
             
             <div className="mb-10 p-8 bg-[#f1ede4] border-l-8 border-[#8b0000]">
               <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-[#8b4513] mb-4">The Question</h3>
               <div className="text-[#2c1810] font-serif text-2xl leading-relaxed italic">"{question.questionText}"</div>
             </div>

             <div className="flex flex-wrap gap-3 mb-10">
               {question.cues.map((c, i) => (
                 <span key={i} className="bg-transparent border border-[#dccab1] text-[#8b4513] text-xs px-4 py-1.5 font-black uppercase tracking-widest">
                   {c}
                 </span>
               ))}
             </div>
             
             <textarea 
               value={userText}
               onChange={(e) => setUserText(e.target.value)}
               placeholder="Draft your article here... Start with a centered Title and Byline."
               className="w-full h-[600px] p-12 bg-[#fdfbf7] border-2 border-[#dccab1] focus:border-[#2c1810] focus:outline-none text-[#2c1810] font-serif text-2xl leading-loose shadow-inner parchment-texture resize-none"
               disabled={isReviewing}
             />
             
             <div className="flex justify-between items-center mt-10">
               <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-4">
                   <div className={`w-5 h-5 rounded-full border border-[#2c1810]/20 ${wordCount >= 120 && wordCount <= 200 ? 'bg-[#228b22]' : wordCount > 200 ? 'bg-[#8b0000]' : 'bg-[#b8860b]'}`}></div>
                   <span className="text-lg font-black text-[#2c1810] tracking-widest uppercase">{wordCount} WORDS</span>
                 </div>
                 <p className="text-xs text-[#8b4513] font-bold uppercase italic tracking-widest">Target: 120-150 (Practice range: up to 200)</p>
               </div>
               <button 
                  onClick={handleReview}
                  disabled={isReviewing}
                  className={`px-12 py-5 bg-[#8b0000] text-[#fdfbf7] font-bold uppercase tracking-widest hover:bg-[#a00000] transition-all shadow-lg text-sm ${isReviewing ? 'opacity-50' : ''}`}
                >
                 {isReviewing ? 'Examiner is Reading...' : 'Use Red Pen'}
               </button>
             </div>
          </div>

          {/* Feedback Section */}
          {feedback && (
            <div className="bg-white border-2 border-[#2c1810] p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex justify-between items-start mb-12 border-b-2 border-[#f1ede4] pb-8">
                <div>
                  <h3 className="text-4xl font-bold text-[#2c1810] italic">The Red Pen Review</h3>
                  <p className="text-[#8b4513] text-[12px] font-black uppercase tracking-widest mt-1">Official Script Evaluation</p>
                </div>
                <div className="text-center bg-[#8b0000] text-white px-8 py-3 rounded-sm shadow-xl">
                  <div className="text-5xl font-black">{feedback.marks.total}/5</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em]">Marks Secured</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="p-8 border border-[#dccab1] bg-[#fdfbf7] text-center">
                  <h5 className="text-[12px] font-black uppercase text-[#8b4513] mb-3">Format</h5>
                  <div className="text-3xl font-bold">{feedback.marks.format}/1</div>
                </div>
                <div className="p-8 border border-[#dccab1] bg-[#fdfbf7] text-center">
                  <h5 className="text-[12px] font-black uppercase text-[#8b4513] mb-3">Content</h5>
                  <div className="text-3xl font-bold">{feedback.marks.content}/2</div>
                </div>
                <div className="p-8 border border-[#dccab1] bg-[#fdfbf7] text-center">
                  <h5 className="text-[12px] font-black uppercase text-[#8b4513] mb-3">Expression</h5>
                  <div className="text-3xl font-bold">{feedback.marks.expression}/2</div>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h4 className="text-[13px] font-black uppercase tracking-[0.4em] text-[#2c1810] mb-8 flex items-center gap-4">
                    <span className="w-12 h-[2px] bg-[#8b0000]"></span>
                    Critical Comments
                  </h4>
                  <ul className="space-y-6">
                    {feedback.comments.map((comment, i) => (
                      <li key={i} className="flex gap-5 items-start text-xl font-serif italic text-[#3d2b1f]">
                        <span className="text-[#8b0000] font-black text-3xl">•</span>
                        {comment}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-12 bg-[#2c1810] text-[#fdfbf7] relative">
                  <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#d4af37]/40 -mr-3 -mt-3"></div>
                  <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-[#d4af37] mb-8">Master Suggestion</h4>
                  <p className="text-2xl font-serif italic leading-relaxed text-[#fdfbf7]/90 italic">
                    "{feedback.suggestedRevision}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Writing Tips Sidebar */}
        <div className="lg:col-span-1 space-y-10">
          <div className="bg-[#fdfbf7] p-10 border border-[#dccab1] shadow-xl h-fit sticky top-28">
            <h3 className="flex items-center gap-4 font-bold text-[#2c1810] mb-10 uppercase tracking-widest border-b border-[#dccab1] pb-6">
              <span className="text-3xl">🖋️</span>
              Writing Checklist
            </h3>
            
            <ul className="space-y-8">
              {[
                { title: 'Headline (5-10 words)', desc: 'Is it Journalistic and centered?' },
                { title: 'Byline', desc: 'Is the name from the question centered below?' },
                { title: 'The Hook', desc: 'Is it a statistic, question, or scenario?' },
                { title: 'PEEL Structure', desc: 'Point → Evidence → Explanation → Link?' },
                { title: 'Full-Circle Return', desc: 'Does the ending link back to the hook?' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-5 items-start group">
                  <div className="mt-1.5 h-6 w-6 border-2 border-[#dccab1] group-hover:border-[#8b0000] transition-colors flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sm font-black text-[#2c1810] uppercase tracking-widest">{item.title}</h4>
                    <p className="text-xs text-[#8b4513] font-serif italic mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeSpace;
