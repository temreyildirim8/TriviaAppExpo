import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: number;
  style?: object;
}

const Skeleton: React.FC<SkeletonProps> = ({ width = '100%', height = 20, borderRadius = 10, style }) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animatedValue]);

  const animatedStyle = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 1],
    }),
  };

  return (
    <Animated.View
      style={[
        styles.skeleton,
        { width, height, borderRadius },
        animatedStyle,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#e0e0e0',
  },
});

export default Skeleton;
