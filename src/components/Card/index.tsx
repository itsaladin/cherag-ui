import * as React from 'react';
import { View } from 'react-native';
import { Props } from './types';

const Div = ({ children, style, bg, w, h, p, m, ...rest }: Props) => {
  const height = h ? h : 40;
  const width = w ? w : 350;
  return (
    <View
      style={[
        {
          backgroundColor: bg,
          width: width,
          height: height,
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
