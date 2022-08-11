import React, { FC, useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../Theme';
import Button from '../Button';
import Div from '../Div';
import DropdownContext from './context';
import type { DropdownProps } from './types';

const Dropdown: FC<DropdownProps> = ({ children, onChange, selected }) => {
  const [isItemVisible, setItemVisible] = useState<Boolean>(false);

  const handleChange = useCallback(
    (value: string) => {
      onChange(value);
      setItemVisible(false);
    },
    [onChange]
  );

  return (
    <DropdownContext.Provider value={{ handleChange, selected }}>
      <Div style={styles.dropdownBtn}>
        <Button
          width={350}
          height={50}
          fontSize={22}
          bg={COLORS.lightGray7}
          color={COLORS.black}
          onPress={() => {
            setItemVisible(!isItemVisible);
          }}
          style={styles.dropdown}
        >
          {selected || 'choose you service'}
        </Button>
      </Div>
      {isItemVisible && children}
    </DropdownContext.Provider>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  dropdownBtn: {
    flexDirection: 'row',
  },
  dropdown: {
    justifyContent: 'center',
  },
});
