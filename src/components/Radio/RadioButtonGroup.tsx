import React, { createContext } from 'react';
import { View } from 'react-native';

type Props = {
  onValueChange: (value: string) => void;
  value: string;
  children: React.ReactNode;
};

export type RadioButtonContextType = {
  value: string;
  onValueChange: (item: string) => void;
};

export const RadioButtonContext = createContext<RadioButtonContextType>(
  null as any
);

const RadioButtonGroup = ({ value, onValueChange, children }: Props) => (
  <RadioButtonContext.Provider value={{ value, onValueChange }}>
    <View accessibilityRole="radiogroup">{children}</View>
  </RadioButtonContext.Provider>
);

RadioButtonGroup.displayName = 'RadioButton.Group';
export default RadioButtonGroup;

// @component-docs ignore-next-line
export { RadioButtonGroup };
