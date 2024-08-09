import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import useColors from '../hooks/useColors';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: number;
  style?: object;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = 20,
  borderRadius = 10,
  style,
}) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const colors = useColors();

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
        { width, height, borderRadius },
        animatedStyle,
        style,
        { backgroundColor: colors.skeletonBgColor },
      ]}
    />
  );
};

export default Skeleton;
