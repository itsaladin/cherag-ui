export interface DropdownContextValue {
  selected?: string;
  handleChange: (value: string) => void;
}

export interface DropdownProps {
  header?: string;
  onChange: (value: string) => void;
  selected?: string;
  width?: number;
  fontSize?: number;
}

export interface DropdownItemProps {
  value: string;
}
