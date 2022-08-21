import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../theme';
import { Div } from '../Div';
import type { SwitchProps } from './types';

const Switch = ({
  style,
  size,
  disabled,
  isSwitchCheck,
  setIsSwitchCheck,
  offTrackColor,
  onTrackColor,
  thumbColor,
  ...rest
}: SwitchProps) => {
  const __offTrackColor = disabled
    ? COLORS.lightGray5
    : offTrackColor || COLORS.darkGray;
  const __onTrackColor = disabled
    ? COLORS.lightGray5
    : onTrackColor || COLORS.green;
  const __thumbColor = disabled ? COLORS.darkgray : thumbColor || COLORS.white;

  let __width = 0;
  let __height = 0;
  let __thumbHeight = 0;
  let __thumbWidth = 0;
  let __marginLeft = 0;

  switch (size) {
    case 'sm':
      __width = 30;
      __height = 10;
      __thumbHeight = 18;
      __thumbWidth = 18;
      __marginLeft = SIZES.DimensionWidth / 30;
      break;
    case 'md':
      __width = 45;
      __height = 13;
      __thumbHeight = 22;
      __thumbWidth = 22;
      __marginLeft = SIZES.DimensionWidth / 15;
      break;
    case 'lg':
      __width = 60;
      __height = 20;
      __thumbHeight = 30;
      __thumbWidth = 30;
      __marginLeft = SIZES.DimensionWidth / 12;
      break;
    default:
      __width = 40;
      __height = 15;
      __thumbHeight = 20;
      __thumbWidth = 20;
      __marginLeft = SIZES.DimensionWidth / 20;
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        setIsSwitchCheck(!isSwitchCheck);
      }}
      activeOpacity={0.8}
      style={style}
      {...rest}
    >
      <Div style={styles.container}>
        <Div
          style={[
            styles.lineStyle,
            {
              backgroundColor: isSwitchCheck ? __onTrackColor : __offTrackColor,
              width: __width,
              height: __height,
            },
          ]}
        />
        <Div
          style={[
            styles.switchStyle,
            {
              marginLeft: isSwitchCheck ? __marginLeft : SIZES.p3 - 10,
              backgroundColor: __thumbColor,
              width: __thumbWidth,
              height: __thumbHeight,
            },
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
  },
  lineStyle: {
    borderRadius: 10,
  },
  switchStyle: {
    flex: 1,
    position: 'absolute',
    borderRadius: 30,
    elevation: 8,
    shadowColor: COLORS.black,
  },
});
