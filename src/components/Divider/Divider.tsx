import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../theme';
import type { DividerProps } from './types';

const Divider = ({ style, color, w, thickness, ...rest }: DividerProps) => {
  const __color = color || COLORS.green;
  const __thickness = thickness || 2;
  const __w = w || 300;

  return (
    <View
      {...rest}
      style={[
        style,
        {
          borderColor: __color,
          borderWidth: __thickness,
          width: __w,
        },
      ]}
    />
  );
};

export default Divider;
