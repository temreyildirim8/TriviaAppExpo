import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import Page from '../components/Page';
import Header from '../components/Header';
import useStartTimer from '../hooks/useStartTimer';
import useColors from '../hooks/useColors';

type StartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'StartScreen'
>;

const StartScreen: React.FC = () => {
  const navigation = useNavigation<StartScreenNavigationProp>();
  const colors = useColors();
  const { isButtonDisabled, timer, startTimer } = useStartTimer(20); 
  // Use the hook with a 20-second timer to decrease request number

  const handleStartPress = () => {
    navigation.navigate('QuizScreen');
    startTimer(); // Start the timer after pressing 'start'
  };

  return (
    <>
      <Header title="Start" />
      <Page>
        <View style={styles.container}>
          <Text style={styles.description}>
            There are four trivia questions on this quiz.{' '}
          </Text>
          <Text style={styles.description}> Would you dare? </Text>
          <Button
            onPress={handleStartPress}
            text="Start"
            style={styles.button}
            disabled={isButtonDisabled}
          />
          {isButtonDisabled && (
            <Text style={[styles.timerText, { color: colors.bgGeneric }]}>
              You can start in {timer} seconds
            </Text>
          )}
        </View>
      </Page>
    </>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    height: 300
  },
  description: {
    fontSize: 18,
    paddingBottom: 10,
    textAlign: 'center'
  },
  button: {
    marginTop: 20,
    width: '50%',
    marginHorizontal: 'auto'
  },
  timerText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
