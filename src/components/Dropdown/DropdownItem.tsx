import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import type { FCWithChildren } from '../../types/compat/react';
import { Div } from '../Div';
import { Text } from '../Text';
import useDropdown from './Hook';
import type { DropdownItemProps } from './types';

const DropdownItem: FCWithChildren<DropdownItemProps> = ({
  children,
  value,
}) => {
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
    paddingHorizontal: 5,
  },
});

export default DropdownItem;
