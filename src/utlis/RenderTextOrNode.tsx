import React, { ReactNode } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { Text } from '../components/Text';

export function renderTextOrNode(
  node: string | ReactNode,
  style?: StyleProp<TextStyle>
) {
  if (typeof node === 'string') {
    return <Text style={style}>{node}</Text>;
  }
  return node;
}
