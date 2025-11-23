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

export enum SectionId {
  HERO = 'hero',
  CONCEPT = 'concept',
  COMPARISON = 'comparison',
  TEACHERS = 'teachers',
  FAQ = 'faq'
}