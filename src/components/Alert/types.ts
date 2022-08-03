export type AlertValue = string | number;

export type AlertValues = Array<AlertValue>;

export interface AlertProps {
  values: AlertValues;
  onChange: (values: AlertValues) => void;
}

export interface AlertItemProps {
  value: AlertValue;
}

export interface AlertContextValue {
  values: AlertValues;
  handleChange: (value: AlertValue) => void;
}
