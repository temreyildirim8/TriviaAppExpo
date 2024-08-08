import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { questionsAtom } from '../atoms/questionsAtom';
import { fetchQuestions } from '../utils/api';

const useFetchQuestions = () => {
  const [, setQuestions] = useAtom(questionsAtom);

  useEffect(() => {
    const getQuestions = async () => {
      const questions = await fetchQuestions();
      setQuestions(questions);
    };

    getQuestions();
  }, [setQuestions]);
};

export default useFetchQuestions;
