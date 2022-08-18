import { ComponentPropsWithRef, ReactNode } from 'react';
import {
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
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
  activeDotSize?: number;
  onError?: ImageProps['onError'];
  onLayout?: ImageProps['onLayout'];
  onLoad?: ImageProps['onLoad'];
  onLoadEnd?: ImageProps['onLoadEnd'];
  onLoadStart?: ImageProps['onLoadStart'];
  onProgress?: ImageProps['onProgress'];
};

export type AvatarTextProps = ComponentPropsWithRef<typeof Div> & {
  label: string;
  size?: number;
  bgColor?: string;
  textColor?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export type AvatarIconProps = ComponentPropsWithRef<typeof Div> & {
  style?: StyleProp<ViewStyle>;
  bgSize?: number;
  iconSize?: number;
  icon: string;
  iconColor?: string;
  bgColor?: string;
};
