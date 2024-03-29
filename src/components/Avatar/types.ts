import type { ReactNode } from 'react';
import type {
  GestureResponderEvent,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import type { DivProps } from '../Div';

export type AvatarImageSource =
  | ImageSourcePropType
  | ((props: { size: number }) => ReactNode);

export interface AvatarImageProps extends DivProps {
  source: AvatarImageSource;
  size?: number;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  dotSize?: number;
  dotColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onError?: ImageProps['onError'];
  onLayout?: ImageProps['onLayout'];
  onLoad?: ImageProps['onLoad'];
  onLoadEnd?: ImageProps['onLoadEnd'];
  onLoadStart?: ImageProps['onLoadStart'];
  onProgress?: ImageProps['onProgress'];
}

export interface AvatarTextProps extends DivProps {
  label: string;
  size?: number;
  bgColor?: string;
  textColor?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface AvatarIconProps extends DivProps {
  style?: StyleProp<ViewStyle>;
  bgSize?: number;
  iconSize?: number;
  icon: string;
  iconColor?: string;
  bgColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
}
