import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../Theme/Index';
import Div from '../Div';
import PText from '../Text';
import type { AlertProps } from './types';

const Alert: FC<AlertProps> = ({ children, paragraph, status }) => {
  const [isOpen, setIsOpen] = useState(true);

  const __backgroundColor =
    status === 'success'
      ? COLORS.transparentSuccess
      : status === 'error'
      ? COLORS.transparentError
      : status === 'warning'
      ? COLORS.transparentWarning
      : status === 'info'
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
      <Div style={styles.subContainer}>
        <Icon name={'checkcircle'} size={28} color={COLORS.green} />
        <PText fontSize="xl" style={styles.title}>
          {children}
        </PText>

        <TouchableOpacity
          onPress={() => {
            setIsOpen(!isOpen);
          }}
          style={styles.closeAlert}
        >
          <Icon
            // style={{ marginRight: SIZES.p3 }}
            name={'checkcircle'}
            size={20}
            color={COLORS.red}
          />
        </TouchableOpacity>
      </Div>
      <PText style={styles.paragraph}>{paragraph}</PText>
    </Div>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    borderRadius: 5,
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
    paddingHorizontal: 50,
    textAlign: 'justify',
  },
});

export default Alert;
