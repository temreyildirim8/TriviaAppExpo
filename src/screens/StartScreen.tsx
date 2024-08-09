import React from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

type StartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "StartScreen"
>;

const StartScreen: React.FC = () => {
  const navigation = useNavigation<StartScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}> 
        <Button onPress={() => navigation.navigate("QuizScreen")} text="Start"/>        
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  buttonWrapper: {
    width: '50%'
  },
});
