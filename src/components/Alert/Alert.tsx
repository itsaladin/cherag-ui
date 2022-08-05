import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from '../../Theme/Index';
import Div from '../Div';
import PText from '../Text';
import type { AlertProps } from './types';

const Alert: FC<AlertProps> = ({ children, title, status }) => {
  const [isOpen, setIsOpen] = useState(true);

  const __leftIcon =
    status === 'success'
      ? 'checkcircle'
      : status === 'error'
      ? 'lock1'
      : status === 'warning'
      ? 'warning'
      : status === 'info'
      ? 'infocirlce'
      : 'infocirlce';

  const leftIconColor =
    status === 'success'
      ? COLORS.successIcon
      : status === 'error'
      ? COLORS.errorIcon
      : status === 'warning'
      ? COLORS.warningIcon
      : status === 'info'
      ? COLORS.infoIcon
      : COLORS.infoIcon;

  return isOpen ? (
    <Div
      style={[
        styles.container,
        {
          backgroundColor: COLORS[status],
        },
      ]}
    >
      <Div style={styles.subContainer}>
        <Icon name={__leftIcon} size={28} color={leftIconColor} />
        <PText fontSize="xl" style={styles.title}>
          {title}
        </PText>

        <TouchableOpacity
          onPress={() => {
            setIsOpen(!isOpen);
          }}
          style={styles.closeAlert}
        >
          <Icon name={'delete'} size={20} color={COLORS.red} />
        </TouchableOpacity>
      </Div>
      {children ? <PText style={styles.paragraph}>{children}</PText> : null}
    </Div>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    borderRadius: 5,
    paddingVertical: 10,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    marginLeft: 10,
  },
  closeAlert: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  paragraph: {
    paddingHorizontal: SIZES.DimensionWidth / 7.5,
    textAlign: 'justify',
  },
});

export default Alert;
