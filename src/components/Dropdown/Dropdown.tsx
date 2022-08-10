import type { FC } from 'react';
import React, { useCallback } from 'react';
import DropdownContext from './context';
import type { DropdownProps, DropdownValue } from './types';

const Dropdown: FC<DropdownProps> = ({ onChange, children }) => {
  const handleChange = useCallback(
    (value: DropdownValue) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <DropdownContext.Provider value={{ handleChange }}>
      {children}
    </DropdownContext.Provider>
  );
};

export default Dropdown;
