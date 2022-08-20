import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Div from '../Div';
import useDropdown from './Hook';
import { RadioButtonItemProps } from './types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../theme';
import { renderTextOrNode } from '../../utlis';

const RadioButtonItem: FC<RadioButtonItemProps> = ({ children, value }) => {
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
        {renderTextOrNode(children, [styles.container])}
      </Div>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default RadioButtonItem;
