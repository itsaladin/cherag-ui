import React, { FC } from 'react';
import RadioButtonContext from './Context';
import { RadioButtonProps } from './types';

const RadioButton: FC<RadioButtonProps> = ({
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
