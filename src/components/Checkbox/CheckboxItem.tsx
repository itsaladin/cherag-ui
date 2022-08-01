import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { COLORS } from '../../Theme/Index';
import Div from '../Div';
import PText from '../Text';
import useCheckbox from './hook';
import { CheckboxItemProps } from './types';

const CheckboxItem: FC<CheckboxItemProps> = ({ children, value }) => {
  const context = useCheckbox();
  const checked = context.values.includes(value);

  return (
    <TouchableOpacity onPress={() => context.handleChange(value)}>
      <Div bg={checked ? COLORS.green : undefined}>
        <PText>{children}</PText>
      </Div>
    </TouchableOpacity>
  );
};
export default CheckboxItem;
