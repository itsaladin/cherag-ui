import * as React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../theme';
import { DividerProps } from './types';

const Divider = ({ style, color, thickness, ...rest }: DividerProps) => {
  const __color = color || COLORS.green;
  const __thickness = thickness || 2;

  return (
    <View
      {...rest}
      style={[style, { borderColor: __color, borderWidth: __thickness }]}
    />
  );
};

export default Divider;
