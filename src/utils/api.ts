import axios from 'axios';
import { Question } from '../atoms/questionsAtom';

export const fetchQuestions = async (): Promise<Question[]> => {
  const response = await axios.get('https://opentdb.com/api.php?amount=4&type=boolean');
  return response.data.results.map((question: any) => ({
    question: question.question,
    correct_answer: question.correct_answer,
  }));
};
