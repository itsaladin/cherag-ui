import { createContext } from 'react';
import type { RadioButtonProps } from './types';

const RadioButtonContext = createContext<RadioButtonProps | null>(null);

export default RadioButtonContext;
