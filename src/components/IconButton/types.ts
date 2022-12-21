import type { GestureResponderEvent, StyleProp, TextStyle } from 'react-native';

export interface IconButtonProps {
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  testID?: string;
  icon: string;
  size?: number;
  color?: string;
  disabled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}
