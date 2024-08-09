import React from "react";
import { View, StyleSheet } from "react-native";
import { useAtom } from "jotai";
import {
  questionsAtom,
  currentQuestionIndexAtom,
} from "../atoms/questionsAtom";
import useFetchQuestions from "../hooks/useFetchQuestions";
import QuestionComponent from "../components/Question";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { useNavigation } from "@react-navigation/native";
import Skeleton from "../components/Skeleton";

type QuizScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "QuizScreen"
>;

const QuizScreen: React.FC = () => {
  useFetchQuestions();
  const [questions] = useAtom(questionsAtom);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useAtom(
    currentQuestionIndexAtom
  );
  const navigation = useNavigation<QuizScreenNavigationProp>();

  const handleAnswer = () => {
    if (currentQuestionIndex < 3) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      navigation.navigate("ResultScreen");
    }
  };

  return (
    <View style={styles.container}>
      {questions?.length > 0 ? (
        <QuestionComponent
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <Skeleton height={80} width="80%" style={{ marginTop: 20 }} />
          <Skeleton height={40} width="50%" style={{ marginTop: 20 }} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});

export default QuizScreen;
