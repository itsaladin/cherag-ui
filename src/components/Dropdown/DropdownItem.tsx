import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Div from '../Div';
import PText from '../Text';
import useDropdown from './hook';
import { DropdownItemProps } from './types';

const CheckboxItem: FC<DropdownItemProps> = ({ children, value }) => {
  const context = useDropdown();

  return (
    <TouchableOpacity onPress={() => context.handleChange(value)}>
      <Div style={styles.row}>
        <PText>{children}</PText>
        {console.log(context)}
      </Div>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default CheckboxItem;
