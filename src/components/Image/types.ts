import { ImageStyle, StyleProp } from 'react-native';

export interface ImageProps {
  w?: number;
  h?: number;
  uri?: string;
  style?: StyleProp<ImageStyle>;
}
