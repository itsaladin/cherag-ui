import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../Theme';
import Div from '../Div';
import { IconButtonProps } from './types';

const Switch: FC<IconButtonProps> = ({ style, ...rest }) => {
  const [change, setChange] = useState<Boolean>(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setChange(!change);
      }}
      activeOpacity={0.8}
      style={style}
      {...rest}
    >
      <Div style={styles.container}>
        <Div
          style={[
            styles.lineStyle,
            { backgroundColor: change ? COLORS.green : COLORS.darkGray },
          ]}
        />
        <Div
          style={[
            styles.switchStyle,
            { marginLeft: change ? SIZES.DimensionWidth / 10 : SIZES.p3 - 10 },
          ]}
        />
      </Div>
    </TouchableOpacity>
  );
};

export default Switch;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  lineStyle: {
    width: 70,
    height: 20,
    borderRadius: 10,
  },
  switchStyle: {
    backgroundColor: COLORS.blue,
    width: 30,
    height: 30,
    flex: 1,
    position: 'absolute',
    borderRadius: 30,
    elevation: 8,
    shadowColor: COLORS.black,
  },
});
