import type { ReactNode } from 'react';
import type { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

export type AvatarImageSource =
  | ImageSourcePropType
  | ((props: { size: number }) => ReactNode);

export interface ImageProps {
  w?: number;
  h?: number;
  uri?: string;
  alt: string;
  style?: StyleProp<ImageStyle>;
  source: AvatarImageSource;
  size: number;
}
