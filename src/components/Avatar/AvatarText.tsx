import * as React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';
import Div from '../Div';
import Text from '../Text';
import { AvatarTextProps } from './types';

const defaultSize = 60;

const AvatarText = ({
  size = defaultSize,
  label,
  style,
  textStyle,
  bgColor,
  textColor,
  ...rest
}: AvatarTextProps) => {
  const __bgcolor = bgColor || COLORS.primary;
  const __textColor = textColor || COLORS.black;
  return (
    <Div
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: __bgcolor,
        },
        style,
      ]}
      {...rest}
    >
      <Text
        style={[
          textStyle,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            color: __textColor,
          },
          styles.textStyle,
        ]}
      >
        {label}
      </Text>
    </Div>
  );
};

AvatarText.displayName = 'Avatar.Text';

export default AvatarText;

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
