import { StyleProp, TextStyle } from 'react-native';

export interface CardProps {
  style?: StyleProp<TextStyle>;
  bg?: string;
  w?: number;
  h?: number;
  p?: number;
  m?: number;
  category?: string;
  title?: string;
  subTitle?: string;
  footerText?: string;
  categoryBgColor?: string;
  titleStyle?: StyleProp<TextStyle>;
  paragraphStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
  footerStyle?: StyleProp<TextStyle>;
}
