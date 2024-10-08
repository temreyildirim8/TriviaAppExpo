import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAtom } from 'jotai';
import { correctAnswersAtom, Question } from '../atoms/questionsAtom';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { decodeHtmlEntities } from '../utils/helpers';
import Button from './Button';
import useColors from '../hooks/useColors';

type QuestionProps = {
  question: Question;
  onAnswer: (answer: 'True' | 'False') => void;
};

const QuestionComponent: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const [, setCorrectAnswers] = useAtom(correctAnswersAtom);

  const wiggle = useSharedValue(0);
  const colors = useColors();

  useEffect(() => {
    wiggle.value = withSequence(
      withTiming(-20, { duration: 200 }),
      withTiming(0, { duration: 200 })
    );
  }, [question]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: wiggle.value }],
    };
  });

  const handleAnswer = (answer: 'True' | 'False') => {
    if (answer === question.correct_answer) {
      setCorrectAnswers((prev) => prev + 1);
    }
    onAnswer(answer);
  };

  return (
    <Animated.View style={[animatedStyle, styles.container]}>
      <View
        style={[
          styles.questionTextWrapper,
          { borderColor: colors.borderColor },
        ]}
      >
        <Text style={styles.questionText}>
          {decodeHtmlEntities(question.question)}
          {/* We are calling decodeHtmlEntities to get rid of html symbols like &quot */}
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <View style={{ width: '40%' }}>
          <Button
            onPress={() => handleAnswer('True')}
            text="True"
            bgColor={colors.true}
          />
        </View>
        <View style={{ width: '40%' }}>
          <Button
            onPress={() => handleAnswer('False')}
            text="False"
            bgColor={colors.false}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: 350,
    width: '100%',
    justifyContent: 'space-between',
  },
  questionTextWrapper: {
    padding: 10,
    height: 280,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  questionText: {
    fontSize: 24,
  },
  buttonsWrapper: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
});

export default QuestionComponent;
