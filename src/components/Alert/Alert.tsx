import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { SIZES, COLORS } from '../../Theme/Index';
import Div from '../Div';
import PText from '../Text';
import AlertContext from './context';
import type { AlertProps } from './types';

const Alert: FC<AlertProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    //@ts-ignore
    <AlertContext.Provider value={{ isOpen, setIsOpen }}>
      <Div style={styles.row}>
        <Icon
          style={{ marginRight: SIZES.p3 }}
          name={'star'}
          size={20}
          color={COLORS.green}
        />
        <PText>{children}</PText>

        <TouchableOpacity
          onPress={() => {
            setIsOpen(!isOpen);
          }}
          style={styles.row}
        >
          <Icon
            style={{ marginRight: SIZES.p3 }}
            name={'cross'}
            size={20}
            color={COLORS.red}
          />
        </TouchableOpacity>
      </Div>
    </AlertContext.Provider>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Alert;
