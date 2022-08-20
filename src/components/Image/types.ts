import { ReactNode } from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

export type AvatarImageSource =
  | ImageSourcePropType
  | ((props: { size: number }) => ReactNode);

export interface ImageProps {
  w?: number;
  h?: number;
  uri?: string;
  style?: StyleProp<ImageStyle>;
  source: AvatarImageSource;
  size: number;
}
