import type { GestureResponderEvent, StyleProp, TextStyle } from 'react-native';

export interface IconButtonProps {
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  icon: string;
  size?: number;
  color?: string;
  disabled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}
