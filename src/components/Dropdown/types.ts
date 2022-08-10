export type DropdownValue = boolean;
export type StatusValue = 'success' | 'error' | 'warning' | 'info';

export type DropdownValues = Array<DropdownValue>;

export interface DropdownContextValue {
  values: DropdownValues;
  onPress: (values: DropdownValues) => void;
  isOpen: boolean;
}

export interface DropdownProps {
  status: StatusValue;
  title?: string;
}
export interface DropdownItemProps {
  value: DropdownValue;
  onPress: (values: DropdownValues) => void;
}
