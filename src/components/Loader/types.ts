import { ActivityIndicatorProps, StyleProp, ViewStyle } from 'react-native';

export interface LoaderProps extends ActivityIndicatorProps {
  style?: StyleProp<ViewStyle>;
  size?: number | 'small' | 'large';
  color?: string;
}
