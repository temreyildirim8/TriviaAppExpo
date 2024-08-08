import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useAtom } from 'jotai';
import { correctAnswersAtom, incorrectAnswersAtom, Question } from '../atoms/questionsAtom';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

type QuestionProps = {
  question: Question;
  onAnswer: (answer: 'True' | 'False') => void;
};

const QuestionComponent: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const [, setCorrectAnswers] = useAtom(correctAnswersAtom);
  const [, setIncorrectAnswers] = useAtom(incorrectAnswersAtom);

  const wiggle = useSharedValue(0);

  useEffect(() => {
    wiggle.value = withRepeat(withSequence(
      withTiming(-10, { duration: 100 }),
      withTiming(10, { duration: 100 })
    ), -1, true);
  }, [wiggle]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: wiggle.value }]
    };
  });

  const handleAnswer = (answer: 'True' | 'False') => {
    if (answer === question.correct_answer) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setIncorrectAnswers((prev) => prev + 1);
    }
    onAnswer(answer);
  };

  return (
    <View>
      <Text>{question.question}</Text>
      <Animated.View style={animatedStyle}>
        <Button title="True" onPress={() => handleAnswer('True')} />
        <Button title="False" onPress={() => handleAnswer('False')} />
      </Animated.View>
    </View>
  );
};

export default QuestionComponent;
