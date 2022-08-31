export interface DropdownContextValue {
  selected?: string;
  handleChange: (value: string) => void;
}

export type WidthHeightValue = string | number;

export interface DropdownProps {
  header?: string;
  onChange: (value: string) => void;
  selected?: string;
  w?: WidthHeightValue;
  h?: WidthHeightValue;
  fontSize?: number;
}

export interface DropdownItemProps {
  value: string;
}
