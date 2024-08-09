import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAtom } from "jotai";
import {
  correctAnswersAtom,
  currentQuestionIndexAtom,
  questionsAtom,
} from "../atoms/questionsAtom";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

type ResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ResultScreen"
>;

const ResultScreen: React.FC = () => {
  const [questions] = useAtom(questionsAtom);
  const [correctAnswers, setCorrectAnswers] = useAtom(correctAnswersAtom);
  const [, setCurrentQuestionIndex] = useAtom(currentQuestionIndexAtom);
  const navigation = useNavigation<ResultScreenNavigationProp>();

  const handlePlayAgain = () => {
    setCorrectAnswers(0)
    setCurrentQuestionIndex(0)
    navigation.navigate("StartScreen")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {correctAnswers} / {questions.length} </Text>
      <Button
        text="Play Again"
        onPress={() => handlePlayAgain()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  score: {
    fontSize: 24,
    marginBottom: 10
  }
});

export default ResultScreen;
