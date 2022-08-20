import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Div from '../Div';
import Text from '../Text';
import useDropdown from './Hook';
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
        <Text>{children}</Text>
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
