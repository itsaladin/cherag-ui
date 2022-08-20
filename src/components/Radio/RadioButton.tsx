import React, { FC } from 'react';
import RadioButtonContext from './Context';
import { RadioButtonProps } from './types';

const Radio: FC<RadioButtonProps> = ({ children, onChange, selected }) => {
  return (
    <RadioButtonContext.Provider
      value={{
        onChange,
        selected,
      }}
    >
      {children}
    </RadioButtonContext.Provider>
  );
};

export default Radio;
