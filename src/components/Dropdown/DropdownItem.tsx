import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Div from '../Div';
import PText from '../Text';
import useDropdown from './hook';
import { DropdownItemProps } from './types';

const DropdownItem: FC<DropdownItemProps> = ({ children, value }) => {
  const context = useDropdown();
  return (
    <TouchableOpacity
      onPress={() => {
        context.handleChange(value);
      }}
    >
      <Div style={styles.divContainer}>
        <PText>{children}</PText>
      </Div>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  divContainer: {
    flexDirection: 'row',
  },
});

export default DropdownItem;
