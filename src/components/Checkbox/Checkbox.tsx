import React, { useCallback } from 'react';
import type { FC } from 'react';
import CheckboxContext from './Context';
import type { CheckboxProps, CheckboxValue } from './types';

const Checkbox: FC<CheckboxProps> = ({ onChange, values, children }) => {
  const handleChange = useCallback(
    (value: CheckboxValue) => {
      const newValues = values.includes(value)
        ? values.filter((v) => v !== value)
        : [...values, value];

      onChange(newValues);
    },
    [values]
  );

  return (
    <CheckboxContext.Provider value={{ values, handleChange }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export default Checkbox;
