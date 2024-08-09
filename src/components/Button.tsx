import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useColors from '../hooks/useColors';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({ text, onPress, style }) => {
  const colors = useColors();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style, { backgroundColor: colors.buttonBgColor }]}
    >
      <Text style={[styles.buttonText, { color: colors.buttonColor }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default Button;
