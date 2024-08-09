import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAtom } from 'jotai';
import { correctAnswersAtom, incorrectAnswersAtom } from '../atoms/questionsAtom';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';

type ResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ResultScreen'>;

const ResultScreen: React.FC = () => {
  const [correctAnswers] = useAtom(correctAnswersAtom);
  const [incorrectAnswers] = useAtom(incorrectAnswersAtom);
  const navigation = useNavigation<ResultScreenNavigationProp>();

  return (
    <View>
      <Text>Correct Answers: {correctAnswers}</Text>
      <Text>Incorrect Answers: {incorrectAnswers}</Text>
      <Button title="Play Again" onPress={() => navigation.navigate('StartScreen')} />
    </View>
  );
};

export default ResultScreen;
