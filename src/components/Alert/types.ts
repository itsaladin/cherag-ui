export type StatusValue = 'success' | 'error' | 'warning' | 'info';

export interface AlertProps {
  status: StatusValue;
  title?: string;
}
