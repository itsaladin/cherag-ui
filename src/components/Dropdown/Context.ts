import { createContext } from 'react';
import type { DropdownContextValue } from './types';

const DropdownContext = createContext<DropdownContextValue | null>(null);

export default DropdownContext;
