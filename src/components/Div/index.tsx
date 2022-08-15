import * as React from 'react';
import { View } from 'react-native';
import { Props } from './types';

const Div = ({ children, style, bg, w, h, p, m, ...rest }: Props) => {
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
