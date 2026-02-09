
import { QuestionSet } from './types';

export const QUESTION_SETS: QuestionSet[] = [
  {
    id: 'A',
    title: 'Social Issues',
    description: 'Explore topics like social media, road safety, and family values.',
    icon: '🌍',
    questions: [
      {
        id: 1,
        context: 'You are Rahul/Radhika.',
        questionText: 'You have noticed an alarming rise in road accidents in your city, particularly involving young drivers. Write an article in 150-200 words for your school magazine highlighting the causes and suggesting remedial measures.',
        cues: ['Distracted driving (mobile phones)', 'Lack of traffic discipline', 'Underage driving', 'Need for strict enforcement', 'Awareness campaigns']
      },
      {
        id: 2,
        context: 'National Daily context.',
        questionText: 'Recent reports suggest that elder abuse in urban families is on the rise. Write an article in 150-200 words for a national daily expressing your concern and suggesting ways to address this issue.',
        cues: ['Nuclear family structure', 'Generation gap', 'Financial dependence', 'Emotional neglect', 'Legal protection needed', 'Strengthening family bonds']
      },
      {
        id: 3,
        context: 'You are Priya/Pranav.',
        questionText: 'Social media addiction among teenagers has become a growing concern. Write an article in 150-200 words discussing its impact and ways to overcome it.',
        cues: ['FOMO (Fear of Missing Out)', 'Sleep deprivation', 'Reduced face-to-face interaction', 'Cyberbullying', 'Digital detox strategies', 'Parental guidance']
      }
    ]
  },
  {
    id: 'B',
    title: 'Environmental Issues',
    description: 'Impactful writing on nature, pollution, and conservation.',
    icon: '🍃',
    questions: [
      {
        id: 4,
        context: 'Environmentally conscious student.',
        questionText: 'Write an article in 150-200 words for your school newsletter on "Plastic Pollution: A Threat to Marine Life" suggesting practical solutions.',
        cues: ['Single-use plastics', 'Ocean contamination', 'Impact on aquatic ecosystems', 'Biodegradable alternatives', 'Individual responsibility', 'Government policies (ban on plastic bags)']
      },
      {
        id: 5,
        context: 'Local newspaper.',
        questionText: 'Your city has been experiencing severe water shortage during summers. Write an article in 150-200 words for a local newspaper highlighting the importance of rainwater harvesting.',
        cues: ['Depleting groundwater levels', 'Erratic rainfall patterns', 'Traditional water conservation methods', 'Rooftop rainwater harvesting', 'Community participation', 'Sustainable solution']
      },
      {
        id: 6,
        context: 'You are Amit/Anita.',
        questionText: 'Write an article in 150-200 words for an environmental magazine on "Urban Forests: The Lungs of Our Cities" emphasizing their role and the need for their conservation.',
        cues: ['Air purification', 'Temperature regulation', 'Biodiversity preservation', 'Rapid urbanization threats', 'Citizens\' initiatives', 'Green cover importance']
      }
    ]
  },
  {
    id: 'C',
    title: 'Education & Youth',
    description: 'Focus on school life, career choices, and personal growth.',
    icon: '🎓',
    questions: [
      {
        id: 7,
        context: 'School Topper.',
        questionText: 'Write an article in 150-200 words for the school magazine on "Balancing Academics and Extracurricular Activities."',
        cues: ['Holistic development', 'Time management skills', 'Stress management', 'Sports and creativity', 'All-round personality', 'Success beyond marks']
      },
      {
        id: 8,
        context: 'Youth magazine.',
        questionText: 'Write an article in 150-200 words for a youth magazine on "The Dying Art of Reading Books" in the age of digital media.',
        cues: ['Reduced attention spans', 'Digital distractions', 'Benefits of reading (vocabulary, imagination, focus)', 'E-books vs physical books', 'Library culture declining', 'Inculcating reading habits']
      },
      {
        id: 9,
        context: 'You are Kavya/Karan.',
        questionText: 'After attending a career counseling session, write an article in 150-200 words for your school magazine on "Choosing the Right Career: Passion vs Pressure."',
        cues: ['Parental expectations', 'Peer influence', 'Self-assessment', 'Emerging career options', 'Following one\'s interest', 'Long-term satisfaction']
      }
    ]
  },
  {
    id: 'D',
    title: 'Technology & Modern Life',
    description: 'AI, Digital economy, and the future of tech.',
    icon: '🤖',
    questions: [
      {
        id: 10,
        context: 'You are Neha/Nikhil.',
        questionText: 'Write an article in 150-200 words for a technology magazine discussing "Artificial Intelligence: Friend or Foe?"',
        cues: ['Automation benefits', 'Job displacement concerns', 'Healthcare advancements', 'Privacy issues', 'Ethical considerations', 'Human oversight needed']
      },
      {
        id: 11,
        context: 'Consumer awareness magazine.',
        questionText: 'Online shopping has become increasingly popular. Write an article in 150-200 words for a consumer awareness magazine discussing its advantages and pitfalls.',
        cues: ['Convenience and variety', 'Price comparison', 'Fake products/fraud', 'Impulsive buying', 'Impact on local businesses', 'Conscious consumerism']
      },
      {
        id: 12,
        context: 'You are Sanya/Sameer.',
        questionText: 'Write an article in 150-200 words for your school newsletter on "Cashless Economy: Are We Ready?"',
        cues: ['Digital payment methods', 'Transparency in transactions', 'Digital divide (rural-urban)', 'Cybersecurity concerns', 'Financial literacy needed', 'Gradual transition']
      }
    ]
  },
  {
    id: 'E',
    title: 'Health & Lifestyle',
    description: 'Physical well-being, mental health, and modern stresses.',
    icon: '🧘',
    questions: [
      {
        id: 13,
        context: 'Health-conscious student.',
        questionText: 'Obesity among children has become a major health concern. Write an article in 150-200 words for a health magazine suggesting preventive measures.',
        cues: ['Junk food consumption', 'Sedentary lifestyle', 'Lack of physical activity', 'Health complications (diabetes, heart issues)', 'Balanced diet', 'Parental role modeling']
      },
      {
        id: 14,
        context: 'You are Arjun/Anjali.',
        questionText: 'Write an article in 150-200 words for your school magazine on "Yoga and Meditation: The Ancient Science for Modern Stress."',
        cues: ['Academic pressure', 'Competitive environment', 'Physical and mental benefits', 'Concentration improvement', 'Holistic wellness', 'Simple daily practice']
      },
      {
        id: 15,
        context: 'Mental health advocate.',
        questionText: 'Write an article in 150-200 words for a youth magazine on "Breaking the Stigma Around Mental Health."',
        cues: ['Depression and anxiety among students', 'Social taboo', 'Seeking professional help', 'Support systems', 'Self-care practices', 'Normalizing conversations']
      }
    ]
  },
  {
    id: 'F',
    title: 'Values & Ethics',
    description: 'Cleanliness, honesty, and social harmony.',
    icon: '⚖️',
    questions: [
      {
        id: 16,
        context: 'You are Rohan/Riya.',
        questionText: 'Your school recently organized a cleanliness drive. Write an article in 150-200 words for the school magazine on "Cleanliness: Not Just a Habit, But a Responsibility."',
        cues: ['Swachh Bharat mission', 'Personal hygiene', 'Public spaces maintenance', 'Disease prevention', 'Civic sense', 'Leading by example']
      },
      {
        id: 17,
        context: 'National Daily.',
        questionText: 'Write an article in 150-200 words for a national daily on "The Lost Value of Honesty in Modern Times."',
        cues: ['Shortcuts to success', 'Academic dishonesty', 'Workplace ethics', 'Long-term consequences', 'Character building', 'Integrity in small actions']
      },
      {
        id: 18,
        context: 'You are Shreya/Shaurya.',
        questionText: 'Write an article in 150-200 words for your school magazine on "Respect for All: The Foundation of a Harmonious Society."',
        cues: ['Religious tolerance', 'Gender equality', 'Respecting diversity', 'Ending discrimination', 'Unity in diversity', 'Mutual understanding']
      }
    ]
  },
  {
    id: 'G',
    title: 'Current Affairs & National Issues',
    description: 'Skill India, women safety, and patriotism.',
    icon: '🗞️',
    questions: [
      {
        id: 19,
        context: 'Skill India initiative.',
        questionText: 'The \'Skill India\' initiative aims to train millions of youth. Write an article in 150-200 words for a national newspaper discussing its importance and challenges.',
        cues: ['Employability gap', 'Vocational training', 'Industry requirements', 'Traditional education limitations', 'Self-employment opportunities', 'Implementation at grassroots']
      },
      {
        id: 20,
        context: 'You are Manav/Manasi.',
        questionText: 'Write an article in 150-200 words for a current affairs magazine on "Women Safety: Moving Beyond Laws to Cultural Change."',
        cues: ['Rising crimes against women', 'Legal framework', 'Societal attitudes', 'Education and awareness', 'Safe public spaces', 'Empowerment through education']
      },
      {
        id: 21,
        context: 'Everyday patriotism.',
        questionText: 'Write an article in 150-200 words for your school magazine on "Patriotism in Everyday Life: Small Acts, Big Impact."',
        cues: ['Beyond flag-waving', 'Responsible citizenship', 'Following rules and laws', 'Paying taxes honestly', 'Protecting environment', 'Contributing to society']
      }
    ]
  },
  {
    id: 'H',
    title: 'Mixed/Contemporary Topics',
    description: 'Civic sense, pandemic lessons, and kindness.',
    icon: '✨',
    questions: [
      {
        id: 22,
        context: 'You are Aditya/Aditi.',
        questionText: 'After witnessing rampant littering during a public event, write an article in 150-200 words on "Public Places, Public Responsibility."',
        cues: ['Civic sense lacking', 'Tragedy of commons', 'Tourist spots degradation', 'Individual accountability', 'Pride in public property', 'Collective ownership']
      },
      {
        id: 23,
        context: 'Pandemic reflections.',
        questionText: 'Write an article in 150-200 words for a magazine on "The Pandemic Effect: Lessons We Must Not Forget."',
        cues: ['Healthcare preparedness', 'Hygiene importance', 'Digital adaptation', 'Family bonding', 'Essential workers\' contribution', 'Resilience and adaptability']
      },
      {
        id: 24,
        context: 'You are Ishaan/Isha.',
        questionText: 'Write an article in 150-200 words for your school magazine on "The Power of Small Acts of Kindness."',
        cues: ['Helping others', 'Spreading positivity', 'Ripple effect', 'Community building', 'Emotional well-being', 'Creating compassionate society']
      }
    ]
  }
];
