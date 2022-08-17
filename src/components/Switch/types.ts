import { StyleProp, TextStyle } from 'react-native';

export interface SwitchProps {
  style?: StyleProp<TextStyle>;
  switchState: boolean;
  setSwitchState: (value: boolean) => void;
  onTrackColor?: string;
  offTrackColor?: string;
  thumbColor?: string;
}
