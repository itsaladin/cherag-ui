import { StyleProp, TextStyle } from 'react-native';

export type SwitchSizeProps = 'sm' | 'md' | 'lg';

export interface TextAreaProps {
  style?: StyleProp<TextStyle>;
  borderWidth?: number;
  borderRadious?: number;
  placeholder?: string;
  placeholderTextColor?: string;
  numberOfLines?: number;
  h?: number;
}
