import { ComponentPropsWithRef, ReactNode } from 'react';
import {
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Div from '../Div';

export type AvatarImageSource =
  | ImageSourcePropType
  | ((props: { size: number }) => ReactNode);

export type AvatarImageProps = ComponentPropsWithRef<typeof Div> & {
  source: AvatarImageSource;
  size?: number;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  onError?: ImageProps['onError'];
  onLayout?: ImageProps['onLayout'];
  onLoad?: ImageProps['onLoad'];
  onLoadEnd?: ImageProps['onLoadEnd'];
  onLoadStart?: ImageProps['onLoadStart'];
  onProgress?: ImageProps['onProgress'];
};
