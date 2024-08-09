import React from 'react';
import { Text, View } from 'react-native';
import { useAtom } from 'jotai';
import {
  questionsAtom,
  currentQuestionIndexAtom,
} from '../atoms/questionsAtom';
import useFetchQuestions from '../hooks/useFetchQuestions';
import QuestionComponent from '../components/Question';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';
import Skeleton from '../components/Skeleton';
import Page from '../components/Page';
import useColors from '../hooks/useColors';
import Header from '../components/Header';

type QuizScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'QuizScreen'
>;

const QuizScreen: React.FC = () => {
  useFetchQuestions();
  const [questions] = useAtom(questionsAtom);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useAtom(
    currentQuestionIndexAtom
  );
  const navigation = useNavigation<QuizScreenNavigationProp>();
  const colors = useColors();

  const handleAnswer = () => {
    if (currentQuestionIndex < 3) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      navigation.navigate('ResultScreen');
    }
  };

  return (
    <>
      <Header title="Quiz" showBackButton />
      <Page>
        {questions?.length > 0 ? (
          <>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: colors.bgGeneric,
                padding: 10,
              }}
            >
              <Text
                style={{ color: colors.white }}
              >{`${String(currentQuestionIndex + 1)} / ${questions.length}`}</Text>
            </View>
            <QuestionComponent
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
          </>
        ) : (
          <>
            <Skeleton height={40} width="20%" />
            <Skeleton height={280} width="80%" style={{ marginTop: 20 }} />
            <Skeleton height={60} width="50%" style={{ marginTop: 20 }} />
          </>
        )}
      </Page>
    </>
  );
};

export default QuizScreen;
