import type {
  ActivityIndicatorProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface SpinnerProps extends Omit<ActivityIndicatorProps, 'children'> {
  style?: StyleProp<ViewStyle>;
  size?: number | 'small' | 'large';
  color?: string;
}
