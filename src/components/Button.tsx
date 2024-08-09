import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: any
}

const Button: React.FC<ButtonProps> = ({ text, onPress, style }) => {
  return (
      <TouchableOpacity
        onPress={onPress}
        style={[ styles.button, style]}
      >
        <Text style={styles.buttonText}> {text} </Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#26867c",
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
    color: '#ffffff'
  }
 })

export default Button;
