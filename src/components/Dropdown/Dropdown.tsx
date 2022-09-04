import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../theme';
import type { FCWithChildren } from '../../types/compat/react';
import { Div } from '../Div';
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
  borderColor,
}) => {
  const [isItemVisible, setItemVisible] = useState<boolean>(false);
  const __width = w || '50%';
  const __height = h || '2%';
  const __fontSize = fontSize || 16;
  const __header = header || 'Choose you service';
  const __borderColor = borderColor || COLORS.softGray;

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
        activeOpacity={0.8}
        onPress={() => {
          setItemVisible(!isItemVisible);
        }}
        style={[
          styles.dropdownBtn,
          { width: __width, height: __height, borderColor: __borderColor },
        ]}
      >
        <Text style={{ fontSize: __fontSize }}>{selected || __header}</Text>
        <Icon name={'arrow-down-thin'} size={22} color={COLORS.black} />
      </TouchableOpacity>
      {isItemVisible && <Div style={styles.childrenContainer}>{children}</Div>}
    </DropdownContext.Provider>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  dropdownBtn: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  childrenContainer: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: '50%',
    bottom: '75%',
    zIndex: 10,
    backgroundColor: COLORS.transparentWhite,
  },
});
