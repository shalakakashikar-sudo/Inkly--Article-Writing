
import React, { useState } from 'react';

const CATEGORY_DATA = [
  {
    id: 'social',
    title: 'Social Issues',
    icon: '🌍',
    tone: 'Serious, concerned, empathetic.',
    quote: '"The greatness of a nation is measured by how it treats its weakest members." — Gandhi',
    hackLine: 'While society celebrates progress, few notice the growing crisis of [issue] silently destroying lives.',
    mustKnow: [
      { topic: 'Road Safety', fact: 'Distracted driving (mobile phones) and lack of traffic discipline account for 30% of accidents.', vocab: 'Traffic mortality (death rate on roads), Reckless driving (careless or dangerous), Compliance (following rules).' },
      { topic: 'Elder Abuse', fact: 'Recent reports suggest elder abuse in urban nuclear families is on a sharp rise.', vocab: 'Filial (relating to children), Emotional neglect (lack of care), Financial dependence (relying on others for money).' },
      { topic: 'Social Media Addiction', fact: 'FOMO (Fear of Missing Out) and sleep deprivation are the leading causes of teenage anxiety.', vocab: 'Digital detox (break from tech), Cyberbullying (online harassment), Parental guidance (supervision by parents).' }
    ]
  },
  {
    id: 'enviro',
    title: 'Environmental',
    icon: '🍃',
    tone: 'Urgent, scientific, hopeful.',
    quote: '"We do not inherit the Earth from our ancestors; we borrow it from our children."',
    hackLine: 'The convenience of a 5-minute plastic use creates a 500-year legacy of pollution.',
    mustKnow: [
      { topic: 'Plastic Pollution', fact: 'Single-use plastics are the single biggest threat to marine ecosystems today.', vocab: 'Biodegradable (decay naturally), Ocean contamination (pollution of seas), Aquatic ecosystems (water habitats).' },
      { topic: 'Water Crisis', fact: 'Rainwater harvesting is the only sustainable solution for depleting groundwater levels.', vocab: 'Aquifer (underground water source), Depletion (running out), Sustainability (able to be maintained).' },
      { topic: 'Urban Forests', fact: 'Urban forests act as the "Lungs of Our Cities," regulating temperature and purifying air.', vocab: 'Biodiversity (variety of life), Air purification (cleaning the air), Green cover (area covered by trees).' }
    ]
  },
  {
    id: 'youth',
    title: 'Education & Youth',
    icon: '🎓',
    tone: 'Empathetic, analytical, firm.',
    quote: '"Education is not the filling of a pail, but the lighting of a fire." — W.B. Yeats',
    hackLine: 'Success is not measured by marks alone, but by the balance one finds in a holistic life.',
    mustKnow: [
      { topic: 'Balancing Life', fact: 'Academic success is hollow without the development of time management and creativity.', vocab: 'Holistic (all-round growth), Extracurricular (outside academics), Time management (using time well).' },
      { topic: 'Dying Art of Reading', fact: 'In the digital age, attention spans are shrinking as library culture declines.', vocab: 'Digital distractions (tech interruptions), Inculcating (fixing an idea by repetition), Vocabulary (range of words).' },
      { topic: 'Career Choices', fact: 'Choosing the right career is often a battle between personal passion and parental pressure.', vocab: 'Self-assessment (knowing oneself), Passion vs Pressure (interest vs expectations), Emerging career options (new types of jobs).' }
    ]
  },
  {
    id: 'tech',
    title: 'Technology & Modern Life',
    icon: '🤖',
    tone: 'Balanced, critical, contemporary.',
    quote: '"Technology is a useful servant but a dangerous master." — Christian Lous Lange',
    hackLine: 'We are connected to the world via screens, yet increasingly isolated from our neighbors.',
    mustKnow: [
      { topic: 'Artificial Intelligence', fact: 'AI offers massive automation benefits but raises job displacement and ethical concerns.', vocab: 'Automation (use of machines), Displacement (taking the place of), Ethical considerations (moral questions).' },
      { topic: 'Online Shopping', fact: 'The convenience of variety is often balanced by the pitfalls of fake products and impulsive buying.', vocab: 'Conscious consumerism (buying with thought), Impulsive buying (buying without thinking), Price comparison (checking costs).' },
      { topic: 'Cashless Economy', fact: 'Transparency in transactions is hampered by the digital divide between rural and urban areas.', vocab: 'Digital divide (gap in tech access), Cybersecurity (online safety), Financial literacy (understanding money).' }
    ]
  },
  {
    id: 'health',
    title: 'Health & Lifestyle',
    icon: '🧘',
    tone: 'Motivational, cautionary, serious.',
    quote: '"He who has health has hope; and he who has hope has everything."',
    hackLine: 'Our bodies are temples, not warehouses for junk food and sedentary habits.',
    mustKnow: [
      { topic: 'Childhood Obesity', fact: 'Sedentary lifestyles and junk food are leading to early-onset diabetes in children.', vocab: 'Sedentary (mostly sitting), Metabolic (relating to body energy), Parental role modeling (setting an example).' },
      { topic: 'Yoga & Meditation', fact: 'Yoga is the ancient science that provides holistic wellness for modern academic stress.', vocab: 'Concentration (focus), Holistic wellness (total health), Stress management (handling pressure).' },
      { topic: 'Mental Health Stigma', fact: '1 in 7 teens faces mental health issues, yet social taboo prevents them from seeking help.', vocab: 'Social taboo (socially forbidden), Normalizing (making something feel normal), Support systems (people who help).' }
    ]
  },
  {
    id: 'values',
    title: 'Values & Ethics',
    icon: '⚖️',
    tone: 'Philosophical, reflective, stern.',
    quote: '"Honesty is the first chapter in the book of wisdom." — Thomas Jefferson',
    hackLine: 'Character is built when we choose the hard right over the easy wrong.',
    mustKnow: [
      { topic: 'Cleanliness', fact: 'Swachh Bharat is more than a mission; it is a display of civic sense and disease prevention.', vocab: 'Civic sense (responsibility to society), Hygiene (cleanliness), Proliferation (rapid increase).' },
      { topic: 'Honesty', fact: 'The lost value of honesty leads to academic and workplace shortcuts with long-term fallout.', vocab: 'Integrity (being honest), Character building (developing morals), Shortcuts (quick but poor ways).' },
      { topic: 'Respect for All', fact: 'Religious tolerance and gender equality are the foundations of a harmonious society.', vocab: 'Harmonious (peaceful), Diversity (variety), Discrimination (unfair treatment).' }
    ]
  },
  {
    id: 'current',
    title: 'Current & National',
    icon: '🗞️',
    tone: 'Informed, patriotic, constructive.',
    quote: '"Nation-building is a relay race; each individual must run their part."',
    hackLine: 'Government initiatives provide the roadmap, but citizens must provide the engine.',
    mustKnow: [
      { topic: 'Skill India', fact: 'Only 5% of India\'s workforce is formally skilled, making employability a major gap.', vocab: 'Employability (possession of qualities for work), Vocational (practical skills), Grassroots (most basic level).' },
      { topic: 'Women Safety', fact: 'Women safety requires moving beyond legal frameworks to a deep cultural change.', vocab: 'Legal framework (system of laws), Societal attitudes (how society thinks), Empowerment (giving power).' },
      { topic: 'Everyday Patriotism', fact: 'Patriotism is found in small acts: following rules, paying taxes, and protecting the environment.', vocab: 'Responsible citizenship (being a good citizen), Integrity (honesty), Collective impact (total effect).' }
    ]
  }
];

const Module5_Categories: React.FC = () => {
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const currentCat = CATEGORY_DATA.find(c => c.id === activeCat);

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-32 px-4">
      <header className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2c1810] mb-4 italic">The Mastery Bank</h2>
        <p className="text-lg text-[#5d4037] italic">Exhaustive Cheat Sheets for all key exam themes. Click to reveal vocabulary meanings, stats, and hack lines.</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {CATEGORY_DATA.map(cat => (
          <div 
            key={cat.id} 
            onClick={() => setActiveCat(activeCat === cat.id ? null : cat.id)}
            className={`p-6 border-2 transition-all cursor-pointer text-center relative overflow-hidden group rounded-sm ${activeCat === cat.id ? 'bg-[#2c1810] text-white border-[#2c1810] shadow-2xl scale-105' : 'bg-white text-[#2c1810] border-[#dccab1] hover:border-[#8b0000] shadow'}`}
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
            <h3 className="text-xs font-black uppercase tracking-widest">{cat.title}</h3>
            <div className="mt-4 text-[8px] font-black uppercase tracking-[0.2em] opacity-40">View Cheat Sheet &darr;</div>
          </div>
        ))}
      </div>

      {activeCat && currentCat && (
        <div className="max-w-5xl mx-auto bg-white border-4 border-[#2c1810] shadow-2xl animate-in slide-in-from-top-6 duration-500 overflow-hidden rounded-sm">
          <div className="bg-[#2c1810] p-6 text-white flex justify-between items-center border-b-2 border-[#d4af37]">
            <div>
              <h3 className="text-2xl font-bold italic">{currentCat.title} Mastery Card</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] mt-1">Tone: {currentCat.tone}</p>
            </div>
            <button onClick={() => setActiveCat(null)} className="text-[10px] font-black uppercase tracking-widest border border-white/30 px-3 py-1 hover:bg-white hover:text-[#2c1810] transition-colors">Close</button>
          </div>
          
          <div className="p-8 md:p-12 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="p-6 bg-[#fdfbf7] border-l-8 border-[#8b0000] shadow-sm italic text-lg font-serif">
                <h4 className="text-[10px] font-black uppercase text-[#8b0000] mb-3">Power Quote</h4>
                {currentCat.quote}
              </div>
              <div className="p-6 bg-[#fdfbf7] border-l-8 border-[#2c1810] shadow-sm italic text-lg font-serif">
                <h4 className="text-[10px] font-black uppercase text-[#2c1810] mb-3">Hack Line (The Hook)</h4>
                "{currentCat.hackLine}"
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentCat.mustKnow.map((item, i) => (
                <div key={i} className="p-6 bg-white border border-[#dccab1] shadow-sm flex flex-col h-full relative group hover:border-[#8b0000] transition-all">
                  <h4 className="text-xl font-bold text-[#8b0000] mb-4 font-serif italic border-b border-[#f1ede4] pb-2">{item.topic}</h4>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <h5 className="text-[9px] font-black text-[#8b4513] uppercase tracking-widest mb-2">Examiner Stats</h5>
                      <p className="text-base font-serif italic text-[#2c1810] leading-relaxed">{item.fact}</p>
                    </div>
                    <div>
                      <h5 className="text-[9px] font-black text-[#8b4513] uppercase tracking-widest mb-2">High-Mark Vocab (Meanings)</h5>
                      <p className="text-sm font-serif text-[#5d4037] leading-relaxed italic">{item.vocab}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Module5_Categories;
