export interface VocabItem {
  en: string;
  pron: string;
  es: string;
  context: string;
  fraseEn: string;
  fraseEs: string;
  frasePron: string;
  icon?: string;
  color?: string; // Hex color
  text?: 'white' | 'black'; // Text color for contrast
  border?: boolean;
}

export interface Category {
  title: string;
  desc: string;
  items: VocabItem[];
}

export interface DataMap {
  [key: string]: Category;
}

export interface QuizQuestion {
  question: string;
  correctAnswer: string;
  options: string[];
}