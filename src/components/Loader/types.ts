import { StyleProp, ViewProps, ViewStyle } from 'react-native';

export interface LoaderProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  size?: number | 'small' | 'large';
  color?: string;
}
