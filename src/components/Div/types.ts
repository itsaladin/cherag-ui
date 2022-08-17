import { StyleProp, ViewProps, ViewStyle } from 'react-native';

export interface Props extends ViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  w?: number;
  h?: number;
  p?: number;
  m?: number;
  bg?: string;
}
