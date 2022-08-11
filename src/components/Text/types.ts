import {
  StyleProp,
  TextProps as NativeTextProps,
  TextStyle,
} from 'react-native';

export type fontSizeProps = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export interface TextProps extends NativeTextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  fontSize?: fontSizeProps;
}
