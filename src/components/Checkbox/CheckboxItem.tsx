import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../Theme/Index';
import Div from '../Div';
import PText from '../Text';
import useCheckbox from './hook';
import { CheckboxItemProps } from './types';
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckboxItem: FC<CheckboxItemProps> = ({ children, value }) => {
  const context = useCheckbox();
  const checked = context.values.includes(value);

  return (
    <TouchableOpacity onPress={() => context.handleChange(value)}>
      <Div style={styles.row} bg={checked ? COLORS.green : undefined}>
        <Icon name="plus" size={30} color="#900" />
        <PText>{children}</PText>
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
