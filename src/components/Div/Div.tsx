import React from 'react';
import { View } from 'react-native';
import type { DivProps } from './types';

const Div = ({ children, style, bg, w, h, p, m, ...rest }: DivProps) => {
  return (
    <View
      style={[
        {
          backgroundColor: bg,
          width: w,
          height: h,
          padding: p,
          margin: m,
        },
        style,
        { ...rest },
      ]}
    >
      {children}
    </View>
  );
};

export default Div;
