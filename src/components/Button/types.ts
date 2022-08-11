import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

export interface Props extends ViewProps {
  style?: StyleProp<ViewStyle>;
  onPress: (event: GestureResponderEvent) => void;
  width?: number;
  height?: number;
  bg?: string;
  color?: string;
  fontSize?: number;
  borderRadius?: number;
  borderWidth?: number;
  fontWeight?: TextStyle['fontWeight'];
}
