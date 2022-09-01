import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../../theme';
import type { FCWithChildren } from '../../types/compat/react';
import { Div } from '../Div';
import Text from '../Text/Text';
import type { AlertProps } from './types';

const Alert: FCWithChildren<AlertProps> = ({
  children,
  title,
  status,
  alert,
  setAlert,
}) => {
  let __leftIcon = '';
  let __leftIconColor = '';
  switch (status) {
    case 'success':
      __leftIcon = 'checkbox-marked-circle-outline';
      break;
    case 'error':
      __leftIcon = 'alien-outline';
      break;
    case 'info':
      __leftIcon = 'alert-circle-outline';
      break;
    case 'warning':
      __leftIcon = 'alert-rhombus-outline';
      break;
    default:
      __leftIcon = 'success';
  }
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

  return alert ? (
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
            setAlert(!alert);
          }}
          style={styles.closeAlert}
        >
          <Icon name={'close'} size={24} color={COLORS.red} />
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
