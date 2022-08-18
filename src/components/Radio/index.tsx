import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../theme';
import Text from '../Text';
import { RadioButtonProps } from './types';

const Radio = ({
  children,
  onPress,
  style,
  width,
  height,
  bg,
  color,
  fontSize,
  borderRadius,
  borderWidth,
  fontWeight,
  ...rest
}: RadioButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        style,
        {
          backgroundColor: bg || COLORS.secondary,
          width: width || 60,
          height: height || 30,
          borderWidth: borderWidth,
          borderRadius: borderRadius || SIZES.p3 - 10,
        },
      ]}
      onPress={onPress}
      {...rest}
    >
      <Text
        style={[
          styles.textStyle,
          {
            color: color || COLORS.white,
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

export default Radio;

const styles = StyleSheet.create({
  textStyle: {
    lineHeight: 25,
    textAlign: 'center',
  },
});
