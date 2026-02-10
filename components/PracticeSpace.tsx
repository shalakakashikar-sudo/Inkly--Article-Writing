
import React, { useState, useRef, useEffect } from 'react';
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
  techniquesDetected: {
    hasHook: boolean;
    hasByline: boolean;
    hasPEEL: boolean;
    hasHighMarkVocab: boolean;
  };
  strengths: string[];
  growthAreas: string[];
  suggestedRevision: string;
  revisionNotes: string;
}

const PracticeSpace: React.FC<PracticeSpaceProps> = ({ question, onBack }) => {
  const [userText, setUserText] = useState('');
  const [isReviewing, setIsReviewing] = useState(false);
  const [feedback, setFeedback] = useState<AIReviewFeedback | null>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const wordCount = userText.split(/\s+/).filter(x => x).length;

  useEffect(() => {
    if (feedback && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [feedback]);

  const handleReview = async () => {
    if (!userText.trim() || wordCount < 20) {
      alert("Please write at least 20 words so the examiner can provide meaningful feedback.");
      return;
    }

    setIsReviewing(true);
    setFeedback(null);

    try {
      // Re-initializing within the function ensures we pick up the latest process.env in various environments
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview', 
        contents: [
          {
            text: `You are an expert CBSE/NCERT English Examiner. Grade this student article based on the INKLY standards.
            
            INKLY CURRICULUM STANDARDS:
            1. Format (1M): Catchy Title and Byline (both centered).
            2. Hook: Intro must start with a Shocking Stat, Provocative Question, or Vivid Scenario.
            3. Body (2M): PEEL structure (Point, Evidence, Explanation, Link). 
            4. Expression (2M): Grammar and use of "High-Mark Verbs" (e.g., Ameliorate, Exacerbate, Paradigm Shift).
            
            Question: ${question.questionText}
            Cues that must be addressed: ${question.cues.join(', ')}
            
            Student's Article:
            "${userText}"
            
            Grading Instructions:
            - Be strict but constructive.
            - Total marks must be out of 5.
            - Detect if they used a Hook, Byline, PEEL, and High-Mark Vocab.
            - Provide a "Suggested Revision" for the intro paragraph.
            - Explain the reasoning in 'revisionNotes'.
            
            Return the response as a clean JSON object.`
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
              techniquesDetected: {
                type: Type.OBJECT,
                properties: {
                  hasHook: { type: Type.BOOLEAN },
                  hasByline: { type: Type.BOOLEAN },
                  hasPEEL: { type: Type.BOOLEAN },
                  hasHighMarkVocab: { type: Type.BOOLEAN }
                },
                required: ['hasHook', 'hasByline', 'hasPEEL', 'hasHighMarkVocab']
              },
              strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
              growthAreas: { type: Type.ARRAY, items: { type: Type.STRING } },
              suggestedRevision: { type: Type.STRING },
              revisionNotes: { type: Type.STRING }
            },
            required: ['marks', 'techniquesDetected', 'strengths', 'growthAreas', 'suggestedRevision', 'revisionNotes']
          }
        }
      });

      if (response.text) {
        // Safe parsing for deployment: remove any markdown formatting the model might add
        let cleanJson = response.text.trim();
        if (cleanJson.startsWith('```')) {
          cleanJson = cleanJson.replace(/^```json\s*|```$/g, '');
        }
        const result = JSON.parse(cleanJson);
        setFeedback(result);
      }
    } catch (error) {
      console.error("AI Review Error:", error);
      alert("The examiner's red pen ran out of ink! This usually means the API_KEY is missing in your Vercel environment variables or the connection timed out. Please check your settings.");
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
          <h2 className="text-4xl font-bold text-[#2c1810] italic">The Writing Lab</h2>
          <p className="text-[#8b4513] text-sm font-bold uppercase tracking-[0.3em] mt-1">Live Evaluation: Question #{question.id}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3 space-y-10">
          {/* Editor Area */}
          <div className="bg-[#fdfbf7] p-8 md:p-12 border border-[#dccab1] shadow-2xl relative rounded-sm">
             <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#2c1810]/10 pointer-events-none"></div>
             
             <div className="mb-10 p-8 bg-[#f1ede4] border-l-8 border-[#8b0000]">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8b4513] mb-4">Exam Prompt</h3>
               <div className="text-[#2c1810] font-serif text-2xl leading-relaxed italic">"{question.questionText}"</div>
             </div>

             <div className="flex flex-wrap gap-3 mb-10">
               {question.cues.map((c, i) => (
                 <span key={i} className="bg-white/50 border border-[#dccab1] text-[#8b4513] text-[10px] px-4 py-1.5 font-black uppercase tracking-widest shadow-sm">
                   {c}
                 </span>
               ))}
             </div>
             
             <textarea 
               value={userText}
               onChange={(e) => setUserText(e.target.value)}
               placeholder="HEADING (Centered)
By: [Your Name] (Centered)

Start with a powerful hook..."
               className="w-full h-[600px] p-12 bg-[#fdfbf7] border-2 border-[#dccab1] focus:border-[#2c1810] focus:outline-none text-[#2c1810] font-serif text-2xl leading-loose shadow-inner parchment-texture resize-none placeholder-[#8b4513]/20"
               disabled={isReviewing}
             />
             
             <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6">
               <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-4">
                   <div className={`w-5 h-5 rounded-full border border-[#2c1810]/20 ${wordCount >= 120 && wordCount <= 200 ? 'bg-green-600' : wordCount > 200 ? 'bg-red-600' : 'bg-yellow-600'}`}></div>
                   <span className="text-xl font-black text-[#2c1810] tracking-tighter uppercase">{wordCount} / 150 WORDS</span>
                 </div>
                 <p className="text-[10px] text-[#8b4513] font-bold uppercase italic tracking-widest">Ideal Exam Range: 120 - 150 words</p>
               </div>
               <button 
                  onClick={handleReview}
                  disabled={isReviewing}
                  className={`px-16 py-6 bg-[#2c1810] text-[#fdfbf7] font-black uppercase tracking-widest hover:bg-[#3d2b1f] transition-all shadow-xl text-xs active:translate-y-1 ${isReviewing ? 'opacity-50 cursor-wait' : ''}`}
                >
                 {isReviewing ? 'Examiner is reviewing...' : 'SUBMIT TO RED PEN'}
               </button>
             </div>
          </div>

          {/* Smarter Feedback Section */}
          {feedback && (
            <div ref={feedbackRef} className="bg-[#fdfbf7] border-4 border-[#2c1810] p-8 md:p-14 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 rounded-sm">
              <header className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 border-b-2 border-[#f1ede4] pb-10">
                <div className="text-center md:text-left">
                  <h3 className="text-5xl font-bold text-[#2c1810] italic">The Red Pen Verdict</h3>
                  <p className="text-[#8b4513] text-[12px] font-black uppercase tracking-[0.5em] mt-2">Official CBSE Pattern Evaluation</p>
                </div>
                <div className="text-center bg-[#f1ede4] border border-[#dccab1] px-6 py-4 min-w-[120px]">
                    <div className="text-4xl font-black text-[#2c1810]">{feedback.marks.total}<span className="text-lg opacity-40">/5</span></div>
                    <div className="text-[9px] font-black uppercase tracking-widest opacity-60">Final Grade</div>
                </div>
              </header>

              {/* Checklist UI */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                {[
                  { label: 'Hook Detected', value: feedback.techniquesDetected.hasHook },
                  { label: 'Centered Byline', value: feedback.techniquesDetected.hasByline },
                  { label: 'PEEL Structure', value: feedback.techniquesDetected.hasPEEL },
                  { label: 'Power Vocab', value: feedback.techniquesDetected.hasHighMarkVocab },
                ].map((tech, i) => (
                  <div key={i} className={`p-4 border-2 flex flex-col items-center justify-center gap-2 ${tech.value ? 'bg-green-50 border-green-600/30 text-green-800' : 'bg-red-50 border-red-600/30 text-red-800'}`}>
                    <span className="text-2xl font-bold">{tech.value ? '✓' : '✗'}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-center leading-tight">{tech.label}</span>
                  </div>
                ))}
              </div>

              {/* Scoring Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="p-8 bg-[#f1ede4] text-center border border-[#dccab1]">
                  <h5 className="text-[10px] font-black uppercase text-[#8b4513] mb-4 tracking-[0.2em]">Format</h5>
                  <div className="text-4xl font-bold text-[#2c1810]">{feedback.marks.format}<span className="text-sm opacity-40">/1</span></div>
                </div>
                <div className="p-8 bg-[#f1ede4] text-center border border-[#dccab1]">
                  <h5 className="text-[10px] font-black uppercase text-[#8b4513] mb-4 tracking-[0.2em]">Content</h5>
                  <div className="text-4xl font-bold text-[#2c1810]">{feedback.marks.content}<span className="text-sm opacity-40">/2</span></div>
                </div>
                <div className="p-8 bg-[#f1ede4] text-center border border-[#dccab1]">
                  <h5 className="text-[10px] font-black uppercase text-[#8b4513] mb-4 tracking-[0.2em]">Expression</h5>
                  <div className="text-4xl font-bold text-[#2c1810]">{feedback.marks.expression}<span className="text-sm opacity-40">/2</span></div>
                </div>
              </div>

              {/* Categorized Comments */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                <div className="space-y-8">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#2c1810] border-b-2 border-[#2c1810] pb-2">The Inkly Edge (Strengths)</h4>
                  <ul className="space-y-6">
                    {feedback.strengths.map((str, i) => (
                      <li key={i} className="flex gap-4 items-start text-lg font-serif italic text-green-900 bg-green-500/5 p-4 rounded-sm">
                        <span className="text-green-600 font-black">✓</span>
                        {str}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-8">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#8b0000] border-b-2 border-[#8b0000] pb-2">Growth Areas (Next Time)</h4>
                  <ul className="space-y-6">
                    {feedback.growthAreas.map((area, i) => (
                      <li key={i} className="flex gap-4 items-start text-lg font-serif italic text-red-900 bg-red-500/5 p-4 rounded-sm">
                        <span className="text-red-600 font-black">!</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Revision Comparison */}
              <div className="space-y-12">
                <div className="p-10 md:p-14 bg-[#2c1810] text-white shadow-2xl relative overflow-hidden rounded-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 -mr-16 -mt-16 rounded-full"></div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#d4af37] mb-8 italic">Pedagogical Revision (Intro Focus)</h4>
                  <div className="text-2xl font-serif italic leading-relaxed text-[#fdfbf7]">
                    "{feedback.suggestedRevision}"
                  </div>
                  <div className="mt-12 p-6 bg-white/5 border border-white/10 italic text-sm text-[#dccab1]">
                    <span className="block text-[9px] font-black uppercase text-[#d4af37] mb-2">Examiner's Note: Why this works</span>
                    {feedback.revisionNotes}
                  </div>
                </div>
              </div>

              <div className="mt-20 text-center">
                  <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-[10px] font-black uppercase tracking-[0.4em] border-b-2 border-[#2c1810] pb-1 text-[#2c1810] hover:text-[#8b0000] hover:border-[#8b0000] transition-colors">
                    Back to Top to Edit & Re-submit
                  </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Tips */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-[#fdfbf7] p-8 border border-[#dccab1] shadow-xl sticky top-28 rounded-sm">
            <h3 className="font-bold text-[#2c1810] mb-8 uppercase tracking-widest border-b border-[#dccab1] pb-4 flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              Pro Checklist
            </h3>
            
            <ul className="space-y-8">
              {[
                { title: 'The Hook', desc: 'Is your first line a shocker or a question?' },
                { title: 'The Byline', desc: 'Centered below title? e.g. By: Rahul, XII' },
                { title: 'Power Verbs', desc: 'Used "exacerbate" or "paradigm shift"?' },
                { title: 'Paragraphs', desc: 'Exactly 3-4 distinct paragraphs?' },
                { title: 'The Loop', desc: 'Does the ending refer back to the intro?' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start group">
                  <div className="mt-1 h-5 w-5 border-2 border-[#dccab1] group-hover:border-[#8b0000] transition-colors flex-shrink-0"></div>
                  <div>
                    <h4 className="text-[10px] font-black text-[#2c1810] uppercase tracking-widest">{item.title}</h4>
                    <p className="text-xs text-[#8b4513] font-serif italic mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-[#f1ede4] border-l-4 border-[#2c1810]">
                <h4 className="text-[9px] font-black uppercase text-[#2c1810] mb-2">Vocabulary Tip</h4>
                <p className="text-[11px] font-serif italic leading-relaxed text-[#5d4037]">Swap "Big problem" with <b>"Multifaceted systemic challenge"</b> to instantly boost Expression marks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeSpace;
