import { ActivityIndicatorProps, StyleProp, ViewStyle } from 'react-native';

export interface SpinnerProps extends ActivityIndicatorProps {
  style?: StyleProp<ViewStyle>;
  size?: number | 'small' | 'large';
  color?: string;
}
