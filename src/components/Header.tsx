import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAtom } from 'jotai';
import { RootStackParamList } from '../types/navigation';
import useColors from '../hooks/useColors';
import BackButtonSvg from './BackButtonSvg';
import {
  questionsAtom,
  correctAnswersAtom,
  currentQuestionIndexAtom,
} from '../atoms/questionsAtom';

type HeaderProps = {
  title: string;
  showBackButton?: boolean; // Optional prop for showing the back button
};

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const colors = useColors();
  const [, setQuestions] = useAtom(questionsAtom);
  const [, setCorrectAnswers] = useAtom(correctAnswersAtom);
  const [, setCurrentQuestionIndex] = useAtom(currentQuestionIndexAtom);

  const handleGoBack = () => {
    setQuestions([]); // We are doing this to reset the this entirely
    setCorrectAnswers(0);
    setCurrentQuestionIndex(0);
    navigation.goBack();
  };

  return (
    <View style={[styles.header, { backgroundColor: colors.bgGeneric }]}>
      {showBackButton && (
        <TouchableOpacity
          onPress={() => handleGoBack()}
          style={styles.backButton}
          testID="back-button"
        >
          <BackButtonSvg width={24} height={24} color={colors.white} />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, { color: colors.white }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
  },
});

export default Header;
