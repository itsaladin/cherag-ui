import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme';
import { Div } from '../Div';
import Text from '../Text/Text';
import type { AvatarTextProps } from './types';

const defaultSize = 60;

const AvatarText = ({
  size = defaultSize,
  label,
  style,
  textStyle,
  bgColor,
  textColor,
  onPress,
  ...rest
}: AvatarTextProps) => {
  const __bgcolor = bgColor || COLORS.primary;
  const __textColor = textColor || COLORS.black;
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Div
        style={[
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: __bgcolor,
          },
          style,
          styles.container,
        ]}
        {...rest}
      >
        <Text
          style={[
            textStyle,
            {
              color: __textColor,
            },
            styles.textContainer,
          ]}
        >
          {label}
        </Text>
      </Div>
    </TouchableOpacity>
  );
};

AvatarText.displayName = 'Avatar.Text';

export default AvatarText;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  textContainer: {
    textAlign: 'center',
  },
});
