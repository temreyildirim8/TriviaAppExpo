import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { useNavigation } from "@react-navigation/native";

type StartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "StartScreen"
>;

const StartScreen: React.FC = () => {
  const navigation = useNavigation<StartScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("QuizScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}> Start </Text>
      </Pressable>
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
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#40E0D0",
    width: '70%'
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white'
  }
});
