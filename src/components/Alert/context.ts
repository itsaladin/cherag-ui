import { createContext } from 'react';
import { AlertContextValue } from './types';

const AlertContext = createContext<AlertContextValue | null>(null);

export default AlertContext;
