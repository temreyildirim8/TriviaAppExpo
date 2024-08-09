import React from "react";
import { View } from "react-native";
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
    <View>
      {questions.length > 0 && (
        <QuestionComponent
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
    </View>
  );
};

export default QuizScreen;
