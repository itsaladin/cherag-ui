import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../theme';
import type { FCWithChildren } from '../../types/compat/react';
import { Text } from '../Text';
import DropdownContext from './Context';
import type { DropdownProps } from './types';

const Dropdown: FCWithChildren<DropdownProps> = ({
  children,
  onChange,
  selected,
  w,
  h,
  fontSize,
  header,
}) => {
  const [isItemVisible, setItemVisible] = useState<boolean>(false);
  const __width = w || '50%';
  const __height = h || '2%';
  const __fontSize = fontSize || 16;
  const __header = header || 'Choose you service';

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
        style={[styles.dropdownBtn, { width: __width, height: __height }]}
      >
        <Text style={{ fontSize: __fontSize }}>{selected || __header}</Text>
        <Icon name={'ios-arrow-down-outline'} size={22} color={COLORS.black} />
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
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
