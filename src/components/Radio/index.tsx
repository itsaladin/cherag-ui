import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../Theme';
import PText from '../Text';

interface props {
  style?: any;
  rest?: any;
  children?: any;
  onPress?: any;
  width?: number;
  height?: number;
  bg?: string;
  color?: string;
  fontSize?: number;
  borderRadius?: number;
  borderWidth?: number;
  fontWeight?: string;
}

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
}: props) => {
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
      <PText
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
      </PText>
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
