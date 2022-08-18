import { TextStyle, TouchableOpacityProps } from 'react-native';

export interface RadioButtonProps extends TouchableOpacityProps {
  fontSize?: TextStyle['fontSize'];
  color?: TextStyle['color'];
  btnColor?: TextStyle['color'];
  fontWeight?: TextStyle['fontWeight'];
}
