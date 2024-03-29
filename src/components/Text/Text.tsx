import React from 'react';
import { Text as RNText } from 'react-native';
import type { TextProps } from './types';

const Text = ({ children, style, fontSize, ...rest }: TextProps) => {
  const fSize =
    fontSize === 'sm'
      ? 12
      : fontSize === 'md'
      ? 16
      : fontSize === 'lg'
      ? 18
      : fontSize === 'xl'
      ? 20
      : fontSize === '2xl'
      ? 24
      : fontSize === '3xl'
      ? 30
      : fontSize === '4xl'
      ? 36
      : fontSize === '5xl'
      ? 48
      : fontSize === '6xl'
      ? 60
      : 16;

  return (
    <RNText style={[{ fontSize: fSize }, style, { ...rest }]}>
      {children}
    </RNText>
  );
};

export default Text;
