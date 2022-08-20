import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../theme';
import Div from '../Div';
import Text from '../Text';
import useCheckbox from './Hook';
import { CheckboxItemProps } from './types';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckboxItem: FC<CheckboxItemProps> = ({ children, value }) => {
  const context = useCheckbox();
  const checked = context.values.includes(value);

  return (
    <TouchableOpacity onPress={() => context.handleChange(value)}>
      <Div style={styles.row}>
        <Icon
          style={{ marginRight: SIZES.p3 }}
          name={checked ? 'md-checkbox-sharp' : 'md-checkbox-outline'}
          size={20}
          color={checked ? COLORS.green : undefined}
        />
        <Text>{children}</Text>
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
