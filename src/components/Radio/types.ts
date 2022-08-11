import { TextStyle, TouchableOpacityProps } from 'react-native';

export interface RadioButtonProps extends TouchableOpacityProps {
  width?: number;
  height?: number;
  bg?: string;
  borderRadius?: number;
  borderWidth?: number;
  fontSize?: TextStyle['fontSize'];
  color?: TextStyle['color'];
  fontWeight?: TextStyle['fontWeight'];
}
