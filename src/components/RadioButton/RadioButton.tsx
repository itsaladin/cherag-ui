import React from 'react';
import type { FCWithChildren } from '../../types/compat/react';
import RadioButtonContext from './Context';
import type { RadioButtonProps } from './types';

const RadioButton: FCWithChildren<RadioButtonProps> = ({
  children,
  onChange,
  selected,
  btnColor,
}) => {
  return (
    <RadioButtonContext.Provider
      value={{
        onChange,
        selected,
        btnColor,
      }}
    >
      {children}
    </RadioButtonContext.Provider>
  );
};

export default RadioButton;
