export type RadioButtonValue = string | number;

export interface RadioButtonProps {
  selected: RadioButtonValue;
  onChange: (value: RadioButtonValue) => void;
  btnColor?: string;
}

export interface RadioButtonItemProps {
  value: RadioButtonValue;
  btnColor?: string;
}
