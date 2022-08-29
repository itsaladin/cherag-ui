import type {
  StyleProp,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

export type fontSizeProps = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export interface TextProps extends RNTextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  fontSize?: fontSizeProps;
}
