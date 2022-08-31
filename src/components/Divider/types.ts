import type { ViewProps } from 'react-native';

export interface DividerProps extends Omit<ViewProps, 'children'> {
  color?: string;
  thickness?: number;
  w?: number;
}
