import { createContext } from 'react';
import { RadioButtonProps } from './types';

const RadioButtonContext = createContext<RadioButtonProps | null>(null);

export default RadioButtonContext;
