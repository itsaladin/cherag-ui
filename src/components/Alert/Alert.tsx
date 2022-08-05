import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from '../../Theme/Index';
import Div from '../Div';
import PText from '../Text';
import type { AlertProps } from './types';

const Alert: FC<AlertProps> = ({ children, paragraph, status }) => {
  const [isOpen, setIsOpen] = useState(true);

  const __backgroundColor =
    status === 'Success'
      ? COLORS.transparentInfo
      : status === 'Error'
      ? COLORS.transparentRed
      : status === 'Warning'
      ? COLORS.transparentWarning
      : status === 'Info'
      ? COLORS.transparentInfo
      : null;

  return isOpen ? (
    <Div
      style={[
        styles.container,
        {
          backgroundColor: __backgroundColor,
        },
      ]}
    >
      <Div style={styles.row}>
        <Icon
          style={{ marginRight: SIZES.p3 }}
          name={'checkcircle'}
          size={28}
          color={COLORS.green}
        />
        <PText fontSize="2xl">{children}</PText>

        <TouchableOpacity
          onPress={() => {
            setIsOpen(!isOpen);
          }}
          style={styles.row}
        >
          <Icon
            style={{ marginRight: SIZES.p3 }}
            name={'checkcircle'}
            size={20}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </Div>
      <PText>{paragraph}</PText>
    </Div>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Alert;
