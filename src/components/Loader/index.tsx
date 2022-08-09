import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../../Theme';
import { LoaderProps } from './types';

const Loader = ({ color, size, style }: LoaderProps) => {
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
