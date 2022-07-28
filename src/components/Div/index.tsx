import * as React from 'react';
import { Text, View } from 'react-native';

const Div = ({
  children,
  style,
  bg,
  w,
  h,
  p,
  ...rest
}: {
  children: any;
  style?: any;
  w?: any;
  h?: any;
  p?: any;
  bg?: any;
}) => {
  return (
    <View
      style={[
        { backgroundColor: bg, width: w, height: h, padding: p },
        style,
        { ...rest },
      ]}
    >
      <Text> {children}</Text>
    </View>
  );
};

export default Div;
