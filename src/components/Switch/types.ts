import { StyleProp, TextStyle } from 'react-native';

export type SwitchSizeProps = 'sm' | 'md' | 'lg';

export interface SwitchProps {
  style?: StyleProp<TextStyle>;
  isSwitchCheck: boolean;
  setIsSwitchCheck: (value: boolean) => void;
  onTrackColor?: string;
  offTrackColor?: string;
  thumbColor?: string;
  size?: SwitchSizeProps;
}
