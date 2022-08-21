import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

export interface DivProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  w?: number;
  h?: number;
  p?: number;
  m?: number;
  bg?: string;
}
