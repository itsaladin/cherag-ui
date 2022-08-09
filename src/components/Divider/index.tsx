import * as React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../Theme';
import { DividerProps } from './types';

const Divider = ({
  style,
  borderColor,
  borderWidth,
  ...rest
}: DividerProps) => {
  const __borderColor = borderColor || COLORS.green;
  const __borderWidth = borderWidth || 2;

  return (
    <View
      {...rest}
      style={[
        style,
        { borderColor: __borderColor, borderWidth: __borderWidth },
      ]}
    />
  );
};

export default Divider;
