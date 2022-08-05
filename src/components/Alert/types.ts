export type AlertValue = boolean;
export type StatusValue = 'success' | 'error' | 'warning' | 'info';

export type AlertValues = Array<AlertValue>;

export interface AlertProps {
  status: StatusValue;
  paragraph?: string;
}

export interface AlertItemProps {
  value: AlertValue;
  onPress: (values: AlertValues) => void;
}

export interface AlertContextValue {
  values: AlertValues;
  onPress: (values: AlertValues) => void;
  isOpen: boolean;
}
