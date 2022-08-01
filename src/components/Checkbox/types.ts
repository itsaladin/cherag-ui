export type CheckboxValue = string | number;

export type CheckboxValues = Array<CheckboxValue>;

export interface CheckboxProps {
  values: CheckboxValues;
  onChange: (values: CheckboxValues) => void;
}

export interface CheckboxItemProps {
  value: CheckboxValue;
}

export interface CheckboxContextValue {
  values: CheckboxValues;
  handleChange: (value: CheckboxValue) => void;
}
