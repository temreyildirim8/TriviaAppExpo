import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import Page from '../components/Page';

type StartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'StartScreen'
>;

const StartScreen: React.FC = () => {
  const navigation = useNavigation<StartScreenNavigationProp>();

  return (
    <Page>
      <Text style={styles.description}>There are four trivia questions on this quiz. </Text>
      <Text style={styles.description}> Would you dare? </Text>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => navigation.navigate('QuizScreen')}
          text="Start"
        />
      </View>
    </Page>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    paddingBottom: 10
  },
  buttonWrapper: {
    width: '50%',
  },
});
