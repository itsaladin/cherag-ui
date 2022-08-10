import { createContext } from 'react';
import { DropdownContextValue } from './types';

const DropdownContext = createContext<DropdownContextValue | null>(null);

export default DropdownContext;
