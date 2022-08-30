import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../theme';
import type { FCWithChildren } from '../../types/compat/react';
import { renderTextOrNode } from '../../utlis';
import { Div } from '../Div';
import useDropdown from './Hook';
import type { RadioButtonItemProps } from './types';

const RadioButtonItem: FCWithChildren<RadioButtonItemProps> = ({
  children,
  value,
}) => {
  const { onChange, selected, btnColor } = useDropdown();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        onChange(value);
      }}
    >
      <Div style={styles.container}>
        <Icon
          name={selected === value ? 'radiobox-marked' : 'radiobox-blank'}
          size={24}
          color={selected === value ? btnColor || COLORS.border : COLORS.border}
        />
        {renderTextOrNode(children, styles.itemText)}
      </Div>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
  },
  itemText: {
    alignSelf: 'center',
    marginLeft: 2,
  },
});

export default RadioButtonItem;
