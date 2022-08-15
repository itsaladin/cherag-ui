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
  paragraph?: string;
  activity?: string;
  categoryBgColor?: string;
}
