import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../../theme';
import type { FCWithChildren } from '../../types/compat/react';
import { Div } from '../Div';
import Text from '../Text/Text';
import useCheckbox from './Hook';
import type { CheckboxItemProps } from './types';

const CheckboxItem: FCWithChildren<CheckboxItemProps> = ({
  children,
  value,
  iconSize,
  textStyle,
  checkedIconColor,
  uncheckedIconColor,
}) => {
  const context = useCheckbox();
  const checked = context.values.includes(value);

  return (
    <TouchableOpacity onPress={() => context.handleChange(value)}>
      <Div style={styles.row}>
        <Icon
          style={{ marginRight: SIZES.p3 }}
          name={checked ? 'checkbox-outline' : 'checkbox-blank-outline'}
          size={iconSize || 20}
          color={
            checked
              ? checkedIconColor || COLORS.green
              : uncheckedIconColor || COLORS.darkgray
          }
        />
        <Text style={textStyle}>{children}</Text>
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
