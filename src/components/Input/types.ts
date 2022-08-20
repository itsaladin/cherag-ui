import { ComponentProps } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TextInput,
  ViewStyle,
} from 'react-native';

export interface InputProps extends ComponentProps<typeof TextInput> {
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
