import type { StyleProp, TextStyle } from 'react-native';

export interface TextAreaProps {
  style?: StyleProp<TextStyle>;
  borderWidth?: number;
  borderRadious?: number;
  placeholder?: string;
  placeholderTextColor?: string;
  numberOfLines?: number;
  h?: number;
  w?: number;
}
