//Avatar.Image Component
import { default as AvatarImage } from './AvatarImage';

//Avatar.Text Component
import { default as AvatarText } from './AvatarText';

//Avatar.Icon Component
import { default as AvatarIcon } from './AvatarIcon';

export const Avatar = {
  Image: AvatarImage,
  Text: AvatarText,
  Icon: AvatarIcon,
};

export type {
  AvatarIconProps,
  AvatarTextProps,
  AvatarImageProps,
} from './types';
