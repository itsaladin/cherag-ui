import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../../Theme/Index';
import Div from '../Div';
import PText from '../Text';
import useCheckbox from './hook';
import { AlertItemProps } from './types';

const AlertItem: FC<AlertItemProps> = ({ children, value }) => {
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

export default AlertItem;
