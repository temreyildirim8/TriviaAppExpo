import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useAtom } from 'jotai';
import {
  correctAnswersAtom,
  currentQuestionIndexAtom,
  questionsAtom,
} from '../atoms/questionsAtom';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import Page from '../components/Page'; // Import the new Page component
import Header from '../components/Header';

type ResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ResultScreen'
>;

const ResultScreen: React.FC = () => {
  const [questions, setQuestions] = useAtom(questionsAtom);
  const [correctAnswers, setCorrectAnswers] = useAtom(correctAnswersAtom);
  const [, setCurrentQuestionIndex] = useAtom(currentQuestionIndexAtom);
  const navigation = useNavigation<ResultScreenNavigationProp>();

  const handlePlayAgain = () => {
    setQuestions([]); // We are doing this to reset the this entirely
    setCorrectAnswers(0);
    setCurrentQuestionIndex(0);
    navigation.navigate('StartScreen');
  };

  return (
    <>
      <Header title="Result" />
      <Page>
        <Text style={styles.score}>
          Correct Answers: {correctAnswers} / Wrong Answers:{' '}
          {questions.length - correctAnswers}
        </Text>
        <Button text="Play Again" onPress={() => handlePlayAgain()} />
      </Page>
    </>
  );
};

const styles = StyleSheet.create({
  score: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default ResultScreen;
