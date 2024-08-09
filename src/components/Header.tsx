import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import useColors from '../hooks/useColors';
import BackButtonSvg from './BackButtonSvg';

type HeaderProps = {
  title: string;
  showBackButton?: boolean; // Optional prop for showing the back button
};

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const colors = useColors();

  return (
    <View style={[styles.header, { backgroundColor: colors.bgGeneric }]}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <BackButtonSvg width={24} height={24} color={colors.white} />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, { color: colors.white }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 20
  },
  backButton: {
    position: 'absolute',
    left: 20,
    paddingBottom: 20
  },
  title: {
    fontSize: 20,
  },
});

export default Header;
