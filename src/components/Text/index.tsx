import * as React from 'react';
import { Text, View } from 'react-native';
import { TextProps } from './types';

const PText = ({ children, style, fontSize, ...rest }: TextProps) => {
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
    <View>
      <Text style={[{ fontSize: fSize }, style, { ...rest }]}>{children}</Text>
    </View>
  );
};

export default PText;
