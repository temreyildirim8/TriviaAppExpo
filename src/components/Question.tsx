import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAtom } from "jotai";
import {
  correctAnswersAtom,
  incorrectAnswersAtom,
  Question,
} from "../atoms/questionsAtom";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { decodeHtmlEntities } from "../utils/helpers";
import Button from "./Button";

type QuestionProps = {
  question: Question;
  onAnswer: (answer: "True" | "False") => void;
};

const QuestionComponent: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const [, setCorrectAnswers] = useAtom(correctAnswersAtom);
  const [, setIncorrectAnswers] = useAtom(incorrectAnswersAtom);

  const wiggle = useSharedValue(0);

  useEffect(() => {
    wiggle.value = withRepeat(
      withSequence(
        withTiming(-10, { duration: 100 }),
        withTiming(10, { duration: 100 })
      ),
      3
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: wiggle.value }],
    };
  });

  const handleAnswer = (answer: "True" | "False") => {
    if (answer === question.correct_answer) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setIncorrectAnswers((prev) => prev + 1);
    }
    onAnswer(answer);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {decodeHtmlEntities(question.question)}
      </Text>
      <Animated.View style={[animatedStyle, styles.buttonsWrapper]}>
        <Button onPress={() => handleAnswer("True")} text="True" />
        <Button onPress={() => handleAnswer("False")} text="False" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  question: {
    textAlign: "center",
    fontSize: 24,
  },
  buttonsWrapper: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  }
});

export default QuestionComponent;
