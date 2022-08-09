import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export interface RadioButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  width?: number;
  height?: number;
  bg?: string;
  color?: string;
  fontSize?: number;
  borderRadius?: number;
  borderWidth?: number;
  fontWeight?: TextStyle['fontWeight'];
}
