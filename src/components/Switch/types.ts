import { StyleProp, TextStyle } from 'react-native';

export interface SwitchProps {
  style?: StyleProp<TextStyle>;
  isSwitchCheck: boolean;
  setIsSwitchCheck: (value: boolean) => void;
  onTrackColor?: string;
  offTrackColor?: string;
  thumbColor?: string;
}
