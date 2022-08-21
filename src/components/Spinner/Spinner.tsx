import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../../theme';
import type { SpinnerProps } from './types';

const Spinner = ({ color, size, style, ...rest }: SpinnerProps) => {
  return (
    <ActivityIndicator
      style={style || styles.loader}
      color={color || COLORS.primary}
      size={size || 'large'}
      {...rest}
    />
  );
};
export default Spinner;

const styles = StyleSheet.create({
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
