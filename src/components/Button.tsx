import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import useColors from '../hooks/useColors';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: any;
  textColor?: string;
  bgColor?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  style,
  textColor,
  bgColor,
  disabled,
}) => {
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
      style={[
        styles.button,
        style,
        { backgroundColor: bgColor || colors.bgGeneric },
        disabled && { backgroundColor: colors.bgDisabled },
      ]}
      disabled={disabled}
    >
      <Animated.View style={animatedStyle}>
        <Text style={[styles.buttonText, { color: textColor || colors.white }]}>
          {text}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 10,
    overflow: 'hidden', // Ensure scaling does not overflow
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default Button;
