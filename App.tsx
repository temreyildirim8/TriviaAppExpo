import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Provider } from "jotai";
import StartScreen from "./src/screens/StartScreen";
import QuizScreen from "./src/screens/QuizScreen";
import ResultScreen from "./src/screens/ResultScreen";
import { RootStackParamList } from "./src/types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
          
        >
          <Stack.Screen
            name="StartScreen"
            component={StartScreen}
            options={{
              title: "Start",
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="QuizScreen"
            component={QuizScreen}
            options={{
              title: "Quiz",
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="ResultScreen"
            component={ResultScreen}
            options={{
              gestureEnabled: false,
              headerLeft: () => null,
              title: "Result",
              headerTitleAlign: 'center'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
