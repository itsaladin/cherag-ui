import React, { FC, useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../../theme';
import Button from '../Button';
import DropdownContext from './Context';
import type { DropdownProps } from './types';

const Dropdown: FC<DropdownProps> = ({
  children,
  onChange,
  selected,
  width,
  fontSize,
}) => {
  const [isItemVisible, setItemVisible] = useState<Boolean>(false);
  const __widht = width || SIZES.DimensionWidth / 3;
  const __fontSize = fontSize || 16;

  const handleChange = useCallback(
    (value: string) => {
      onChange(value);
      setItemVisible(false);
    },
    [onChange]
  );

  return (
    <DropdownContext.Provider value={{ handleChange, selected }}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          setItemVisible(!isItemVisible);
        }}
        style={[styles.dropdownBtn, { width: __widht + 100 }]}
      >
        <Button
          width={__widht}
          fontSize={__fontSize}
          bg={COLORS.white}
          color={COLORS.black}
          style={styles.dropdown}
        >
          {selected || 'choose you service'}
        </Button>

        <Icon
          style={{
            marginRight: SIZES.p3,
          }}
          name={'ios-arrow-down-outline'}
          size={22}
          color={COLORS.black}
        />
      </TouchableOpacity>
      {isItemVisible && children}
    </DropdownContext.Provider>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  dropdownBtn: {
    borderColor: COLORS.darkGray,
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  dropdown: {},
});
