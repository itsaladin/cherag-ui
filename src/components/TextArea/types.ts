import type { StyleProp, TextStyle } from 'react-native';

export interface TextAreaProps {
  style?: StyleProp<TextStyle>;
  borderWidth?: number;
  borderRadious?: number;
  borderColor?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  numberOfLines?: number;
  w?: string;
}
