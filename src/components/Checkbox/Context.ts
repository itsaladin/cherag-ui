import { createContext } from 'react';
import type { CheckboxContextValue } from './types';

const CheckboxContext = createContext<CheckboxContextValue | null>(null);

export default CheckboxContext;
