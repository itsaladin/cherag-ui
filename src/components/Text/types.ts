import { StyleProp, ViewProps, ViewStyle } from 'react-native';

export type fontSizeProps = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export interface TextProps extends ViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  fontSize?: fontSizeProps;
}
