import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../../Theme/Index';

interface props {
  style?: any;
  size?: number | 'small' | 'large';
  color?: any;
}

const Loader = ({ color, size, style }: props) => {
  return (
    <ActivityIndicator
      style={style || styles.loader}
      color={color || COLORS.primary}
      size={size || 'large'}
    />
  );
};
export default Loader;

const styles = StyleSheet.create({
  loader: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
