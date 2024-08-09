import React from 'react';
import { View, StyleSheet } from 'react-native';
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
  buttonWrapper: {
    width: '50%',
  },
});
