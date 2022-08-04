export type AlertValue = boolean;

export type AlertValues = Array<AlertValue>;

export interface AlertProps {}

export interface AlertItemProps {
  value: AlertValue;
  onPress: (values: AlertValues) => void;
}

export interface AlertContextValue {
  values: AlertValues;
  onPress: (values: AlertValues) => void;
  isOpen: boolean;
}
