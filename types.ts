
export interface Question {
  id: number;
  questionText: string;
  cues: string[];
  context?: string;
}

export interface QuestionSet {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
}

export type View = 'home' | 'lessons' | 'practice' | 'library' | 'module-detail';

export type ModuleCategory = 'foundation' | 'category' | 'skill' | 'reference';

export interface LearningModule {
  id: string;
  title: string;
  category: ModuleCategory;
  description: string;
  icon: string;
}
