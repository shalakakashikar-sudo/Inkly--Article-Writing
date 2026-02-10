
import React, { useState } from 'react';
import { View, Question, LearningModule } from './types';
import { QUESTION_SETS } from './constants';
import QuestionCard from './components/QuestionCard';
import PracticeSpace from './components/PracticeSpace';

import Module1_Format from './components/Module1_Format';
import Module2_Introductions from './components/Module2_Introductions';
import Module3_Body from './components/Module3_Body';
import Module4_Conclusions from './components/Module4_Conclusions';
import Module5_Categories from './components/Module5_Categories';
import Module6_AdvancedSkills from './components/Module6_AdvancedSkills';
import Module7_MarkingScheme from './components/Module7_MarkingScheme';
import Module8_Strategy from './components/Module8_Strategy';

const FeatherIcon = ({ size = "w-6 h-6" }: { size?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={size} xmlns="http://www.w3.org/2000/svg">
    <path d="M21 2c-1.5 0-3.5.7-5.5 2.5s-4.5 6.5-6.5 10.5c-1 2-2 4-3.5 5.5-1.5 1.5-2.5 2-3.5 2-0.5 0-1-.2-1.3-0.7c-0.3-0.5-0.4-1.2-0.2-2c0.2-1 0.8-2.5 2.5-4.5 1.5-1.8 3.5-3.2 5.5-4.2s4-1.5 6-1.5c1.5 0 3 0.5 4 1.5c0.6 0.6 0.6 1.5 0 2.1c-0.6 0.6-1.5 0.6-2.1 0c-0.6-0.6-1.5-1.1-2.9-1.1-1.5 0-3 0.5-4.5 1.5-1.5 1-3 2.5-4.5 4.5-0.8 1-1.5 2.5-1.5 3.5s0.5 1.5 1 1.5c0.8 0 1.8-0.8 3-2.5 1.2-1.7 2.2-3.8 3.5-6 2-3.5 4.5-7.5 7-9.5s4-2.5 5.5-2.5h1z" />
  </svg>
);

const MODULES: LearningModule[] = [
  { id: '1', title: 'Format & Logic', category: 'foundation', description: 'Article vs Essay: The 1-Mark Win.', icon: '📐' },
  { id: '2', title: '6 Golden Hooks', category: 'foundation', description: 'Statistic, Question, and Bold Hooks.', icon: '🪝' },
  { id: '3', title: 'The 3-Tier Body', category: 'foundation', description: 'Claim → Evidence → Impact formula.', icon: '🏗️' },
  { id: '4', title: 'Full-Circle Exit', category: 'foundation', description: 'Impactful, lasting impressions.', icon: '🏁' },
  { id: '5', title: 'The Mastery Bank', category: 'category', description: 'Cheat sheets for 7 core exam themes.', icon: '📂' },
  { id: '6', title: 'Stylistic Edge', category: 'skill', description: 'Sentence Rhythm & Power Verbs.', icon: '✨' },
  { id: '7', title: 'Scoring Secrets', category: 'skill', description: 'NCERT Rules & Penalty Checklist.', icon: '💯' },
  { id: '8', title: 'The 12-Min Blitz', category: 'reference', description: 'High-speed exam execution.', icon: '⏱️' },
];

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('home');
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (view: View, extra?: string) => {
    setActiveView(view);
    if (view === 'module-detail' && extra) setSelectedModuleId(extra);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartPractice = (q: Question) => {
    setSelectedQuestion(q);
    setActiveView('practice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderModuleContent = () => {
    switch (selectedModuleId) {
      case '1': return <Module1_Format />;
      case '2': return <Module2_Introductions />;
      case '3': return <Module3_Body />;
      case '4': return <Module4_Conclusions />;
      case '5': return <Module5_Categories />;
      case '6': return <Module6_AdvancedSkills />;
      case '7': return <Module7_MarkingScheme />;
      case '8': return <Module8_Strategy />;
      default: return null;
    }
  };

  const renderContent = () => {
    if (activeView === 'practice' && selectedQuestion) {
      return <PracticeSpace question={selectedQuestion} onBack={() => navigateTo('library')} />;
    }

    if (activeView === 'module-detail') {
      const currentIndex = MODULES.findIndex(m => m.id === selectedModuleId);
      return (
        <div className="animate-in fade-in duration-500 pb-20">
          <div className="max-w-[1440px] mx-auto px-6">
            <button onClick={() => navigateTo('lessons')} className="text-sm font-bold text-[#8b4513] hover:text-[#2c1810] flex items-center gap-2 mb-8 uppercase tracking-widest">
              &larr; Back to Curriculum
            </button>
            {renderModuleContent()}
            <div className="flex justify-between items-center mt-16 border-t border-[#dccab1] pt-8 max-w-7xl mx-auto">
              <button disabled={currentIndex === 0} onClick={() => {
                 const prev = MODULES[currentIndex-1];
                 if (prev) navigateTo('module-detail', prev.id);
              }} className={`flex items-center gap-2 group ${currentIndex === 0 ? 'opacity-20' : 'cursor-pointer'}`}>
                <span className="text-2xl">&larr;</span>
                <div className="text-left">
                  <span className="block text-[10px] font-black uppercase text-[#8b4513]">Previous</span>
                  <span className="font-bold text-sm text-[#2c1810]">{currentIndex > 0 ? MODULES[currentIndex-1].title : 'Start'}</span>
                </div>
              </button>
              <button disabled={currentIndex === MODULES.length - 1} onClick={() => {
                const next = MODULES[currentIndex+1];
                if (next) navigateTo('module-detail', next.id);
              }} className={`flex items-center gap-2 group text-right ${currentIndex === MODULES.length - 1 ? 'opacity-20' : 'cursor-pointer'}`}>
                <div className="text-right">
                  <span className="block text-[10px] font-black uppercase text-[#8b4513]">Next</span>
                  <span className="font-bold text-sm text-[#2c1810]">{currentIndex < MODULES.length-1 ? MODULES[currentIndex+1].title : 'End'}</span>
                </div>
                <span className="text-2xl">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    switch (activeView) {
      case 'home':
        return (
          <div className="h-[calc(100vh-64px-32px)] flex items-center justify-center overflow-hidden">
            <section className="text-center px-4 max-w-6xl mx-auto -mt-12 animate-in fade-in zoom-in duration-1000">
              <h1 className="text-8xl md:text-[10rem] font-bold text-[#2c1810] mb-6 leading-none italic tracking-tighter">
                Inkly<span className="text-[#8b0000]">.</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#5d4037] mb-12 leading-relaxed font-serif italic max-w-3xl mx-auto">
                Step-by-step mastery for the perfect 5/5. High-impact vocabulary, time-blitz strategies, and exhaustive cheatsheets.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={() => navigateTo('lessons')} className="px-12 py-4 bg-[#2c1810] text-[#fdfbf7] font-bold text-lg hover:bg-[#3d2b1f] transition-all border border-[#2c1810] shadow-xl">
                  STUDY MODULES
                </button>
                <button onClick={() => navigateTo('library')} className="px-12 py-4 bg-transparent text-[#2c1810] border-2 border-[#2c1810] font-bold text-lg hover:bg-[#2c1810] hover:text-[#fdfbf7] transition-all">
                  PRACTICE SETS
                </button>
              </div>
            </section>
          </div>
        );

      case 'lessons':
        return (
          <div className="animate-in fade-in duration-500 pb-20 px-6">
            <div className="max-w-[1440px] mx-auto">
              <h2 className="text-4xl font-bold text-center text-[#2c1810] mb-2 italic">Curriculum</h2>
              <p className="text-center text-lg text-[#8b4513] mb-12 font-serif italic">From Foundations to Exam Mastery.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {MODULES.map((mod) => (
                  <div key={mod.id} onClick={() => navigateTo('module-detail', mod.id)} className="bg-[#fdfbf7] p-8 border border-[#dccab1] shadow hover:border-[#8b0000] hover:-translate-y-1 transition-all cursor-pointer group">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl group-hover:scale-110 transition-transform">{mod.icon}</span>
                      <div>
                        <span className="text-[10px] font-black text-[#8b4513] uppercase tracking-widest">{mod.category}</span>
                        <h3 className="text-lg font-bold text-[#2c1810]">{mod.title}</h3>
                      </div>
                    </div>
                    <p className="text-[#5d4037] text-sm italic mb-4">{mod.description}</p>
                    <div className="text-[#8b0000] font-bold text-xs uppercase tracking-widest pt-4 border-t border-[#f1ede4]">
                      Explore &rarr;
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'library':
        return (
          <div className="animate-in fade-in duration-500 px-6 pb-20">
            <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <div>
                  <h2 className="text-4xl font-bold text-[#2c1810] italic">Writing Bank</h2>
                  <p className="text-[#8b4513] font-serif italic text-lg">Curated 24+ Solved Scenarios.</p>
                </div>
                <div className="relative w-full md:w-96">
                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#8b4513]">🖋️</span>
                   <input 
                    type="text" 
                    placeholder="Search topics..."
                    className="w-full pl-12 pr-4 py-4 bg-[#fdfbf7] border-b-2 border-[#2c1810] focus:outline-none text-lg placeholder-[#8b4513]/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                   />
                </div>
              </div>
              <div className="space-y-20">
                {QUESTION_SETS.map((set) => {
                  const filtered = set.questions.filter(q => q.questionText.toLowerCase().includes(searchQuery.toLowerCase()));
                  if (filtered.length === 0) return null;
                  return (
                    <div key={set.id}>
                      <div className="flex items-center gap-4 mb-8 border-l-4 border-[#8b0000] pl-6">
                         <div className="text-5xl">{set.icon}</div>
                         <h3 className="text-3xl font-bold text-[#2c1810] uppercase tracking-tighter">{set.title}</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filtered.map((q) => <QuestionCard key={q.id} question={q} onSelect={handleStartPractice} />)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-transparent relative flex flex-col">
      <nav className="sticky top-0 z-50 bg-[#f1ede4]/90 backdrop-blur-md border-b border-[#dccab1]">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => navigateTo('home')}>
            <div className="text-[#2c1810] p-2 border-2 border-[#2c1810] group-hover:bg-[#2c1810] group-hover:text-[#fdfbf7] transition-all">
              <FeatherIcon size="w-6 h-6" />
            </div>
            <span className="text-3xl font-bold text-[#2c1810] tracking-tighter italic">Inkly<span className="text-[#8b0000]">.</span></span>
          </div>
          <div className="hidden md:flex gap-12">
            {['home', 'lessons', 'library'].map(v => (
              <button key={v} onClick={() => navigateTo(v as any)} className={`text-sm font-black uppercase tracking-widest transition-all ${activeView.includes(v) ? 'text-[#8b0000]' : 'text-[#3d2b1f] hover:text-[#8b0000]'}`}>
                {v === 'lessons' ? 'Curriculum' : v === 'library' ? 'Practice' : v}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className={`flex-grow ${activeView === 'home' ? '' : 'pt-12'}`}>
        {renderContent()}
      </main>

      <footer className="h-10 bg-[#2c1810] text-[#fdfbf7] flex items-center justify-center text-[12px] font-black uppercase tracking-[0.4em] sticky bottom-0 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        Created by <span className="text-[#d4af37] ml-2">Shalaka Kashikar</span>
      </footer>
    </div>
  );
};

export default App;
