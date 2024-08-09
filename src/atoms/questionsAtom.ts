import { atom } from 'jotai';

export type Question = {
  question: string;
  correct_answer: 'True' | 'False';
};

export const questionsAtom = atom<Question[]>([]);
export const currentQuestionIndexAtom = atom<number>(0);
export const correctAnswersAtom = atom<number>(0);
