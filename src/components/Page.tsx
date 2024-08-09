import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <LinearGradient
      collapsable
      colors={['#d7944466', '#fefdfd']}
      style={styles.gradient}
    >
      <View style={styles.container}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Page;
