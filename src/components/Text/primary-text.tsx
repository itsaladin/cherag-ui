import * as React from 'react';
import { Text, View } from 'react-native';

const PText = ({
  children,
  style,
  fontSize,
  ...rest
}: {
  children: any;
  style: any;
  fontSize: any;
}) => {
  const fSize =
    fontSize === 'sm'
      ? 12
      : fontSize === 'md'
      ? 16
      : fontSize === 'lg'
      ? 22
      : fontSize === 'xl'
      ? 28
      : fontSize === 'xxl'
      ? 38
      : 18;

  return (
    <View>
      <Text style={[{ fontSize: fSize }, style, { ...rest }]}>{children}</Text>
    </View>
  );
};

export default PText;
