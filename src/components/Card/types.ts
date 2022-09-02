import type { StyleProp, TextStyle } from 'react-native';

export type ImageHProps = 1 | 2 | 3 | 4 | 5;

export interface CardProps {
  style?: StyleProp<TextStyle>;
  bg?: string;
  w?: number;
  h?: number;
  imgH?: ImageHProps;
  p?: number;
  m?: number;
  shadow?: number;
  category?: string;
  title?: string;
  subTitle?: string;
  footerText?: string;
  categoryBgColor?: string;
  categoryTextColor?: string;
  titleStyle?: StyleProp<TextStyle>;
  paragraphStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
  footerStyle?: StyleProp<TextStyle>;
}
