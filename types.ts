export interface FaqItem {
  question: string;
  answer: string;
}

export interface TeacherProfile {
  id: number;
  name: string;
  hobby: string;
  image: string;
  message: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HERO = 'hero',
  CONCEPT = 'concept',
  COMPARISON = 'comparison',
  TEACHERS = 'teachers',
  AI_ADVISOR = 'ai-advisor',
  FAQ = 'faq'
}