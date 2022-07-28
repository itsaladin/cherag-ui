import * as React from 'react';
import { View } from 'react-native';

const Div = ({
  children,
  style,
  bg,
  w,
  h,
  p,
  m,
  ...rest
}: {
  children: any;
  style?: any;
  w?: any;
  h?: any;
  p?: any;
  m?: any;
  bg?: any;
}) => {
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
