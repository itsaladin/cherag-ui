import React, { useCallback } from 'react';
import type { FCWithChildren } from '../../types/compat/react';
import CheckboxContext from './Context';
import type { CheckboxProps, CheckboxValue } from './types';

const Checkbox: FCWithChildren<CheckboxProps> = ({
  onChange,
  values,
  children,
}) => {
  const handleChange = useCallback(
    (value: CheckboxValue) => {
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

export default Checkbox;
