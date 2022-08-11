import * as React from 'react';
import { Text as NativeText } from 'react-native';
import { TextProps } from './types';

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
    <NativeText style={[{ fontSize: fSize }, style, { ...rest }]}>
      {children}
    </NativeText>
  );
};

export default Text;
