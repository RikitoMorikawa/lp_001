import { LucideIcon } from 'lucide-react';

export interface Instructor {
  id: number;
  name: string;
  age: number;
  image: string;
  background: string;
  hobbies: string;
  specialty: string;
  message: string;
  personality: string;
}

export interface Plan {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  image: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}