import React, { useCallback } from 'react';
import type { FC } from 'react';
import CheckboxContext from './context';
import type { AlertProps, AlertValue } from './types';

const Alert: FC<AlertProps> = ({ onChange, values, children }) => {
  const handleChange = useCallback(
    (value: AlertValue) => {
      const newValues = values.includes(value)
        ? values.filter((v) => v !== value)
        : [...values, value];

      onChange(newValues);
    },
    [values, onChange]
  );

  return (
    <CheckboxContext.Provider value={{ values, handleChange }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export default Alert;
