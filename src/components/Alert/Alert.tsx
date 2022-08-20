import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES } from '../../theme';
import Div from '../Div';
import Text from '../Text';
import type { AlertProps } from './types';

const Alert: FC<AlertProps> = ({ children, title, status }) => {
  const [isOpen, setIsOpen] = useState(true);

  let __leftIcon = '';

  switch (status) {
    case 'success':
      __leftIcon = 'checkcircle';
      break;
    case 'error':
      __leftIcon = 'lock1';
      break;
    case 'info':
      __leftIcon = 'infocirlce';
      break;
    case 'warning':
      __leftIcon = 'warning';
      break;
    default:
      __leftIcon = 'success';
  }

  let __leftIconColor = '';

  switch (status) {
    case 'success':
      __leftIconColor = COLORS.successIcon;
      break;
    case 'error':
      __leftIconColor = COLORS.errorIcon;
      break;
    case 'info':
      __leftIconColor = COLORS.infoIcon;
      break;
    case 'warning':
      __leftIconColor = COLORS.warningIcon;
      break;
    default:
      __leftIconColor = COLORS.successIcon;
  }

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
        <Icon name={__leftIcon} size={28} color={__leftIconColor} />
        <Text fontSize="xl" style={styles.title}>
          {title}
        </Text>

        <TouchableOpacity
          onPress={() => {
            setIsOpen(!isOpen);
          }}
          style={styles.closeAlert}
        >
          <Icon name={'delete'} size={20} color={COLORS.red} />
        </TouchableOpacity>
      </Div>
      {children ? <Text style={styles.paragraph}>{children}</Text> : null}
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
