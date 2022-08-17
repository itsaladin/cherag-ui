import { StyleProp, TextStyle } from 'react-native';

export type SwitchSizeProps = 'sm' | 'md' | 'lg';

export interface SwitchProps {
  style?: StyleProp<TextStyle>;
  size?: SwitchSizeProps;
  disabled?: boolean;
  isSwitchCheck: boolean;
  setIsSwitchCheck: (value: boolean) => void;
  onTrackColor?: string;
  offTrackColor?: string;
  thumbColor?: string;
}
