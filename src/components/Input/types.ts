import {
  GestureResponderEvent,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';

export interface InputProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  onPressLeftIcon?: (event: GestureResponderEvent) => void;
  onPressRightIcon?: (event: GestureResponderEvent) => void;
  leftIcon?: string;
  leftIconColor?: string;
  rightIcon?: string;
  rightIconColor?: string;
  fontSize?: number;
  iconSize?: number;
  borderWidth?: number;
  borderColor?: string;
  inputBoxWidth?: number;
}
