import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constant/Themes';
import Text from '../Text';

interface props {
  style?: any;
  otherprops?: any;
  children?: any;
  onPress: any;
  width?: number;
  height?: number;
  bgColor?: string;
  textColor?: string;
  textSize?: number;
  borderRadius?: number;
  fontWeight?: string;
}

const Button = ({
  children,
  onPress,
  style,
  width,
  height,
  bgColor,
  textColor,
  textSize,
  borderRadius,
  fontWeight,
}: props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        style,
        {
          backgroundColor: bgColor || COLORS.transparent,
          borderColor: COLORS.primary,
          width: width || 60,
          height: height || 30,
          borderWidth: SIZES.p3 - 9,
          borderRadius: borderRadius || SIZES.p3 - 10,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.TextStyle,
          {
            color: textColor || COLORS.white,
            fontSize: textSize || SIZES.p2,
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
  TextStyle: {
    lineHeight: 25,
    textAlign: 'center',
  },
});
