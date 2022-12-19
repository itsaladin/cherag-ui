import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../theme';
import { Text } from '../Text';
import type { ButtonProps } from './types';

const Button = ({
  children,
  onPress,
  style,
  w,
  h,
  bg,
  color,
  fontSize,
  borderRadius,
  borderWidth,
  fontWeight,
  testID,
  ...rest
}: ButtonProps) => {
  const __center = 'center';
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      testID={testID || 'testButtonId'}
      style={[
        style,
        {
          backgroundColor: bg || COLORS.primary,
          width: w || '30%',
          height: h || '5',
          borderWidth: borderWidth,
          borderRadius: borderRadius || SIZES.p3 - 10,
          justifyContent: __center,
        },
      ]}
      onPress={onPress}
      {...rest}
    >
      <Text
        style={[
          styles.textStyle,
          {
            color: color || COLORS.red,
            fontSize: fontSize || SIZES.p2,
            fontWeight: fontWeight || 'normal',
          },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  textStyle: {
    lineHeight: 25,
    textAlign: 'center',
  },
});
