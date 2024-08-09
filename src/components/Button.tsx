import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import useColors from '../hooks/useColors';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({ text, onPress, style }) => {
  const colors = useColors();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.85, { damping: 2, stiffness: 100 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 2, stiffness: 100 });
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.button, style, { backgroundColor: colors.buttonBgColor }]}
    >
      <Animated.View style={animatedStyle}>
        <Text style={[styles.buttonText, { color: colors.buttonColor }]}>
          {text}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden', // Ensure scaling does not overflow
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default Button;
